let translations = [
    {
        american: '911',
        british: '999'
    },
    {
        american: '2000s',
        british: 'noughties'
    },
    {
        american: 'acetaminophen',
        british: 'paracetamol'
    },
    {
        american: 'ad',
        british: 'advert',
        plural: 'adverts'
    },
    {
        american: 'advice column',
        british: 'agony column',
        plural: 'agony columns'
    },
    {
        american: 'advice columnist',
        british: 'agony aunt',
        plural: 'agony aunts',
        alt: 'agony uncle',
        altplural: 'agony uncles'
    },
    {
        american: 'aggressive',
        british: 'aggro'
    },
    {
        american: 'airplane',
        british: 'aeroplane',
        plural: 'aeroplanes'
    },
    {
        american: 'aluminum',
        british: 'aluminium'
    },
    {
        // aluminum foil
        american: 'aluminium foil',
        british: 'tinfoil',
        plural: 'tinfoils',
        typed: 'aluminum foil',
        typedplural: 'aluminum foils'
    },
    {
        american: 'among',
        british: 'amongst'
    },
    {
        american: 'an herb',
        british: 'a herb'
    },
    {
        american: 'angry',
        british: 'cross',
        alt: 'shirty'
    },
    {
        american: 'apartment',
        british: 'flat',
        plural: 'flats'
    },
    {
        american: 'an apartment',
        british: 'a flat'
    },
    {
        american: 'arguing',
        british: 'rowing',
        alt: 'quarreling'
    },
    {
        american: 'argument',
        british: 'argy-bargy',
        plural: 'argy-bargies',
        alt: 'row',
        altplural: 'rows'
    },
    {
        american: 'arugula',
        british: 'rocket'
    },
    {
        american: 'askew',
        british: 'skew-whiff'
    },
    {
        american: 'an arugula',
        british: 'a rocket'
    },
    {
        american: 'ass',
        british: 'arse',
        plural: 'arses'
    },
    {
        american: 'astounded',
        british: 'gobsmacked'
    },
    {
        american: 'attorney',
        british: 'solicitor',
        plural: 'solicitors'
    },
    {
        american: 'attractive',
        british: 'lush'
    },
    {
        american: 'aughts',
        british: 'noughties'
    },
    {
        american: 'awesome',
        british: 'wicked',
        alt: 'brilliant'
    },
    {
        american: 'an awesome',
        british: 'a wicked'
    },
    {
        american: 'bachelor party',
        british: 'stag do',
        plural: 'stag dos'
    },
    {
        american: 'bachelorette party',
        british: 'hen do',
        plural: 'hen dos'
    },
    {
        american: 'backpack',
        british: 'rucksack',
        plural: 'rucksacks'
    },
    {
        american: 'backward',
        british: 'backwards'
    },
    {
        american: 'bad guy',
        british: 'baddie',
        plural: 'baddies'
    },
    {
        american: 'baked potato',
        british: 'jacket potato',
        plural: 'jacket potatoes'
    },
    {
        american: 'ballpoint pen',
        british: 'Biro',
        plural: 'Biros'
    },
    {
        american: 'band-aid',
        british: 'plaster',
        plural: 'plasters'
    },
    {
        american: 'bandaid',
        british: 'plaster',
        plural: 'plasters'
    },
    {
        american: 'bangs',
        british: 'fringe'
    },
    {
        american: 'bar',
        british: 'pub',
        plural: 'pubs'
    },
    {
        american: 'barrette',
        british: 'hair slide',
        plural: 'hair slides'
    },
    {
        american: 'bartender',
        british: 'barman',
        plural: 'barmen'
    },
    {
        american: 'bathing suit',
        british: 'swimming costume',
        plural: 'swimming costumes'
    },
    {
        american: 'bathroom',
        british: 'toilet',
        plural: 'toilets',
        alt: 'bog',
        altplural: 'bogs'
    },
    {
        american: 'baseboard',
        british: 'skirting board',
        plural: 'skirting boards'
    },
    {
        american: 'bastard',
        british: 'blighter',
        plural: 'blighters',
        alt: 'bleeder',
        altplural: 'bleeders'
    },
    {
        american: 'bedspread',
        british: 'counterpane',
        plural: 'counterpanes'
    },
    {
        american: 'bellhop',
        british: 'porter',
        plural: 'porters'
    },
    {
        american: 'big rig',
        british: 'articulated lorry',
        plural: 'articulated lorries',
        alt: 'artic',
        altplural: 'artics'
    },
    {
        american: 'billboard',
        british: 'hoarding',
        plural: 'hoardings'
    },
    {
        american: 'blather',
        british: 'waffle'
    },
    {
        american: 'blathered',
        british: 'waffled'
    },
    {
        american: 'blathering',
        british: 'waffling'
    },
    {
        american: 'blunder',
        british: 'clanger',
        plural: 'clangers'
    },
    {
        american: 'boardwalk',
        british: 'promenade',
        plural: 'promenades'
    },
    {
        american: 'bobby pin',
        british: 'kirby grip',
        plural: 'kirby grips',
        alt: 'hair grip',
        altplural: 'hair grips'
    },
    {
        american: 'booger',
        british: 'bogey',
        plural: 'bogeys'
    },
    {
        american: 'botch',
        british: 'bodge'
    },
    {
        american: 'boy',
        british: 'lad',
        plural: 'lads'
    },
    {
        american: 'braid',
        british: 'plait',
        plural: 'plaits'
    },
    {
        american: 'breadbox',
        british: 'bread bin',
        plural: 'bread bins'
    },
    {
        american: 'bro',
        british: 'bruv',
        plural: 'bruvs'
    },
    {
        american: 'broke',
        british: 'skint',
        alt: 'brassic'
    },
    {
        american: 'bruh',
        british: 'bruv',
        plural: 'bruvs'
    },
    {
        american: 'burlap',
        british: 'hessian'
    },
    {
        american: 'burglarize',
        british: 'burgle'
    },
    {
        american: 'burglarized',
        british: 'burgled'
    },
    {
        american: 'busy signal',
        british: 'engaged tone',
        plural: 'engaged tones'
    },
    {
        american: 'butterface',
        british: 'munter',
        plural: 'munters',
        alt: 'minger',
        altplural: 'mingers'
    },
    {
        american: 'caboose',
        british: 'guard\'s van',
        plural: 'guards\' vans'
    },
    {
        american: 'calendar',
        british: 'diary',
        plural: 'diaries'
    },
    {
        american: 'can of',
        british: 'tin of'
    },
    {
        american: 'candy apple',
        british: 'toffee apple',
        plural: 'toffee apples'
    },
    {
        american: 'cans of',
        british: 'tins of'
    },
    {
        american: 'canned',
        british: 'tinned'
    },
    {
        american: 'careen',
        british: 'career'
    },
    {
        american: 'cans of',
        british: 'tins of'
    },
    {
        american: 'caregiver',
        british: 'carer',
        plural: 'carers'
    },
    {
        american: 'carnival',
        british: 'funfair',
        plural: 'funfairs'
    },
    {
        american: 'cart',
        british: 'trolley',
        plural: 'trolleys'
    },
    {
        american: 'cat',
        british: 'moggy',
        plural: 'moggies'
    },
    {
        american: 'cell phone',
        british: 'phone',
        plural: 'phones',
        alt: 'mobile',
        altplural: 'mobiles'
    },
    {
        american: 'check mark',
        british: 'tick',
        plural: 'ticks'
    },
    {
        american: 'checkers',
        british: 'draughts'
    },
    {
        american: 'checking account',
        british: 'current account',
        plural: 'current accounts'
    },
    {
        american: 'checkout',
        british: 'the till'
    },
    {
        american: 'the checkout',
        british: 'the till'
    },
    {
        american: 'chat',
        british: 'chin-wag',
        plural: 'chin-wags'
    },
    {
        american: 'child',
        british: 'nipper'
    },
    {
        american: 'children',
        british: 'nippers'
    },
    {
        american: 'chitchat',
        british: 'natter',
        plural: 'natters'
    },
    {
        american: 'chitchatting',
        british: 'nattering'
    },
    {
        american: 'chip',
        british: 'crisp',
        plural: 'crisps'
    },
    {
        american: 'cilantro',
        british: 'coriander'
    },
    {
        american: 'class',
        british: 'lesson',
        plural: 'lessons'
    },
    {
        american: 'cleat',
        british: 'boot',
        plural: 'boots'
    },
    {
        american: 'college',
        british: 'university',
        plural: 'universities'
    },
    {
        american: 'comforter',
        british: 'duvet',
        plural: 'duvets'
    },
    {
        american: 'community service',
        british: 'community payback'
    },
    {
        american: 'complain',
        british: 'whinge',
        alt: 'mither'
    },
    {
        american: 'complained',
        british: 'whinged',
        alt: 'mithered'
    },
    {
        american: 'complaining',
        british: 'whinging',
        alt: 'mithering'
    },
    {
        american: 'conniption',
        british: 'strop',
        plural: 'strops'
    },
    {
        // conniption fit
        american: 'strop fit',
        british: 'strop',
        plural: 'strops',
        typed: 'conniption fit',
        typedplural: 'conniption fits'
    },
    {
        american: 'cookie',
        british: 'biscuit',
        plural: 'biscuits',
        alt: 'biccy',
        altplural: 'biccies'
    },
    {
        american: 'cooktop',
        british: 'hob',
        plural: 'hobs'
    },
    {
        american: 'cop',
        british: 'rozzer',
        plural: 'rozzers',
        context: 'Law enforcement.'
    },
    {
        american: 'costume',
        british: 'fancy dress'
    },
    {
        american: 'cotton candy',
        british: 'candy floss'
    },
    {
        american: 'cotton swab',
        british: 'cotton bud',
        plural: 'cotton buds'
    },
    {
        american: 'couch',
        british: 'settee',
        plural: 'settees'
    },
    {
        american: 'counter',
        british: 'worktop',
        plural: 'worktops'
    },
    {
        american: 'counterclockwise',
        british: 'anticlockwise'
    },
    {
        american: 'countertop',
        british: 'worktop',
        plural: 'worktops'
    },
    {
        american: 'coverall',
        british: 'boilersuit',
        plural: 'boilersuits',
        alt: 'overall',
        altplural: 'overalls'
    },
    {
        american: 'crazies',
        british: 'nutters',
        alt: 'madmen'
    },
    {
        american: 'crazy',
        british: 'barmy',
        alt: 'mad'
    },
    {
        american: 'crosswalk',
        british: 'zebra crossing',
        plural: 'zebra crossings'
    },
    {
        american: 'cup of tea',
        british: 'cuppa'
    },
    {
        american: 'cups of tea',
        british: 'cuppas'
    },
    {
        american: 'cupcake',
        british: 'fairy cake',
        plural: 'fairy cakes'
    },
    {
        american: 'custom-made',
        british: 'bespoke'
    },
    {
        american: 'cutesy',
        british: 'twee'
    },
    {
        american: 'dapper',
        british: 'smart'
    },
    {
        american: 'delicious',
        british: 'gorgeous',
        alt: 'nice'
    },
    {
        american: 'desperate',
        british: 'gagging'
    },
    {
        american: 'detour',
        british: 'diversion',
        plural: 'diversions'
    },
    {
        american: 'diaper',
        british: 'nappy',
        plural: 'nappies'
    },
    {
        american: 'dibs',
        british: 'bagsy'
    },
    {
        american: 'dick',
        british: 'knob',
        plural: 'knobs',
        alt: 'prick',
        altplural: 'pricks'
    },
    {
        american: 'dickhead',
        british: 'bellend',
        plural: 'bellends'
    },
    {
        american: 'dirty',
        british: 'manky'
    },
    {
        american: 'dining car',
        british: 'restaurant car',
        plural: 'restaurant cars'
    },
    {
        american: 'dipshit',
        british: 'gobshite'
    },
    {
        american: 'disgusting',
        british: 'minging'
    },
    {
        american: 'dish soap',
        british: 'washing-up liquid',
        plural: 'washing-up liquids'
    },
    {
        american: 'dish towel',
        british: 'tea towel',
        plural: 'tea towels'
    },
    {
        american: 'disobedient',
        british: 'naughty'
    },
    {
        american: 'disorganized',
        british: 'shambolic'
    },
    {
        american: 'doctor\'s office',
        british: 'doctor\'s surgery',
        plural: 'doctor\'s surgeries',
        alt: 'doctor\'s practice',
        altplural: 'doctor\'s practices'
    },
    {
        american: 'doctors\' office',
        british: 'doctors\' surgery',
        plural: 'doctors\' surgeries',
        alt: 'doctors\' practice',
        altplural: 'doctors\' practices'
    },
    {
        american: 'dollar',
        british: 'pound',
        plural: 'pounds',
        alt: 'quid',
        altplural: 'quid'
    },
    {
        american: 'dorm',
        british: 'hall of residence',
        plural: 'halls of residence'
    },
    {
        american: 'drape',
        british: 'curtain',
        plural: 'curtains'
    },
    {
        american: 'dreamed',
        british: 'dreamt'
    },
    {
        american: 'driver\'s license',
        british: 'driving license',
        plural: 'driving licenses'
    },
    {
        american: 'drunk driving',
        british: 'drink-driving'
    },
    {
        american: 'drywall',
        british: 'plasterboard'
    },
    {
        american: 'dude',
        british: 'mate',
        plural: 'mates',
        alt: 'geezer',
        altplural: 'geezers'
    },
    {
        american: 'dumb',
        british: 'daft'
    },
    {
        american: 'dummy',
        british: 'numpty',
        plural: 'numpties',
        alt: 'berk',
        altplural: 'berks'
    },
    {
        american: 'dumpster',
        british: 'skip',
        plural: 'skips'
    },
    {
        american: 'dweeb',
        british: 'anorak',
        plural: 'anoraks'
    },
    {
        american: 'eager',
        british: 'keen'
    },
    {
        american: 'an eager',
        british: 'a keen'
    },
    {
        american: 'eggplant',
        british: 'aubergine',
        plural: 'aubergines'
    },
    {
        american: 'election day',
        british: 'polling day',
        plural: 'polling days'
    },
    {
        american: 'elevator',
        british: 'lift',
        plural: 'lifts'
    },
    {
        american: 'emergency brake',
        british: 'handbrake',
        plural: 'handbrakes'
    },
    {
        american: 'eraser',
        british: 'rubber',
        plural: 'rubbers'
    },
    {
        american: 'evasive',
        british: 'dodgy'
    },
    {
        american: 'exactly right',
        british: 'bang on',
        alt: 'spot-on'
    },
    {
        american: 'excellent',
        british: 'brilliant',
        alt: 'topping'
    },
    {
        american: 'exclamation point',
        british: 'exclamation mark',
        plural: 'exclamation marks'
    },
    {
        american: 'exhausted',
        british: 'shattered'
    },
    {
        american: 'expensive',
        british: 'dear'
    },
    {
        american: 'expiration date',
        british: 'expiry date',
        plural: 'expiry dates'
    },
    {
        american: 'extremely',
        british: 'well',
        alt: 'dead'
    },
    {
        american: 'fanny pack',
        british: 'bum bag',
        plural: 'bum bags'
    },
    {
        american: 'faucet',
        british: 'tap',
        plural: 'taps'
    },
    {
        american: 'fender bender',
        british: 'prang',
        plural: 'prangs'
    },
    {
        american: 'field',
        british: 'pitch',
        plural: 'pitches'
    },
    {
        american: 'filthy',
        british: 'grotty'
    },
    {
        american: 'fine',
        british: 'tickety-boo',
        context: 'Okay, in order.'
    },
    {
        american: 'first floor',
        british: 'ground floor'
    },
    {
        american: 'fish stick',
        british: 'fish finger',
        plural: 'fish fingers'
    },
    {
        american: 'fistfight',
        british: 'punch-up',
        plural: 'punch-ups'
    },
    {
        american: 'flashlight',
        british: 'torch',
        plural: 'torches'
    },
    {
        american: 'flatware',
        british: 'cutlery'
    },
    {
        american: 'flirt with',
        british: 'chat up'
    },
    {
        american: 'flirted with',
        british: 'chatted up'
    },
    {
        american: 'flirting with',
        british: 'chatting up'
    },
    {
        american: 'flirts with',
        british: 'chats up'
    },
    {
        american: 'fool',
        british: 'muppet',
        plural: 'muppets',
        alt: 'mug',
        altplural: 'mugs'
    },
    {
        american: 'freaked me out',
        british: 'gave me the screaming habdabs'
    },
    {
        american: 'freeway',
        british: 'motorway',
        plural: 'motorways'
    },
    {
        american: 'french press',
        british: 'cafetière',
        plural: 'cafetières'
    },
    {
        american: 'freshman',
        british: 'fresher',
        plural: 'freshers'
    },
    {
        american: 'friend',
        british: 'mate',
        plural: 'mates'
    },
    {
        american: 'fry',
        british: 'chip',
        plural: 'chips'
    },
    {
        american: 'frosh',
        british: 'fresher',
        plural: 'freshers'
    },
    {
        american: 'frosting',
        british: 'icing'
    },
    {
        american: 'furnace',
        british: 'boiler',
        plural: 'boilers'
    },
    {
        american: 'fussy',
        british: 'fiddly'
    },
    {
        american: 'gambler',
        british: 'punter',
        plural: 'punters'
    },
    {
        american: 'garbage',
        british: 'rubbish'
    },
    {
        american: 'garbageman',
        british: 'binman',
        plural: 'binmen' 
    },
    {
        american: 'garter',
        british: 'suspender',
        plural: 'suspenders'
    },
    {
        american: 'gas',
        british: 'petrol'
    },
    {
        // gas pedal
        american: 'petrol pedal',
        british: 'accelerator',
        plural: 'accelerators',
        typed: 'gas pedal',
        typedplural: 'gas pedals'
    },
    {
        american: 'gearshift',
        british: 'gear stick',
        plural: 'gear sticks' 
    },
    {
        american: 'get along',
        british: 'get on'
    },
    {
        american: 'girl',
        british: 'bird',
        plural: 'birds'
    },
    {
        american: 'go on about',
        british: 'bang on about'
    },
    {
        american: 'goes on about',
        british: 'bangs on about'
    },
    {
        american: 'going on about',
        british: 'banging on about'
    },
    {
        american: 'good guy',
        british: 'goody',
        plural: 'goodies'
    },
    {
        american: 'got told off',
        british: 'got a bollocking'
    },
    {
        american: 'gotten',
        british: 'got'
    },
    {
        american: 'grifter',
        british: 'fraudster',
        plural: 'fraudsters',
        alt: 'con man',
        altplural: 'con men'
    },
    {
        american: 'grouchy',
        british: 'mardy',
        alt: 'scunnered'
    },
    {
        american: 'ground beef',
        british: 'mince',
        alt: 'minced beef'
    },
    {
        american: 'grunt worker',
        british: 'dogsbody',
        plural: 'dogsbodies'
    },
    {
        american: 'hang up',
        british: 'ring off',
        context: 'Phone conversations.'
    },
    {
        american: 'hard candy',
        british: 'boiled sweet',
        plural: 'boiled sweets'
    },
    {
        american: 'hassle',
        british: 'palaver',
        plural: 'palavers'
    },
    {
        american: 'have a look',
        british: 'have a gander'
    },
    {
        american: 'heavy cream',
        british: 'double cream'
    },
    {
        american: 'he hadn\'t',
        british: 'he\'d not'
    },
    {
        american: 'he hasn\'t',
        british: 'he\'s not'
    },
    {
        american: 'hey',
        british: 'oi'
    },
    {
        american: 'hi',
        british: 'hiya'
    },
    {
        american: 'hickey',
        british: 'love bite',
        plural: 'love bites'
    },
    {
        american: 'highway',
        british: 'motorway',
        plural: 'motorways'
    },
    {
        american: 'hobo',
        british: 'tramp',
        plural: 'tramps'
    },
    {
        american: 'hood',
        british: 'bonnet',
        plural: 'bonnets',
        context: 'Vehicles.'
    },
    {
        american: 'hungry',
        british: 'peckish'
    },
    {
        american: 'i guess',
        british: 'i suppose',
        alt: 'i reckon'
    },
    {
        american: 'i hadn\'t',
        british: 'i\'d not'
    },
    {
        american: 'i haven\'t',
        british: 'i\'ve not'
    },
    {
        american: 'ice pop',
        british: 'ice lolly',
        plural: 'ice lollies',
        alt: 'lolly',
        altplural: 'lollies'
    },
    {
        american: 'idiot',
        british: 'git',
        plural: 'gits',
        alt: 'plonker',
        altplural: 'plonkers'
    },
    {
        american: 'in the hospital',
        british: 'in hospital',
        plural: 'in hospitals'
    },
    {
        american: 'inebriated',
        british: 'sozzled'
    },
    {
        american: 'insane',
        british: 'mental'
    },
    {
        american: 'intermission',
        british: 'interval',
        plural: 'intervals'
    },
    {
        american: 'isn\'t it',
        british: 'innit'
    },
    {
        american: 'jackhammer',
        british: 'pneumatic drill',
        plural: 'pneumatic drills'
    },
    {
        american: 'jell-o',
        british: 'jelly',
        plural: 'jellies'
    },
    {
        american: 'jelly',
        british: 'jam',
        plural: 'jams'
    },
    {
        american: 'jerk',
        british: 'tosser',
        plural: 'tossers',
        alt: 'twat',
        altplural: 'twats'
    },
    {
        american: 'john hancock',
        british: 'moniker',
        plural: 'monikers'
    },
    {
        american: 'joking',
        british: 'taking the piss',
        alt: 'having a laugh'
    },
    {
        american: 'journalist',
        british: 'journo',
        plural: 'journos'
    },
    {
        american: 'jumping jack',
        british: 'star jump',
        plural: 'star jumps'
    },
    {
        american: 'kerosene',
        british: 'paraffin'
    },
    {
        american: 'kinda',
        british: 'quite'
    },
    {
        american: 'kiss',
        british: 'snog',
        plural: 'snogs'
    },
    {
        american: 'kissing',
        british: 'snogging'
    },
    {
        american: 'ladybug',
        british: 'ladybird',
        plural: 'ladybirds'
    },
    {
        american: 'laid off',
        british: 'made redundant'
    },
    {
        american: 'landfill',
        british: 'tip',
        plural: 'tips',
        alt: 'dump',
        altplural: 'dumps'
    },
    {
        american: 'laundromat',
        british: 'launderette',
        plural: 'launderettes'
    },
    {
        american: 'layer cake',
        british: 'sandwich cake',
        plural: 'sandwich cakes'
    },
    {
        american: 'lazy',
        british: 'bone-idle',
        alt: 'work-shy'
    },
    {
        american: 'learned',
        british: 'learnt'
    },
    {
        american: 'license plate',
        british: 'number plate',
        plural: 'number plates'
    },
    {
        american: 'lie',
        british: 'porky',
        plural: 'porkies'
    },
    {
        american: 'line',
        british: 'queue',
        plural: 'queues'
    },
    {
        american: 'liquor store',
        british: 'off-license',
        plural: 'off-licenses',
        alt: 'offie',
        altplural: 'offies'
    },
    {
        american: 'loose change',
        british: 'shrapnel',
        context: 'Coins.'
    },
    {
        american: 'lucky',
        british: 'jammy'
    },
    {
        american: 'lumber',
        british: 'timber'
    },
    {
        american: 'lumberyard',
        british: 'timber yard',
        plural: 'timber yards'
    },
    {
        american: 'made fun of',
        british: 'took the piss out of'
    },
    {
        american: 'mail',
        british: 'post'
    },
    {
        // mail slot
        american: 'post slot',
        british: 'letter box',
        plural: 'letter boxes',
        typed: 'mail slot',
        typedplural: 'mail slots'
    },
    {
        american: 'mailbox',
        british: 'postbox',
        plural: 'postboxes',
        alt: 'pillar box',
        altplural: 'pillar boxes'
    },
    {
        american: 'mailman',
        british: 'postman',
        plural: 'postmen',
        alt: 'postie',
        altplural: 'posties'
    },
    {
        american: 'main street',
        british: 'high street',
        plural: 'high streets'
    },
    {
        american: 'make fun of',
        british: 'take the piss out of'
    },
    {
        american: 'makes fun of',
        british: 'takes the piss out of'
    },
    {
        american: 'making fun of',
        british: 'taking the piss out of'
    },
    {
        american: 'malarkey',
        british: 'poppycock'
    },
    {
        american: 'man',
        british: 'bloke',
        alt: 'chap'
    },
    {
        american: 'marinara',
        british: 'napolitana'
    },
    {
        american: 'math',
        british: 'maths'
    },
    {
        american: 'men',
        british: 'blokes',
        alt: 'chaps'
    },
    {
        american: 'merry christmas',
        british: 'happy christmas',
        plural: 'happy christmases',
        alt: 'happy crimbo',
        altplural: 'happy crimbos'
    },
    {
        american: 'minivan',
        british: 'people carrier',
        plural: 'people carriers'
    },
    {
        american: 'mohawk',
        british: 'mohican',
        plural: 'mohicans'
    },
    {
        american: 'molasses',
        british: 'treacle'
    },
    {
        american: 'mom',
        british: 'mum',
        plural: 'mums',
        alt: 'mam',
        altplural: 'mams'
    },
    {
        american: 'mommy',
        british: 'mummy',
        plural: 'mummies',
        alt: 'mumsie',
        altplural: 'mumsies'
    },
    {
        american: 'mono',
        british: 'glandular fever'
    },
    {
        american: 'morgue',
        british: 'mortuary',
        plural: 'mortuaries'
    },
    {
        american: 'moron',
        british: 'prat',
        plural: 'prats',
        alt: 'wally',
        altplural: 'wallies'
    },
    {
        american: 'mortician',
        british: 'undertaker',
        plural: 'undertakers',
        alt: 'funeral director',
        altplural: 'funeral directors'
    },
    {
        american: 'mouse pad',
        british: 'mouse mat',
        plural: 'mouse mats'
    },
    {
        american: 'mouth',
        british: 'gob',
        plural: 'gobs'
    },
    {
        american: 'mouthy',
        british: 'gobby',
        alt: 'lairy'
    },
    {
        american: 'move over',
        british: 'budge up'
    },
    {
        american: 'movie',
        british: 'film',
        plural: 'films'
    },
    {
        american: 'muffler',
        british: 'silencer',
        plural: 'silencers',
        context: 'Vehicles.'
    },
    {
        american: 'mutter',
        british: 'chunter'
    },
    {
        american: 'nail polish',
        british: 'nail varnish',
        plural: 'nail varnishes'
    },
    {
        american: 'nap',
        british: 'kip',
        plural: 'kips'
    },
    {
        american: 'napkin',
        british: 'serviette',
        plural: 'serviettes'
    },
    {
        american: 'narc',
        british: 'grass',
        plural: 'grasses'
    },
    {
        american: 'national holiday',
        british: 'bank holiday',
        plural: 'bank holidays'
    },
    {
        american: 'neosporin',
        british: 'savlon',
        plural: 'savlons'
    },
    {
        american: 'nerd',
        british: 'swot',
        plural: 'swots'
    },
    {
        american: 'newscaster',
        british: 'newsreader',
        plural: 'newsreaders'
    },
    {
        american: 'newsdealer',
        british: 'newsagent',
        plural: 'newsagents'
    },
    {
        american: 'nightstick',
        british: 'truncheon',
        plural: 'truncheons'
    },
    {
        american: 'nonsense',
        british: 'bollocks',
        alt: 'codswallop'
    },
    {
        american: 'normalcy',
        british: 'normality'
    },
    {
        american: 'not too bright',
        british: 'thick as mince',
        context: 'Intelligence.'
    },
    {
        american: 'nutcase',
        british: 'nutter',
        plural: 'nutters'
    },
    {
        american: 'oatmeal',
        british: 'porridge',
        plural: 'porridges'
    },
    {
        american: 'an oatmeal',
        british: 'a porridge'
    },
    {
        american: 'obligated',
        british: 'obliged'
    },
    {
        american: 'occupied',
        british: 'engaged',
        context: 'Toilets.'
    },
    {
        american: 'odds and ends',
        british: 'bits and bobs'
    },
    {
        american: 'oh my god',
        british: 'bloody hell'
    },
    {
        american: 'operating room',
        british: 'operating theater',
        plural: 'operating theaters'
    },
    {
        american: 'opportunist',
        british: 'chancer',
        plural: 'chancers'
    },
    {
        american: 'outlet',
        british: 'power point',
        plural: 'power points'
    },
    {
        american: 'overpass',
        british: 'flyover',
        plural: 'flyovers'
    },
    {
        american: 'pacifier',
        british: 'dummy',
        plural: 'dummies'
    },
    {
        american: 'pant',
        british: 'trouser',
        plural: 'trousers'
    },
    {
        american: 'panty',
        british: 'knicker',
        plural: 'knickers'
    },
    {
        american: 'pantyhose',
        british: 'sheer tights'
    },
    {
        american: 'paper route',
        british: 'paper round',
        plural: 'paper rounds'
    },
    {
        american: 'paper towels',
        british: 'kitchen roll'
    },
    {
        american: 'parka',
        british: 'anorak',
        plural: 'anoraks'
    },
    {
        american: 'parking garage',
        british: 'multistory car park',
        plural: 'multistory car parks'
    },
    {
        american: 'parking lot',
        british: 'car park',
        plural: 'car parks'
    },
    {
        american: 'party tent',
        british: 'marquee',
        plural: 'marquees'
    },
    {
        american: 'paycheck',
        british: 'pay packet',
        plural: 'pay packets'
    },
    {
        american: 'pay raise',
        british: 'pay rise',
        plural: 'pay rises'
    },
    {
        american: 'pay stub',
        british: 'payslip',
        plural: 'payslips'
    },
    {
        american: 'period',
        british: 'full stop',
        plural: 'full stops'
    },
    {
        american: 'persnickety',
        british: 'pernickety'
    },
    {
        american: 'phone booth',
        british: 'phone box',
        plural: 'phone boxes'
    },
    {
        american: 'pharmacist',
        british: 'chemist',
        plural: 'chemists'
    },
    {
        american: 'pickle',
        british: 'gherkin',
        plural: 'gherkins'
    },
    {
        american: 'picnic basket',
        british: 'picnic hamper',
        plural: 'picnic hampers'
    },
    {
        american: 'pimple',
        british: 'spot',
        plural: 'spots'
    },
    {
        american: 'pimply',
        british: 'spotty'
    },
    {
        american: 'pink slip',
        british: 'p45',
        plural: 'p45s'
    },
    {
        american: 'plastic wrap',
        british: 'cling film'
    },
    {
        american: 'play hooky',
        british: 'skive off'
    },
    {
        american: 'played hooky',
        british: 'skived off'
    },
    {
        american: 'playing hooky',
        british: 'skiving off'
    },
    {
        american: 'plays hooky',
        british: 'skives off'
    },
    {
        american: 'pleased',
        british: 'chuffed'
    },
    {
        american: 'plexiglas',
        british: 'perspex'
    },
    {
        american: 'plumber\'s crack',
        british: 'builder\'s bum'
    },
    {
        american: 'police officer',
        british: 'constable',
        plural: 'constables',
        alt: 'bobby',
        altplural: 'bobbies'
    },
    {
        american: 'pound sign',
        british: 'hash sign',
        plural: 'hash signs'
    },
    {
        american: 'powdered sugar',
        british: 'icing sugar',
        plural: 'icing sugars'
    },
    {
        american: 'prep school',
        british: 'private school',
        plural: 'private schools'
    },
    {
        american: 'pretentious',
        british: 'wanky'
    },
    {
        american: 'proctor',
        british: 'invigilator',
        plural: 'invigilators',
        alt: 'invigilate',
        altplural: 'invigilates'
    },
    {
        american: 'prostitute',
        british: 'prozzie',
        plural: 'prozzies'
    },
    {
        american: 'pruning shears',
        british: 'secateurs'
    },
    {
        american: 'public school',
        british: 'state school',
        plural: 'state schools'
    },
    {
        american: 'public transit',
        british: 'public transport'
    },
    {
        american: 'pullover',
        british: 'jumper',
        plural: 'jumpers'
    },
    {
        american: 'pull-up',
        british: 'press-up',
        plural: 'press-ups'
    },
    {
        american: 'purse',
        british: 'handbag',
        plural: 'handbags'
    },
    {
        american: 'putter',
        british: 'potter'
    },
    {
        american: 'questionable',
        british: 'dodgy'
    },
    {
        american: 'quiet down',
        british: 'quieten down'
    },
    {
        american: 'quieted',
        british: 'quietened'
    },
    {
        american: 'quotation mark',
        british: 'inverted comma',
        plural: 'inverted commas'
    },
    {
        american: 'railroad',
        british: 'railway',
        plural: 'railways'
    },
    {
        american: 'rain boot',
        british: 'wellie',
        plural: 'wellies'
    },
    {
        american: 'raincoat',
        british: 'waterproof',
        plural: 'waterproofs',
        alt: 'mac',
        altpl: 'macs'
    },
    {
        american: 'ran away',
        british: 'scarpered'
    },
    {
        american: 'rappel',
        british: 'abseil'
    },
    {
        american: 'ready-made',
        british: 'off-the-peg'
    },
    {
        american: 'realtor',
        british: 'estate agent',
        plural: 'estate agents'
    },
    {
        american: 'rental',
        british: 'hire',
        plural: 'hires'
    },
    {
        american: 'rest stop',
        british: 'service station',
        plural: 'service stations',
        alt: 'lay-by',
        altplural: 'lay-bys'
    },
    {
        american: 'restroom',
        british: 'toilet',
        plural: 'toilets',
        alt: 'bog',
        altplural: 'bogs'
    },
    {
        american: 'retiree',
        british: 'pensioner',
        plural: 'pensioners'
    },
    {
        american: 'right away',
        british: 'straightaway'
    },
    {
        american: 'ritzy',
        british: 'posh'
    },
    {
        american: 'roommate',
        british: 'flatmate',
        plural: 'flatmates',
        alt: 'housemate',
        altplural: 'housemates'
    },
    {
        american: 'roster',
        british: 'rota',
        plural: 'rotas'
    },
    {
        american: 'row house',
        british: 'terraced house',
        plural: 'terraced houses'
    },
    {
        american: 'ruckus',
        british: 'palaver',
        plural: 'palavers'
    },
    {
        american: 'run away',
        british: 'scarper'
    },
    {
        american: 'running away',
        british: 'scarpering'
    },
    {
        american: 'runs away',
        british: 'scarpers'
    },
    {
        american: 'rutabaga',
        british: 'swede',
        plural: 'swedes'
    },
    {
        american: 'sales assistant',
        british: 'shop assistant',
        plural: 'shop assistants'
    },
    {
        american: 'sandwich',
        british: 'sarnie',
        plural: 'sarnies',
        alt: 'butty',
        altplural: 'butties'
    },
    {
        american: 'santa claus',
        british: 'father christmas'
    },
    {
        american: 'sarcastic',
        british: 'sarky'
    },
    {
        american: 'sausage',
        british: 'banger',
        plural: 'bangers'
    },
    {
        american: 'scads',
        british: 'lashings',
        alt: 'heaps'
    },
    {
        american: 'scotch tape',
        british: 'sellotape'
    },
    {
        american: 'sedan',
        british: 'saloon',
        plural: 'saloons'
    },
    {
        american: 'self-righteous',
        british: 'priggish'
    },
    {
        american: 'senior citizen',
        british: 'pensioner',
        plural: 'pensioners'
    },
    {
        american: 'shady',
        british: 'dodgy'
    },
    {
        american: 'she hadn\'t',
        british: 'she\'d not'
    },
    {
        american: 'she hasn\'t',
        british: 'she\'s not'
    },
    {
        american: 'sherbet',
        british: 'sorbet',
        plural: 'sorbets'
    },
    {
        american: 'shit',
        british: 'shite'
    },
    {
        // shit-faced
        american: 'shite-faced',
        british: 'rat-arsed',
        typed: 'shit-faced'
    },
    {
        american: 'shopping bag',
        british: 'carrier bag',
        plural: 'carrier bags'
    },
    {
        american: 'shrimp',
        british: 'prawn',
        plural: 'prawns'
    },
    {
        american: 'shot',
        british: 'jab',
        plural: 'jabs',
        context: 'Inoculations.'
    },
    {
        american: 'shower stall',
        british: 'shower cubicle',
        plural: 'shower cubicles'
    },
    {
        american: 'side-view mirror',
        british: 'wing mirror',
        plural: 'wing mirrors'
    },
    {
        american: 'sidewalk',
        british: 'pavement',
        plural: 'pavements',
        alt: 'footpath',
        altplural: 'footpaths'
    },
    {
        american: 'skim milk',
        british: 'skimmed milk'
    },
    {
        american: 'sleigh',
        british: 'sledge',
        plural: 'sledges'
    },
    {
        american: 'slowpoke',
        british: 'slowcoach',
        plural: 'slowcoaches'
    },
    {
        american: 'slut',
        british: 'slag',
        plural: 'slags',
        alt: 'sket',
        altplural: 'skets'
    },
    {
        american: 'smart',
        british: 'clever',
        alt: 'canny'
    },
    {
        american: 'sneaker',
        british: 'trainer',
        plural: 'trainers',
        alt: 'plimsoll',
        altplural: 'plimsolls'
    },
    {
        american: 'snuck',
        british: 'sneaked'
    },
    {
        american: 'soda',
        british: 'pop',
        plural: 'pops',
        alt: 'fizzy drink',
        altplural: 'fizzy drinks'
    },
    {
        american: 'soccer',
        british: 'football',
        alt: 'footie'
    },
    {
        // soccer ball
        american: 'football ball',
        british: 'football',
        plural: 'footballs',
        typed: 'soccer ball',
        typedplural: 'soccer balls'
    },
    {
        // soccer player
        american: 'football player',
        british: 'footballer',
        plural: 'footballers',
        typed: 'soccer player',
        typedplural: 'soccer players'
    },
    {
        american: 'solitaire',
        british: 'patience'
    },
    {
        american: 'sorta',
        british: 'quite'
    },
    {
        american: 'space heater',
        british: 'electric fire',
        plural: 'electric fires'
    },
    {
        american: 'special election',
        british: 'by-election',
        plural: 'by-elections'
    },
    {
        american: 'speed bump',
        british: 'sleeping policeman',
        plural: 'sleeping policemen'
    },
    {
        american: 'spelunking',
        british: 'potholing',
        alt: 'caving'
    },
    {
        american: 'splinter',
        british: 'sliver',
        plural: 'slivers'
    },
    {
        american: 'sports',
        british: 'sport'
    },
    {
        american: 'squishy',
        british: 'squidgy'
    },
    {
        american: 'state store',
        british: 'off-license',
        plural: 'off-licenses',
        alt: 'offie',
        altplural: 'offies'
    },
    {
        american: 'station wagon',
        british: 'estate car',
        plural: 'estate cars'
    },
    {
        american: 'steal',
        british: 'nick',
        alt: 'pinch'
    },
    {
        american: 'stenographer',
        british: 'shorthand typist',
        plural: 'shorthand typists'
    },
    {
        american: 'stole',
        british: 'nicked',
        alt: 'pinched'
    },
    {
        american: 'stolen',
        british: 'nicked',
        alt: 'pinched'
    },
    {
        american: 'stoplight',
        british: 'traffic light',
        plural: 'traffic lights'
    },
    {
        american: 'store',
        british: 'shop',
        plural: 'shops'
    },
    {
        american: 'storefront',
        british: 'shopfront',
        plural: 'shopfronts'
    },
    {
        american: 'stove',
        british: 'cooker',
        plural: 'cookers'
    },
    {
        american: 'streetcar',
        british: 'tram',
        plural: 'trams'
    },
    {
        american: 'stroller',
        british: 'pram',
        plural: 'prams',
        alt: 'pushchair',
        altplural: 'pushchairs'
    },
    {
        american: 'studio apartment',
        british: 'bedsit',
        plural: 'bedsits'
    },
    {
        american: 'study',
        british: 'revise',
        plural: 'revises'
    },
    {
        american: 'studying',
        british: 'revising'
    },
    {
        american: 'stuffed',
        british: 'stodged',
        context: 'Overeating.'
    },
    {
        american: 'stupid',
        british: 'thick',
        alt: 'gormless'
    },
    {
        american: 'substitute teacher',
        british: 'supply teacher',
        plural: 'supply teachers'
    },
    {
        american: 'subway',
        british: 'tube',
        plural: 'tubes',
        alt: 'underground',
        altplural: 'undergrounds'
    },
    {
        american: 'sunscreen',
        british: 'sun cream',
        plural: 'sun creams'
    },
    {
        american: 'superintendent',
        british: 'caretaker',
        plural: 'caretakers'
    },
    {
        american: 'suspender',
        british: 'brace',
        plural: 'braces'
    },
    {
        american: 'sweatpant',
        british: 'track bottom',
        plural: 'track bottoms',
        alt: 'jogging bottom',
        altplural: 'jogging bottoms'
    },
    {
        american: 'tacky',
        british: 'naff',
        context: 'Poor taste.'
    },
    {
        american: 'taffy',
        british: 'chew',
        plural: 'chews',
        alt: 'fruit chew',
        altplural: 'fruit chews'
    },
    {
        american: 'tailpipe',
        british: 'exhaust pipe',
        plural: 'exhaust pipes'
    },
    {
        american: 'takeout',
        british: 'takeaway',
        plural: 'takeaways'
    },
    {
        american: 'talking about',
        british: 'on about'
    },
    {
        american: 'tank top',
        british: 'singlet',
        plural: 'singlets',
        alt: 'vest',
        altplural: 'vests'
    },
    {
        american: 'tantrum',
        british: 'strop',
        plural: 'strops'
    },
    {
        american: 'teeter-totter',
        british: 'seesaw',
        plural: 'seesaws'
    },
    {
        american: 'teleprompter',
        british: 'autocue',
        plural: 'autocues'
    },
    {
        american: 'thanks',
        british: 'cheers',
        alt: 'ta'
    },
    {
        american: 'theater',
        british: 'cinema',
        plural: 'cinemas'
    },
    {
        american: 'they hadn\'t',
        british: 'they\'d not'
    },
    {
        american: 'they haven\'t',
        british: 'they\'ve not'
    },
    {
        american: 'thingy',
        british: 'wotsit',
        plural: 'wotsits'
    },
    {
        american: 'think',
        british: 'reckon'
    },
    {
        american: 'third wheel',
        british: 'gooseberry',
        plural: 'gooseberries'
    },
    {
        american: 'thought',
        british: 'reckoned'
    },
    {
        american: 'thumbtack',
        british: 'drawing pin',
        plural: 'drawing pins'
    },
    {
        american: 'tidbit',
        british: 'titbit',
        plural: 'titbits'
    },
    {
        american: 'tipsy',
        british: 'tiddly'
    },
    {
        american: 'toilet',
        british: 'loo',
        plural: 'loos'
    },
    {
        american: 'ton',
        british: 'shedload',
        plural: 'shedloads'
    },
    {
        american: 'total',
        british: 'proper'
    },
    {
        american: 'touchy',
        british: 'tetchy'
    },
    {
        american: 'toward',
        british: 'towards'
    },
    {
        american: 'track pants',
        british: 'trackies'
    },
    {
        american: 'traffic jam',
        british: 'tailback',
        plural: 'tailbacks'
    },
    {
        american: 'trailer park',
        british: 'caravan park',
        plural: 'caravan parks'
    },
    {
        american: 'training wheel',
        british: 'stabilizer',
        plural: 'stabilizers'
    },
    {
        american: 'transmission',
        british: 'gearbox',
        plural: 'gearboxes',
        context: 'Vehicles.'
    },
    {
        american: 'trash',
        british: 'rubbish',
        alt: 'bin'
    },
    {
        // trash can
        american: 'rubbish can',
        british: 'dustbin',
        plural: 'dustbins',
        alt: 'bin',
        altplural: 'bins',
        typed: 'trash can',
        typedplural: 'trash cans'
    },
    {
        american: 'traveling salesman',
        british: 'bagman',
        plural: 'bagmen'
    },
    {
        american: 'trickery',
        british: 'jiggery-pokery'
    },
    {
        american: 'tricky situation',
        british: 'sticky wicket',
        plural: 'sticky wickets'
    },
    {
        american: 'truck',
        british: 'lorry',
        plural: 'lorries'
    },
    {
        american: 'trunk',
        british: 'boot',
        plural: 'boots',
        context: 'Vehicles.'
    },
    {
        american: 'turn signal',
        british: 'indicator',
        plural: 'indicators'
    },
    {
        american: 'turn up',
        british: 'rock up'
    },
    {
        american: 'turned up',
        british: 'rocked up'
    },
    {
        american: 'turns up',
        british: 'rocks up'
    },
    {
        american: 'two cents',
        british: 'twopence'
    },
    {
        american: 'two weeks',
        british: 'a fortnight'
    },
    {
        american: 'umbrella',
        british: 'brolly',
        plural: 'brollies'
    },
    {
        american: 'uniform',
        british: 'kit',
        plural: 'kits'
    },
    {
        american: 'upscale',
        british: 'upmarket'
    },
    {
        american: 'vacation',
        british: 'holiday',
        plural: 'holidays'
    },
    {
        american: 'vacationer',
        british: 'holidaymaker',
        plural: 'holidaymakers'
    },
    {
        american: 'vacay',
        british: 'hols',
        plural: 'hols'
    },
    {
        american: 'vacuum',
        british: 'hoover',
        plural: 'hoovers'
    },
    {
        american: 'veggie',
        british: 'veg',
        plural: 'veg'
    },
    {
        american: 'very',
        british: 'jolly',
        alt: 'proper'
    },
    {
        american: 'wallet',
        british: 'purse',
        plural: 'purses',
        context: 'Women\'s wallets.'
    },
    {
        american: 'warden',
        british: 'warder',
        plural: 'warders'
    },
    {
        american: 'was told off',
        british: 'got a bollocking'
    },
    {
        american: 'washcloth',
        british: 'flannel',
        plural: 'flannels'
    },
    {
        american: 'wastebasket',
        british: 'wastepaper basket',
        plural: 'wastepaper baskets'
    },
    {
        american: 'wasting time',
        british: 'faffing about',
        alt: 'fannying about'
    },
    {
        american: 'we haven\'t',
        british: 'we\'ve not'
    },
    {
        american: 'went on about',
        british: 'banged on about'
    },
    {
        american: 'were told off',
        british: 'got a bollocking'
    },
    {
        american: 'while',
        british: 'whilst'
    },
    {
        american: 'whine',
        british: 'whinge'
    },
    {
        american: 'whined',
        british: 'whinged'
    },
    {
        american: 'whiner',
        british: 'whinger',
        plural: 'whingers'
    },
    {
        american: 'whipped cream',
        british: 'squirty cream',
        plural: 'squirty creams'
    },
    {
        american: 'wimp',
        british: 'melt',
        plural: 'melts'
    },
    {
        american: 'windshield',
        british: 'windscreen',
        plural: 'windscreens'
    },
    {
        american: 'worn-out',
        british: 'clapped-out'
    },
    {
        american: 'wrench',
        british: 'spanner',
        plural: 'spanners'
    },
    {
        american: 'yard',
        british: 'garden',
        plural: 'gardens'
    },
    {
        american: 'yellow light',
        british: 'amber light',
        plural: 'amber lights'
    },
    {
        american: 'you guys',
        british: 'you lot'
    },
    {
        american: 'you haven\'t',
        british: 'you\'ve not'
    },
    {
        american: 'z',
        british: 'zed',
        plural: 'zeds'
    },
    {
        american: 'zip code',
        british: 'postcode',
        plural: 'postcodes'
    },
    {
        american: 'zipper',
        british: 'zip',
        plural: 'zips'
    },
    {
        american: 'zucchini',
        british: 'courgette',
        plural: 'courgettes'
    },
];

export { translations };
