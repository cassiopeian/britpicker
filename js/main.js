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