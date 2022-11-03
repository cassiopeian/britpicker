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