import { translations } from './translations-array.js';
import { adjectives } from './adjectives-array.js';
import { nouns } from './nouns-array.js';

let xi;
let prevInsult;
let insultAdj = $('<p></p>');
let space = $('<span>&nbsp;</span>');
let insultNoun = $('<p></p>');
let adjShank = $('#adjective-lock').find('.shank');
let nounShank = $('#noun-lock').find('.shank');
let lockBgColor = $('.lock').css('backgroundColor');
let insultList = document.getElementById('insult-list');
let beSplit;

$(window).on('load', function() {
    let dialectHeight = $('#dialect-container').outerHeight();

    // set the height of the dialect-container divider 
    $('#dialect-container .divider').css('height', dialectHeight);
});

function dividerIs(color) {
    $('#text-container .divider').css('backgroundColor', color);
};

$('.text').on('focus blur', function() {
    const blue = 'rgb(60, 95, 150)';
    const gray = 'rgb(211, 211, 228)';

    // focus state toggles divider color
    $(this).is(':focus') ? dividerIs(blue) : dividerIs(gray);
});

$('.us').on('click', function() {
    // focus the american english text
    $('#ae').focus();
});

$('.uk').on('click', function() {
    // focus the british english text
    $('#be').focus();
});

// when the trash icon is clicked
$('#clear-all').on('click', function() {
    // clear all american and british text
    $('#ae').val('');
    $('#be').html('');
});

// modify trash icon, on hover
$('#clear-all img').hover(
    function() {
        // prevent hover state on small screens
        if ($(window).width() > 415) {
            $(this).attr('src', './images/icons/trash-filled.svg');
        }
    }, 
    function() {
        $(this).attr('src', './images/icons/trash.svg');
    }
);

$('#highlight-toggle').on('click', function() {
    if ($('mark').hasClass('highlights-off')) {
        // turn highlights on
        $('mark').removeClass('highlights-off');
    } else {
        // turn highlights off
        $('mark').addClass('highlights-off');
    }
});

// modify highlighter icon, on hover
$('#highlight-toggle img').hover(
    function() {
        // prevent hover state on small screens
        if ($(window).width() > 415) {
            $(this).attr('src', './images/icons/tilted-highlighter-filled.svg')
        } 
    },
    function() {
        $(this).attr('src', './images/icons/tilted-highlighter.svg');
    }
);

$(document).on('keyup change input', '#ae', function() {
    let capitalized;
    let uppercase;

    // turn #ae into an array of words, split at non-words
    let aeSplit = $('#ae').val().split(/([_\W])/);
    beSplit = aeSplit;

    // while looping through the #be text
    for (let i = 0; i < beSplit.length; i++) {
        // call the current word "word"
        let word = beSplit[i];
        // and the index of that word, "index"
        let index = beSplit.indexOf(beSplit[i]);
        // the previous word takes spaces into account
        let prevWord = beSplit[i-2];
        // index of prevWord
        let prevIndex = beSplit.indexOf(beSplit[i-2]);
        // match multi-word phrases
        let twoWords = prevWord + ' ' + word;
        // hyphenated words
        let hyphenatedWord = prevWord + '-' + word;
        // the word before the previous word
        let beforePrev = beSplit[i-4];
        // index of beforePrev
        let beforePrevIndex = beSplit.indexOf(beSplit[i-4]);
        // match multi-word phrases
        let threeWords = beforePrev + ' ' + prevWord + ' ' + word;
        // two-word phrase consisting of a contraction and a word
        let contractedPhrase = beforePrev + '\'' + prevWord + ' ' + word;
        // two-word phrase consisting of a word and a contraction
        let endOnContraction =  beforePrev + ' ' + prevWord + '\'' + word; 
        // phrase consisting of a hyphenated word and a word
        let hyphenatedPhrase = beforePrev + '-' + prevWord + ' ' + word;
        // needed between two-word and one-word translations
        let hiddenSpace = '\u200B';

        // determine the case of the american word
        if (word === word.toUpperCase()) {
            uppercase = true;
            capitalized = false;
        } else if (word.charAt(0).match(/[A-Z]/) && word.charAt(1).match(/[a-z]/)) {
            uppercase = false;
            capitalized = true;
        } else if (prevWord.charAt(0).match(/[A-Z]/) && prevWord.charAt(1).match(/[a-z]/) && word === word.toLowerCase()) {
            uppercase = false;
            capitalized = true;
        } else {
            uppercase = false;
            capitalized = false;
        }

        // match the case of the displayed american word
        function caseMatch(explanation = '', britPhrase, usPhrase, altPhrase = '', secretIndex) {

            let mismatches = ['cash machine', 'caravan'];

            if (mismatches.includes(britPhrase)) {
                // lowercase translations from abbreviations
                britPhrase = britPhrase.toLowerCase();
            } else if (uppercase === true) {
                // set the whole word uppercase
                britPhrase = britPhrase.toUpperCase();
                usPhrase = usPhrase.toUpperCase();
                altPhrase = altPhrase.toUpperCase();
            } else if (capitalized === true) {
                // cap the first letter, and make the rest lowercase
                britPhrase = britPhrase[0].toUpperCase() + britPhrase.slice(1);
                usPhrase = usPhrase[0].toUpperCase() + usPhrase.slice(1);
                if (altPhrase.length > 0) {
                    altPhrase = altPhrase[0].toUpperCase() + altPhrase.slice(1);
                }
            } else {
                // set the whole word lowercase
                britPhrase = britPhrase.toLowerCase();
                usPhrase = usPhrase.toLowerCase();
                altPhrase = altPhrase.toLowerCase();
            }

            return `<span><div class="context-box"><p><span class="context">Context:</span> ${explanation}</p></div><span><mark class="translated">${britPhrase}</mark><div class="edits-container"><button class="edit" type="button">${usPhrase}</button><button class="edit" type="button">${altPhrase}</button></div><span hidden>${secretIndex}</span></span></span>`;
        }

        // loop through each phrase in the translations array
        translations.forEach(phrase => {
            let pluralExists = typeof phrase.plural !== 'undefined';
            let noPluralExists = typeof phrase.plural == 'undefined';

            // if the first word of a phrase is already translated
            if (typeof prevWord !== 'undefined' && prevWord[0] == '<') {
                // strip the tags and hidden info from the translation
                prevWord = $(prevWord);
                let findMark = prevWord.find('mark');
                let markText = findMark.html();
                prevWord = markText;
                twoWords = prevWord + ' ' + word;
                hyphenatedWord = prevWord + '-' + word;
                contractedPhrase = beforePrev + '\'' + prevWord + ' ' + word;
            }

            // if a typed phrase matches an american phrase
            if (threeWords.toLowerCase() == phrase.american
                || contractedPhrase.toLowerCase() == phrase.american
                || hyphenatedPhrase.toLowerCase() == phrase.american
                || endOnContraction.toLowerCase() == phrase.american) {
                // replace the split three-word phrase/contracted phrase with the joined american phrase 
                aeSplit.splice(beforePrevIndex, 5, phrase.american);
                // replace that with the british phrase and a hidden space
                beSplit.splice(beforePrevIndex, 1, caseMatch(phrase.context, phrase.british, phrase.american, phrase.alt, index-4), hiddenSpace, hiddenSpace, hiddenSpace);
            } else if (pluralExists && threeWords.toLowerCase() == phrase.american + 's'
                || threeWords.toLowerCase() == phrase.american + 'es'
                || contractedPhrase.toLowerCase() == phrase.american + 's'
                || contractedPhrase.toLowerCase() == phrase.american + 'es') {
                // replace those three words with the joined american phrase
                aeSplit.splice(beforePrevIndex, 5, phrase.american);
                // replace that with the pluralized british phrase and a hidden space
                beSplit.splice(beforePrevIndex, 1, caseMatch(phrase.context, phrase.plural, threeWords, phrase.altplural, index-4), hiddenSpace, hiddenSpace, hiddenSpace);
            } else if (pluralExists && hyphenatedPhrase.toLowerCase() == phrase.american + 's'
                || hyphenatedPhrase.toLowerCase() == phrase.american + 'es') {
                // replace those three words with the joined american phrase
                aeSplit.splice(beforePrevIndex, 5, phrase.american);
                // replace that with the pluralized british phrase and a hidden space
                beSplit.splice(beforePrevIndex, 1, caseMatch(phrase.context, phrase.plural, hyphenatedPhrase, phrase.altplural, index-4), hiddenSpace, hiddenSpace, hiddenSpace);
            } else if (twoWords.toLowerCase() == phrase.american 
                || hyphenatedWord.toLowerCase() == phrase.american) {
                // replace both words and the space (or hyphen) with the joined american phrase 
                aeSplit.splice(prevIndex, 3, phrase.american);
                // replace that with the british phrase and a hidden space
                beSplit.splice(prevIndex, 1, caseMatch(phrase.context, phrase.british, phrase.typed || phrase.american, phrase.alt, index-2), hiddenSpace);
            } else if (pluralExists && twoWords.toLowerCase() == phrase.american + 's' 
                || twoWords.toLowerCase() == phrase.american + 'es'
                || twoWords.toLowerCase() == phrase.american.slice(0, -3) + 'men'
                || twoWords.toLowerCase() == phrase.american.slice(0, -1) + 'ies' 
                || hyphenatedWord.toLowerCase() == phrase.american + 's'
                || hyphenatedWord.toLowerCase() == phrase.american + 'es') {
                // replace both words and the space with the joined american phrase 
                aeSplit.splice(prevIndex, 3, phrase.american);
                // replace that with the pluralized british phrase and a hidden space
                beSplit.splice(prevIndex, 1, caseMatch(phrase.context, phrase.plural, phrase.typedplural || twoWords, phrase.altplural, index-2), hiddenSpace);
            } else if (word.toLowerCase() == phrase.american) {
                // or replace single words with the "translated" british phrase
                beSplit.splice(index, 1, caseMatch(phrase.context, phrase.british, word, phrase.alt, index));
            } else if (pluralExists && word.toLowerCase() == phrase.american + 's' 
                || word.toLowerCase() == phrase.american + 'es'
                || word.toLowerCase() == phrase.american.slice(0, -1) + 'ies') {
                // or replace pluralized words
                beSplit.splice(index, 1, caseMatch(phrase.context, phrase.plural, word, phrase.altplural, index));
            } else if (pluralExists && word.length > 3 && word.toLowerCase() == phrase.american.slice(0, -3) + 'men') {
                // replace pluralized words (w/ 4+ letters) ending with -men
                beSplit.splice(index, 1, caseMatch(phrase.context, phrase.plural, word, phrase.altplural, index));
            } else if (word.toLowerCase() == phrase.american + 'ing') {
                // or replace words ending with "-ing"
                beSplit.splice(index, 1, caseMatch(phrase.context, phrase.british + 'ing', word, phrase.alt, index));
            } else if (word.toLowerCase() == phrase.american + 'ed') {
                // or replace words ending with "-ed"
                beSplit.splice(index, 1, caseMatch(phrase.context, phrase.british + 'ed', word, phrase.alt, index));
            } else if (noPluralExists && word.toLowerCase() == phrase.american + 's') {
                // or replace words ending with "-s" that aren't pluralizations
                beSplit.splice(index, 1, caseMatch(phrase.context, phrase.british + 's', word, phrase.alt, index));
            }
        });
    }

    // join and display the words in the split British array
    $('#be').html(beSplit.join(''));
});

$(document).on({
    // when hovering over 'mark' elements
    mouseenter: function() {
        let thisContextBox = $(this).parent().siblings('.context-box');
        let clarification = $(this).parent().siblings('.context-box').children('p');

        // if the context info isn't empty
        if (clarification.text() !== 'Context: ') {
            // display the context info
            thisContextBox.css('display', 'block');
        }
    },
    mouseleave: function() {
        // hide the context info
        $(this).parent().siblings('.context-box').css('display', 'none')
    }
}, 'mark');

$(document).on('click', 'mark', function() {
    let thisDropdown = $(this).siblings('.edits-container');
    let altOption = $(this).siblings('.edits-container').children('button:nth-child(2)');

    // if there is no alt translation
    if (altOption.html() === '') {
        // hide the empty button
        $(altOption).css('display', 'none');
    }

    if (thisDropdown.is(':hidden')) {
        // hide other dropdowns, so they can't overlap
        $('.edits-container').css('display', 'none');
        // display the clicked dropdown
        thisDropdown.slideDown('slow');
    } else {
        // hide the clicked dropdown
        thisDropdown.slideUp('slow');
    }
});

function tagEdit(secondPhrase) {
    return `<span class="changed">${secondPhrase}</span>`
}

$(document).on('click', '.edit', function() {
    let updatedWord = $(this).html();
    let copiedIndex = $(this).parent().siblings('span').html();

    // replace the highlighted word with the selected edit
    beSplit.splice(copiedIndex, 1, tagEdit(updatedWord));
    $('#be').html(beSplit.join(''));
});

$('#toggle-dialects').on('click', function() {
    let americanText = $('#ae');
    let britishText = $('#be');

    // toggle between american and british english
    americanText.toggle();
    britishText.toggle();

    // if the british dialect is visible
    if (britishText.css('display') === 'block') {
        // display the british label
        $('#british.dialect-wrapper').css('display', 'flex');
        // hide the american label
        $('#american.dialect-wrapper').css('display', 'none');
        // show the view american button, on click
        $(this).html('View American English');
    } else {
        // hide the british label
        $('#british.dialect-wrapper').css('display', 'none');
        // display the american label
        $('#american.dialect-wrapper').css('display', 'flex');
        // show the view british button, on click
        $(this).html('View British English');
    }
});

/* **************
INSULT GENERATOR
************** */

$('#insult-tab').on('click', function() {
    // open the insult generator
    $('aside').animate({
        right: '-50px'
    }, 2000);
});

$('#info-icon').on('click', function() {
    // if the insult blurb is hidden
    if ($('#insult-info').css('display') === 'none') {
        // make it slide down
        $('#insult-info').slideDown('slow');
    } else {
        // make it slide back up
        $('#insult-info').slideUp('slow');
    }
});

function generateInsultButtonText() {
    let beRude = [
        'Slag me off',
        'Take the piss',
        'Have a go',
        'Do your worst',
        'Make me cry',
        'Have a laugh',
        'Roast me',
        'Don\'t hold back',
        'Lemme have it',
        'Go on, then',
        'Insult me'
    ];
    
    let i = Math.floor(Math.random() * beRude.length);
    let randomInsultButtonText = beRude[i];

    // if both locks are engaged
    if (adjShank.hasClass('locked') === true && nounShank.hasClass('locked') === true) {
        // stet the button text
        return;
    } else {
        // update the insult button's text
        $('#insult-me').html(randomInsultButtonText);
    }
};

function generateInsult() {
    let ai = Math.floor(Math.random() * adjectives.length);
    let randomAdjective;
    let ni = Math.floor(Math.random() * nouns.length);
    let randomNoun;

    // randomize the adjective, unless it's locked
    adjShank.hasClass('locked') === true ? randomAdjective = randomAdjective : randomAdjective = adjectives[ai];  

    // randomize the noun, unless it's locked
    nounShank.hasClass('locked') === true ? randomNoun = randomNoun : randomNoun = nouns[ni];

    // wrap the random adjective in a p tag
    $(insultAdj).text(randomAdjective);
    
    // wrap the random noun in a p tag
    $(insultNoun).text(randomNoun);

    // display the random insult in the #insult div
    $('#insult').append(insultAdj, space, insultNoun);
};

$('#insult-me').on('click', function() {
    //retain a copy of the previous insult
    prevInsult = $('#insult').html();

    if (adjShank.hasClass('locked') === true && nounShank.hasClass('locked') === false) {
        // reset the noun's starting position and clear the word
        $(insultNoun).css('top', '-2.3rem').detach();
    } else if (nounShank.hasClass('locked') === true && adjShank.hasClass('locked') === false) {
        // reset the adjective's starting position and clear the word
        $(insultAdj).css('top', '-2.3rem').detach();
    } else if (adjShank.hasClass('locked') === true && nounShank.hasClass('locked') === true) {
        // jiggle the locks
        $('.lock-wrapper').addClass('lock-dance');

        // make the insult me button flash red
        $('#insult-me').addClass('red-flash');

        // hold both words, if both locks are engaged
        return;
    } else {
        // reset the insult's starting position
        $('#insult p, #insult span').css('top', '-2.3rem');
        
        // clear previous insult
        $('#insult').html('');
    }

    generateInsultButtonText();

    generateInsult();

    console.log(prevInsult);

    // make the insult slide into view
    $('#insult p, #insult span').animate({
        top: 0
    }, 500); 
    
    // enable the lock buttons, if an insult has been generated
    $(insultAdj).text() === '' || $(insultNoun).text() === '' ? $('.lock').addClass('mostly-disabled') : $('.lock').removeClass('mostly-disabled');

    // display the prev button, if two insults have been generated
    prevInsult.length > 0 ? $('#prev-arrow').css('visibility', 'visible') : $('#prev-arrow').css('visibility', 'hidden');

    // display the like button, if an insult has been generated
    $(insultAdj).text() === '' || $(insultNoun).text() === '' ? $('#add-insult').css('visibility', 'hidden') : $('#add-insult').css('visibility', 'visible');
});

$('.lock-wrapper').on('animationend', function() {
    // remove the class, when the locks stop jiggling
    $(this).removeClass('lock-dance');
});

$('#insult-me').on('animationend', function() {
    // remove the class, when the red flash ends
    $(this).removeClass('red-flash');
});

$('#insult-generator .close').on('click', function() {
    let windowWidth = $(window).width();

    // close the insult generator
    $('aside').animate({
        right: `${windowWidth - 50}px`
    }, 2000);
});

function padlockColor(sel, color) {
    // update the shank color
    $(sel).find('.arc-l, .arc-r').css('borderColor', color);

    // update the lock body color
    $(sel).find('.lock-body').css('backgroundColor', color);
};

$('.lock').on('click', function() {
    let thisShank = $(this).find('.shank');
    let gray = 'rgb(191, 191, 197)';
    let red = 'rgb(226, 50, 42)';

    if ($(this).hasClass('mostly-disabled') === true) {
        // flash the click me first notification
        $('#lock-alert').fadeIn(400, function() {
            $('#lock-alert').delay(1500).fadeOut(200);
        });
        // disable the locks
        return;
    }

    if (thisShank.hasClass('locked') === true) {
        // open the padlock shank
        thisShank.removeClass('locked').addClass('unlocked');

        // turn the lock gray
        padlockColor(this, gray);
    } else {
        // close the padlock shank
        thisShank.addClass('locked').removeClass('unlocked');

        // turn the lock red
        padlockColor(this, red);
    }
});

// make the keyholes match the lock buttons' backgrounds
$('.keyhole').css('backgroundColor', lockBgColor);

$('#prev-arrow').on('click', function() {
    // prevent prev, if a lock is engaged
    if (adjShank.hasClass('locked') === true || nounShank.hasClass('locked') === true) {
        return;
    } else if (adjShank.hasClass('locked') === true && nounShank.hasClass('locked') === true) {
        return;
    } else {
        // reset the insult's starting position
        $('#insult p, #insult span').css('top', '-2.3rem');
            
        // clear current insult
        $('#insult').html('');
    
        // display the previous insult in the #insult div
        $('#insult').append(prevInsult);
    }
});

$('#add-insult').on('click', function() {
    let currentInsult = $('#insult').text();

    // add the liked insult to the favorites list
    $('#favorite-insults ol').append(`
        <li>
            <p>${currentInsult}</p>
            <button class="delete-insult" type="button">
                <span>✕</span>
            </button>
        </li>
    `);

    // display the favorites list
    $('#favorite-insults').css('display', 'flex');

    // if there is overflow, and the scrollbar exists
    if (insultList.offsetHeight < insultList.scrollHeight) {
        // make the nav arrows visible
        $('#insult-nav').css('visibility', 'visible');
    }
});

$('#up-arrow').on('click', function() {
    // scroll up through the insult list
    insultList.scrollBy({
        top: -80,
        left: 0,
        behavior: 'smooth'
    });
});

$('#down-arrow').on('click', function() {
    // scroll down through the insult list
    insultList.scrollBy({
        top: 80,
        left: 0,
        behavior: 'smooth'
    });
});

$(document).on('click', '.delete-insult', function() {
    // create an array of red delete buttons
    let xsArr = Array.from($('.delete-insult'));
    
    // get the index of the clicked delete button
    xi = xsArr.indexOf(this);

    // get the insult from the p tag "prev" to "this" selected button
    let unwantedInsult = $(this).prev().text();

    // add the unwanted insult to the confirmation message
    $('#deletion-confirmation p').text(`Delete ${unwantedInsult}?`);

    // display the #deletion-confirmation popup
    $('#modal').css('display', 'flex');
});

$('#close-modal, #no-del').on('click', function() {
    // close the #deletion-confirmation popup
    $('#modal').css('display', 'none');
});

$('#yes-del').on('click', function() {
    let xs = $('.delete-insult');

    // delete the parent li of the clicked delete button
    xs[xi].parentElement.remove();

    // close the #deletion-confirmation popup
    $('#modal').css('display', 'none');
});
