let mimic = [];

$(window).on('load', function() {
    let dialectHeight = $('#dialect-container').outerHeight();

    // set the height of the dialect-container divider 
    $('#dialect-container .divider').css('height', dialectHeight);
});

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

    for (let i = 0; i < letters.length; i++) {
        // send each letter to the mimic array  
        mimic.push(letters[i]);      
        
        // add the joined letters to the british text
        $('#be').text(mimic.join(''));
    }

    // clear the mimic array
    mimic = [];
};

$('#ae').on('keyup', copyCat);