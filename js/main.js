let xi;
let prevInsult;
let insultAdj = $('<p></p>');
let space = $('<span>&nbsp;</span>');
let insultNoun = $('<p></p>');
let adjShank = $('#adjective-lock').find('.shank');
let nounShank = $('#noun-lock').find('.shank');
let lockBgColor = $('.lock').css('backgroundColor');
let insultList = document.getElementById('insult-list');
let mimic = [];
let adjectives = [
    'absolute',
    'aggro',
    'antisocial',
    'appalling',
    'artless',
    'austere',
    'babbling',
    'barmy',
    'batty',
    'baying',
    'belligerent',
    'berserk',
    'bespoke',
    'bickering',
    'bilious',
    'blagging',
    'blasted',
    'bleeding',
    'blithering',
    'bloody',
    'blooming',
    'blundering',
    'bollocksed',
    'bone-idle',
    'bonny',
    'bothersome',
    'brazen',
    'bumbling',
    'callow',
    'certifiable',
    'chaffering',
    'chancy',
    'cheeky',
    'chronic',
    'chuffed',
    'chuntering',
    'churlish',
    'clapped-out',
    'clingy',
    'clumsy',
    'complete',
    'contemptible',
    'corpulent',
    'cowardly',
    'cracked',
    'craven',
    'cretinous',
    'cross',
    'cumbersome',
    'cursed',
    'cute',
    'daffy',
    'daft',
    'debauched',
    'decrepit',
    'demented',
    'dense',
    'depraved',
    'despicable',
    'despotic',
    'devious',
    'dewy',
    'dim',
    'dirty',
    'dismal',
    'dissembling',
    'dithering',
    'dodgy',
    'dozy',
    'draconian',
    'dreadful',
    'dull',
    'duplicitous',
    'errant',
    'facile',
    'faffing',
    'feckless',
    'festering',
    'fetid',
    'foolish',
    'foul',
    'frivolous',
    'frowsty',
    'frumpy',
    'fumbling',
    'fussy',
    'gammy',
    'ghastly',
    'giggly',
    'gimcrack',
    'gobby',
    'gobsmacked',
    'gommy',
    'gormless',
    'grafting',
    'grim',
    'grotesque',
    'grotty',
    'hackit',
    'hapless',
    'hideous',
    'horrid',
    'howling',
    'humdrum',
    'idle',
    'impertinent',
    'impudent',
    'inbred',
    'indolent',
    'inept',
    'insipid',
    'insolent',
    'interfering',
    'invigilating',
    'jammy',
    'jingoistic',
    'jolly',
    'knackered',
    'lecherous',
    'legless',
    'licentious',
    'limpid',
    'loathsome',
    'loitering',
    'loopy',
    'mad',
    'maggoty',
    'mangy',
    'manky',
    'mardy',
    'maundering',
    'maudlin',
    'meddlesome',
    'mental',
    'mewling',
    'middling',
    'misbegotten',
    'mischievous',
    'miserable',
    'morose',
    'mousy',
    'naff',
    'narked',
    'narky',
    'nattering',
    'negligent',
    'nettled',
    'nobbling',
    'noxious',
    'oblivious',
    'obscene',
    'obsequious',
    'obtuse',
    'odd',
    'odious',
    'officious',
    'ornery',
    'overbearing',
    'overgrown',
    'pathetic',
    'pear-shaped',
    'peckish',
    'peculiar',
    'pedestrian',
    'peevish',
    'pernickety',
    'persistent',
    'petulant',
    'plastic',
    'plodding',
    'plummy',
    'posh',
    'poxy',
    'prattling',
    'prevaricating',
    'priggish',
    'proper',
    'provincial',
    'puerile',
    'putrescent',
    'quarrelsome',
    'quibbling',
    'quivering',
    'rancid',
    'randy',
    'rank',
    'rat-arsed',
    'repulsive',
    'right',
    'ripe',
    'rotten',
    'rubbish',
    'rufty-tufty',
    'rum',
    'rustic',
    'sanctimonious',
    'sarky',
    'scabby',
    'scatty',
    'scheming',
    'scunnered',
    'shabby',
    'shambolic',
    'shameless',
    'shattered',
    'shifty',
    'shirty',
    'shite',
    'shouty',
    'shrewd',
    'shrill',
    'silly',
    'simpering',
    'simple',
    'skint',
    'skiving',
    'smarmy',
    'smug',
    'sneaky',
    'sniveling',
    'soggy',
    'sozzled',
    'spineless',
    'spotty',
    'squabbling',
    'squidgy',
    'stale',
    'sticky',
    'stroppy',
    'stubborn',
    'sullen',
    'surly',
    'tatty',
    'tedious',
    'tetchy',
    'thick',
    'tight-arsed',
    'tightfisted',
    'tiresome',
    'topping',
    'tragic',
    'twee',
    'unctuous',
    'unholy',
    'unrepentant',
    'unsavory',
    'utter',
    'vacuous',
    'vile',
    'vulgar',
    'wayward',
    'weapons-grade',
    'weaselly',
    'wee',
    'wet',
    'whinging',
    'wicked',
    'witless',
    'wittering',
    'wizard',
    'wonky',
    'wooden',
    'wretched',
    'yappy'
];
let nouns = [
    'addlepate',
    'affliction',
    'anorak',
    'arse',
    'arsehole',
    'arsepick',
    'aubergine',
    'bagman',
    'bampot',
    'barbarian',
    'beast',
    'Bedlamite',
    'bellend',
    'bellyacher',
    'berk',
    'biscuit',
    'blackguard',
    'bleeder',
    'blighter',
    'blowhard',
    'boffin',
    'bogey',
    'bollard',
    'boor',
    'bore',
    'braggart',
    'brute',
    'bum',
    'butty',
    'buzzkill',
    'cad',
    'cadger',
    'canary',
    'Casanova',
    'catastrophe',
    'chancer',
    'charlatan',
    'charlie',
    'chauvinist',
    'chav',
    'clod',
    'clot',
    'clown',
    'codger',
    'coupon',
    'courgette',
    'cow',
    'coward',
    'cowboy',
    'cretin',
    'crumpet',
    'cuddy',
    'cur',
    'curmudgeon',
    'cynic',
    'degenerate',
    'delinquent',
    'deviant',
    'dildo',
    'dilettante',
    'dimwit',
    'dingbat',
    'dink',
    'dinosaur',
    'disaster',
    'dobber',
    'dodo',
    'dogsbody',
    'dolt',
    'donkey',
    'donut',
    'duffer',
    'dullard',
    'dunce',
    'egomaniac',
    'fabulist',
    'fanny',
    'fink',
    'fishwife',
    'flake',
    'fleabag',
    'fraudster',
    'gammon',
    'gasbag',
    'gawper',
    'geezer',
    'gherkin',
    'git',
    'gobbler',
    'gobshite',
    'golem',
    'gomeril',
    'goose',
    'gorgon',
    'gossip',
    'gowk',
    'grinch',
    'guttersnipe',
    'halfwit',
    'harlot',
    'harpy',
    'harridan',
    'headache',
    'heel',
    'hellion',
    'hobbit',
    'hobgoblin',
    'Hobnob',
    'hooligan',
    'hustler',
    'imp',
    'inebriate',
    'insect',
    'jester',
    'killjoy',
    'kite',
    'knave',
    'knob',
    'knobhead',
    'lag',
    'laggard',
    'leech',
    'Lemsip',
    'lickspittle',
    'limpet',
    'loon',
    'lothario',
    'louse',
    'lout',
    'lummox',
    'lunatic',
    'lurker',
    'lush',
    'madman',
    'magpie',
    'malcontent',
    'maniac',
    'marionette',
    'milksop',
    'minger',
    'minion',
    'miscreant',
    'miser',
    'moppet',
    'mountebank',
    'mug',
    'munter',
    'muppet',
    'nag',
    'nark',
    'nimrod',
    'ninny',
    'nit',
    'nitwit',
    'nob',
    'nobbler',
    'noddy',
    'noodle',
    'nuisance',
    'numpty',
    'nut',
    'nutcase',
    'nutter',
    'oaf',
    'offender',
    'ogre',
    'parasite',
    'pedant',
    'peeler',
    'pest',
    'petrolhead',
    'philanderer',
    'philistine',
    'pillock',
    'pip',
    'pirate',
    'pissant',
    'plank',
    'pleb',
    'plimsoll',
    'plonker',
    'potato',
    'prat',
    'prattler',
    'prawn',
    'prick',
    'prig',
    'pseud',
    'punter',
    'purloiner',
    'quaffer',
    'raconteur',
    'relic',
    'reprobate',
    'rotter',
    'ruffian',
    'runt',
    'sarnie',
    'scone',
    'scoundrel',
    'scrub',
    'scrump',
    'shitgibbon',
    'showboat',
    'simpleton',
    'skinflint',
    'skunk',
    'slag',
    'slapper',
    'slowcoach',
    'slug',
    'slyboots',
    'smeghead',
    'snitch',
    'sot',
    'spanner',
    'spoon',
    'stodge',
    'strumpet',
    'spiv',
    'squirrel',
    'substitute',
    'swindler',
    'swine',
    'swot',
    'sycophant',
    'tearaway',
    'thickhead',
    'tip',
    'tit',
    'toad',
    'toady',
    'toff',
    'tosser',
    'tosspot',
    'tragedy',
    'tramp',
    'travesty',
    'trollop',
    'turkey',
    'turnip',
    'twat',
    'twit',
    'tyke',
    'urchin',
    'vagabond',
    'villain',
    'viper',
    'wally',
    'wanker',
    'wankstain',
    'wastrel',
    'wazzock',
    'whelp',
    'whinger',
    'winkle',
    'womble',
    'Wotsit',
    'wraith',
    'yob',
    'yobbo',
    'yokel',
    'zealot'
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
