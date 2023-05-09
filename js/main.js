let insultAdj = $('<p></p>');
let space = $('<span>&nbsp;</span>');
let insultNoun = $('<p></p>');
let adjShank = $('#adjective-lock').children('.shank');
let nounShank = $('#noun-lock').children('.shank');
let lockBgColor = $('.lock').css('backgroundColor');
let insultList = document.getElementById('insult-list');
let mimic = [];
let adjectives = [
    'absolute',
    'antisocial',
    'artless',
    'barmy',
    'blagging',
    'blasted',
    'bleeding',
    'blithering',
    'bloody',
    'blooming',
    'blundering',
    'bollocksed',
    'bone-idle',
    'bothersome',
    'brazen',
    'bumbling',
    'cheeky',
    'clumsy',
    'complete',
    'contemptible',
    'cowardly',
    'craven',
    'cretinous',
    'cumbersome',
    'cursed',
    'daffy',
    'daft',
    'dense',
    'depraved',
    'despicable',
    'dewy',
    'dim',
    'dithering',
    'dodgy',
    'faffing',
    'feckless',
    'frivolous',
    'fussy',
    'gammy',
    'ghastly',
    'gobby',
    'gobsmacked',
    'gormless',
    'hapless',
    'horrid',
    'howling',
    'humdrum',
    'inept',
    'insipid',
    'interfering',
    'jammy',
    'knackered',
    'loopy',
    'mad',
    'maggoty',
    'mangy',
    'manky',
    'mardy',
    'mewling',
    'middling',
    'misbegotten',
    'mischievous',
    'miserable',
    'naff',
    'obsequious',
    'overgrown',
    'pathetic',
    'petulant',
    'plodding',
    'plummy',
    'posh',
    'poxy',
    'prattling',
    'priggish',
    'proper',
    'provincial',
    'putrescent',
    'quarrelsome',
    'rank',
    'right',
    'rubbish',
    'rustic',
    'sanctimonious',
    'scheming',
    'shameless',
    'shirty',
    'silly',
    'skint',
    'skiving',
    'sniveling',
    'soggy',
    'sozzled',
    'spotty',
    'stroppy',
    'thick',
    'tightfisted',
    'tragic',
    'twee',
    'unctuous',
    'unrepentant',
    'utter',
    'vacuous',
    'vulgar',
    'wee',
    'whinging',
    'wicked',
    'wonky'
];
let nouns = [
    'anorak',
    'barbarian',
    'Bedlamite',
    'bellend',
    'berk',
    'biscuit',
    'blackguard',
    'bleeder',
    'blighter',
    'blowhard',
    'boffin',
    'bollard',
    'braggart',
    'butty',
    'cad',
    'chancer',
    'charlie',
    'chav',
    'clod',
    'codger',
    'cretin',
    'crumpet',
    'cuddy',
    'degenerate',
    'delinquent',
    'dildo',
    'dobber',
    'dogsbody',
    'dolt',
    'donkey',
    'donut',
    'duffer',
    'dunce',
    'gherkin',
    'git',
    'gobshite',
    'gomeril',
    'guttersnipe',
    'halfwit',
    'harpy',
    'hobgoblin',
    'Hobnob',
    'hooligan',
    'inebriate',
    'insect',
    'knave',
    'knob',
    'knobhead',
    'laggard',
    'Lemsip',
    'limpet',
    'lout',
    'lummox',
    'lush',
    'minger',
    'miscreant',
    'miser',
    'mug',
    'munter',
    'muppet',
    'ninny',
    'nitwit',
    'noodle',
    'numpty',
    'nutter',
    'oaf',
    'offender',
    'philistine',
    'pillock',
    'pissant',
    'plank',
    'pleb',
    'plonker',
    'prat',
    'prawn',
    'prick',
    'prig',
    'reprobate',
    'rotter',
    'ruffian',
    'sarnie',
    'slowcoach',
    'sot',
    'spanner',
    'strumpet',
    'spiv',
    'squirrel',
    'substitute',
    'swine',
    'swot',
    'sycophant',
    'tit',
    'toff',
    'tosser',
    'tosspot',
    'trollop',
    'turnip',
    'twat',
    'twit',
    'villain',
    'wally',
    'wanker',
    'wankstain',
    'wastrel',
    'womble',
    'yob',
    'yokel'
];

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

function dividerIs(color) {
    $('#text-container .divider').css('backgroundColor', color);
};

$('.text').on('focus blur', function() {
    const blue = 'rgb(60, 95, 150)';
    const gray = 'rgb(211, 211, 228)';

    window.addEventListener('keydown', indentText);

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
    // clear all text in the american english box
    $('#ae').html('');
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

    // if each letter is deleted individually, to clear #ae text
    if ($('#ae').html() === '') {
        // clear any lingering first letters in the #be text
        $('#be').html('');
    }
};

$('#ae').on('keyup', copyCat);

$('#toggle-dialects').on('click', function() {
    let americanLabel = $('#dialect-container div:nth-child(1)');
    let americanText = $('#ae');
    let britishLabel = $('#dialect-container div:nth-child(3)');
    let britishText = $('#be');

    // if the british dialect is visible
    if (britishLabel.css('display') === 'block') {
        // show the view british button, on click
        $(this).html('View British English');
    } else {
        // show the view american button, on click
        $(this).html('View American English');
    }

    // toggle between american and british english
    americanLabel.toggle();
    americanText.toggle();
    britishLabel.toggle();
    britishText.toggle();
});

$('#insult-tab').on('click', function() {
    // open the insult generator
    $('aside').animate({
        right: 0
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

    // update the insult button's text
    $('#insult-me').html(randomInsultButtonText);
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
    let prevInsult = $('#insult').html();

    if (adjShank.hasClass('locked') === true && nounShank.hasClass('locked') === false) {
        // reset the noun's starting position and clear the word
        $(insultNoun).css('top', '-2.3rem').detach();
    } else if (nounShank.hasClass('locked') === true && adjShank.hasClass('locked') === false) {
        // reset the adjective's starting position and clear the word
        $(insultAdj).css('top', '-2.3rem').detach();
    } else if (adjShank.hasClass('locked') === true && nounShank.hasClass('locked') === true) {
        // hold both words, if both locks are engaged
        $(insultAdj, insultNoun).css('top', '0px');
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

    // display the like button, if an insult has been generated
    $(insultAdj).text() === '' || $(insultNoun).text() === '' ? $('#add-insult').css('visibility', 'hidden') : $('#add-insult').css('visibility', 'visible');
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
    $(sel).children('.lock-body').css('backgroundColor', color);
};

$('.lock').on('click', function() {
    let thisShank = $(this).children('.shank');
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

$('#add-insult').on('click', function() {
    let currentInsult = $('#insult').text();

    // add the liked insult to the favorites list
    $('#favorite-insults ol').append(`<li>${currentInsult}</li>`);

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
