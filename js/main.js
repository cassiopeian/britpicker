let mimic = [];

function indentText(event) {
    // if the tab key is pressed
    if (event.key === 'Tab') {
        // prevent blur
        event.preventDefault();

        let selection = document.getSelection();
        let range = selection.getRangeAt(0);
        let tabNode = document.createTextNode('\u0009');

        range.insertNode(tabNode);
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
    }
};

$('.text').on('focus blur', function() {
    window.addEventListener('keydown', indentText);
});

// when the trash icon is clicked
$('#trash').on('click', function() {
    // clear all text in the american english box
    $('#ae').html('');
});

// modify trash icon, on hover
$('#trash').hover(
    function() {
        $(this).attr('src', './images/icons/trash-filled.svg');
    }, 
    function() {
        $(this).attr('src', './images/icons/trash.svg');
    }
);

function copyCat(e) {
    let letters = $('#ae').html().split('');
    
    // prevent duplication of capitalized letters
    if (e.key === 'Shift') {
        return;
    }

    // send the first letter to the mimic array
    mimic.push(letters.splice(0));

    
    // mimic = mimic.join(' ');

    console.log(`letters: ${letters}`);
    console.log(`mimic: ${mimic}`);


    // add the letter to the british text
    $('#be').text(mimic);

    // clear the mimic array
    mimic = [];
};

$('#ae').on('keyup', copyCat);