let translations = [
    {
        american: '911',
        british: '999',
        context: 'Emergencies.'
    },
    {
        american: '2000s',
        british: 'noughties'
    },
    {
        american: 'a dime a dozen',
        british: 'ten a penny'
    },
    {
        american: 'a late lunch',
        british: 'tea'
    },
    {
        american: 'a long time',
        british: 'donkey\'s years'
    },
    {
        american: 'a stomachache',
        british: 'the collywobbles'
    },
    {
        american: 'acetaminophen',
        british: 'paracetamol'
    },
    {
        american: 'ad',
        british: 'advert',
        plural: 'adverts',
        context: 'Advertisements.'
    },
    {
        american: 'adjunct professor',
        british: 'lecturer',
        plural: 'lecturers',
        context: 'Job title.'
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
        american: 'advil',
        british: 'ibuprofen'
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
        american: 'all talk',
        british: 'all piss and wind',
        context: 'Blustering.'
    },
    {
        american: 'all-purpose flour',
        british: 'plain flour',
        plural: 'plain flours',
        context: 'Baking.'
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
        alt: 'shirty',
        context: 'Emotion.'
    },
    {
        american: 'annoy her',
        british: 'wind her up'
    },
    {
        american: 'annoy him',
        british: 'wind him up'
    },
    {
        american: 'annoy me',
        british: 'wind me up'
    },
    {
        american: 'annoy them',
        british: 'wind them up'
    },
    {
        american: 'annoy us',
        british: 'wind us up'
    },
    {
        american: 'annoy you',
        british: 'wind you up'
    },
    {
        american: 'apartment',
        british: 'flat',
        plural: 'flats'
    },
    {
        // apartment building
        american: 'flat building',
        british: 'tower block',
        plural: 'tower blocks',
        typed: 'apartment building',
        typedplural: 'apartment buildings'
    },
    {
        american: 'an apartment',
        british: 'a flat'
    },
    {
        american: 'appetizer',
        british: 'starter',
        plural: 'starters',
        alt: 'entrée',
        altplural: 'entrées'
    },
    {
        american: 'apples and oranges',
        british: 'chalk and cheese',
        context: 'Comparisons.'
    },
    {
        american: 'are you kidding',
        british: 'are you having a laugh'
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
        american: 'armpit',
        british: 'oxter',
        plural: 'oxters'
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
        plural: 'arses',
        context: 'Butts or buttheads.'
    },
    {
        american: 'assistance program',
        british: 'assistance scheme',
        plural: 'assistance schemes'
    },
    {
        american: 'associate professor',
        british: 'reader',
        plural: 'readers',
        context: 'Job title.'
    },
    {
        american: 'astounded',
        british: 'gobsmacked',
        alt: 'staggered'
    },
    {
        american: 'at a disadvantage',
        british: 'on the back foot'
    },
    {
        american: 'atm',
        british: 'cash machine',
        plural: 'cash machines',
        alt: 'cashpoint',
        altplural: 'cashpoints',
        abbreviation: true,
        context: 'Money.'
    },
    {
        american: 'an atm',
        british: 'a cash machine',
        alt: 'a cashpoint',
        abbreviation: true,
        context: 'Money.'
    },
    {
        american: 'attorney',
        british: 'solicitor',
        plural: 'solicitors',
        context: 'Legal expert.'
    },
    {
        american: 'attractive',
        british: 'lush',
        alt: 'peng',
        context: 'People.'
    },
    {
        american: 'aughts',
        british: 'noughties'
    },
    {
        american: 'awesome',
        british: 'wicked',
        alt: 'brilliant',
        context: 'Extraordinary.'
    },
    {
        american: 'an awesome',
        british: 'a wicked',
        alt: 'a brilliant',
        ontext: 'Extraordinary.'
    },
    {
        american: 'babble',
        british: 'prattle',
        alt: 'natter',
        context: 'Talking.'
    },
    {
        american: 'babbled',
        british: 'prattled',
        alt: 'nattered',
        context: 'Talking.'
    },
    {
        american: 'babbling',
        british: 'prattling',
        alt: 'nattering',
        context: 'Talking.'
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
        plural: 'baddies',
        alt: 'rascal',
        altplural: 'rascals'
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
        british: 'fringe',
        context: 'Hairstyle.'
    },
    {
        // bangs are
        american: 'fringe are',
        british: 'fringe is',
        typed: 'bangs are',
        context: 'Hairstyle.'
    },
    {
        american: 'bar',
        british: 'pub',
        plural: 'pubs',
        alt: 'local',
        altplural: 'locals',
        context: 'Serving alcohol.'
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
        plural: 'swimming costumes',
        alt: 'cozzie',
        altplural: 'cozzies'
    },
    {
        american: 'bathrobe',
        british: 'dressing gown',
        plural: 'dressing gowns',
        context: 'Loungewear.'
    },
    {
        american: 'bathroom',
        british: 'toilet',
        plural: 'toilets',
        alt: 'bog',
        altplural: 'bogs'
    },
    {
        american: 'batshit',
        british: 'barking',
        context: 'Insanity.'
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
        altplural: 'bleeders',
        context: 'Nuisances.'
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
        american: 'belly up',
        british: 'tits up'
    },
    {
        american: 'belly-up',
        british: 'tits-up',
        context: 'Ruin.'
    },
    {
        american: 'beverage',
        british: 'bevvy',
        plural: 'bevvies',
        alt: 'drink',
        altplural: 'drinks'
    },
    {
        american: 'bicker',
        british: 'quibble',
        plural: 'quibbles',
        alt: 'quarrel',
        altplural: 'quarrels'
    },
    {
        american: 'bickered',
        british: 'quibbled',
        alt: 'quarreled'
    },
    {
        american: 'bickering',
        british: 'quibbling',
        alt: 'quarreling'
    },
    {
        american: 'big rig',
        british: 'articulated lorry',
        plural: 'articulated lorries',
        alt: 'artic',
        altplural: 'artics',
        context: 'Semitrailers.'
    },
    {
        american: 'billboard',
        british: 'hoarding',
        plural: 'hoardings',
        context: 'Advertising.'
    },
    {
        american: 'bipoc',
        british: 'bame',
        context: 'Minority groups.'
    },
    {
        american: 'blackjack',
        british: 'pontoon',
        context: 'Card game.'
    },
    {
        american: 'blacktop',
        british: 'tarmac',
        plural: 'tarmacs'
    },
    {
        american: 'blather',
        british: 'waffle',
        alt: 'rabbit on'
    },
    {
        american: 'blathered',
        british: 'waffled',
        alt: 'rabbited on'
    },
    {
        american: 'blatherer',
        british: 'waffler',
        alt: 'prattler'
    },
    {
        american: 'blathering',
        british: 'waffling',
        alt: 'rabbiting on'
    },
    {
        american: 'bleachers',
        british: 'stands',
        context: 'Spectator seating.'
    },
    {
        american: 'blinder',
        british: 'blinker',
        plural: 'blinkers',
        context: 'Horses.'
    },
    {
        american: 'blood sausage',
        british: 'black pudding',
        plural: 'black puddings'
    },
    {
        american: 'blunder',
        british: 'clanger',
        plural: 'clangers',
        alt: 'dog\'s breakfast',
        altplural: 'dogs\' breakfasts',
        context: 'Mistakes.'
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
        altplural: 'hair grips',
        context: 'Hair accessories.'
    },
    {
        american: 'bodega',
        british: 'corner shop',
        plural: 'corner shops'
    },
    {
        american: 'booger',
        british: 'bogey',
        plural: 'bogeys',
        context: 'Snot.'
    },
    {
        american: 'botch',
        british: 'bodge'
    },
    {
        american: 'bowler',
        british: 'derby',
        plural: 'derbies',
        context: 'Hats.'
    },
    {
        american: 'boy',
        british: 'lad',
        plural: 'lads',
        alt: 'chap',
        altplural: 'chaps'
    },
    {
        american: 'braid',
        british: 'plait',
        plural: 'plaits',
        context: 'Hair.'
    },
    {
        american: 'breadbox',
        british: 'bread bin',
        plural: 'bread bins'
    },
    {
        american: 'bro',
        british: 'bruv',
        plural: 'bruvs',
        alt: 'mate',
        altplural: 'mates'
    },
    {
        american: 'broil',
        british: 'grill',
        context: 'Cooking.'
    },
    {
        american: 'broke',
        british: 'skint',
        alt: 'brassic',
        context: 'Poverty.'
    },
    {
        american: 'bruh',
        british: 'bruv',
        plural: 'bruvs',
        alt: 'mate',
        altplural: 'mates'
    },
    {
        american: 'buh-bye',
        british: 'toodle-oo',
        plural: 'toodle-oos',
        alt: 'ta-ra',
        altplural: 'ta-ras'
    },
    {
        american: 'bumper car',
        british: 'dodgem',
        plural: 'dodgems',
        alt: 'dodgem car',
        altplural: 'dodgem cars',
        context: 'Amusement parks.'
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
        american: 'burlap',
        british: 'hessian'
    },
    {
        american: 'busboy',
        british: 'commis waiter',
        plural: 'commis waiters',
        context: 'Restaurants.'
    },
    {
        american: 'busy signal',
        british: 'engaged tone',
        plural: 'engaged tones',
        context: 'Phones.'
    },
    {
        american: 'busybody',
        british: 'nosy parker',
        plural: 'nosy parkers'
    },
    {
        american: 'butt',
        british: 'bum',
        plural: 'bums'
    },
    {
        american: 'butterface',
        british: 'munter',
        plural: 'munters',
        alt: 'minger',
        altplural: 'mingers',
        context: 'Appearance.'
    },
    {
        american: 'c-clamp',
        british: 'g-clamp',
        plural: 'g-clamps'
    },
    {
        american: 'cabinet',
        british: 'cupboard',
        plural: 'cupboards',
        context: 'Kitchens.'
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
        american: 'calm down',
        british: 'steady on',
        alt: 'settle, petal',
        context: 'Scolding.'
    },
    {
        american: 'can of',
        british: 'tin of',
        context: 'Containers.'
    },
    {
        american: 'candidacy',
        british: 'candidature',
        plural: 'candidatures'
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
        american: 'canola',
        british: 'rapeseed',
        context: 'Vegetable oil.'
    },
    {
        american: 'canopy tent',
        british: 'marquee',
        plural: 'marquees'
    },
    {
        american: 'can\'t be bothered',
        british: 'can\'t be arsed',
        alt: 'can\'t be fussed'
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
        plural: 'funfairs',
        context: 'Traveling exhibitions.'
    },
    {
        american: 'cart',
        british: 'trolley',
        plural: 'trolleys',
        context: 'Wheeled conveyances.'
    },
    {
        american: 'cat',
        british: 'moggy',
        plural: 'moggies',
        context: 'Meow.'
    },
    {
        // cat pan
        american: 'moggy pan',
        british: 'litter tray',
        plural: 'litter trays',
        typed: 'cat pan',
        typedplural: 'cat pans',
        context: 'Cat toilets.'
    },
    {
        american: 'catsup',
        british: 'ketchup',
        plural: 'ketchups'
    },
    {
        american: 'caught on to',
        british: 'rumbled',
        context: 'Discovery.'
    },
    {
        american: 'cell phone',
        british: 'phone',
        plural: 'phones',
        alt: 'mobile',
        altplural: 'mobiles'
    },
    {
        american: 'charge account',
        british: 'credit account',
        plural: 'credit accounts'
    },
    {
        american: 'cheapskate',
        british: 'skinflint',
        plural: 'skinflints',
        alt: 'miser',
        altplural: 'misers'
    },
    {
        american: 'check mark',
        british: 'tick',
        plural: 'ticks'
    },
    {
        american: 'checkers',
        british: 'draughts',
        context: 'Board games.'
    },
    {
        american: 'checking account',
        british: 'current account',
        plural: 'current accounts',
        context: 'Banking.'
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
        plural: 'chin-wags',
        context: 'Conversation.'
    },
    {
        american: 'child',
        british: 'nipper'
    },
    {
        american: 'chill out',
        british: 'calm your tits',
        context: 'Calming down.'
    },
    {
        american: 'chilly',
        british: 'parky',
        context: 'Weather.'
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
        plural: 'crisps',
        context: 'Thin snacks, often fried.'
    },
    {
        american: 'cilantro',
        british: 'coriander'
    },
    {
        american: 'class',
        british: 'lesson',
        plural: 'lessons',
        context: 'School sessions.'
    },
    {
        american: 'cleat',
        british: 'boot',
        plural: 'boots',
        context: 'Footwear.'
    },
    {
        american: 'cloture',
        british: 'closure',
        plural: 'closures',
        context: 'Legislation.'
    },
    {
        american: 'college',
        british: 'university',
        plural: 'universities',
        alt: 'uni',
        altplural: 'unis',
        context: 'Higher education.'
    },
    {
        american: 'comforter',
        british: 'duvet',
        plural: 'duvets',
        context: 'Bedding.'
    },
    {
        american: 'commotion',
        british: 'kerfuffle',
        plural: 'kerfuffles',
        alt: 'palaver',
        altplural: 'palavers'
    },
    {
        american: 'community service',
        british: 'community payback',
        context: 'Punishment.'
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
        altplural: 'biccies',
        context: 'Food.'
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
        american: 'copacetic',
        british: 'just ducky',
        alt: 'sound'
    },
    {
        american: 'cornstarch',
        british: 'corn flour'
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
        plural: 'settees',
        context: 'Furniture.'
    },
    {
        american: 'counter',
        british: 'worktop',
        plural: 'worktops',
        context: 'Kitchen surface.'
    },
    {
        american: 'counterclockwise',
        british: 'anticlockwise'
    },
    {
        american: 'countertop',
        british: 'worktop',
        plural: 'worktops',
        context: 'Kitchen surface.'
    },
    {
        american: 'coverall',
        british: 'boilersuit',
        plural: 'boilersuits',
        alt: 'overall',
        altplural: 'overalls',
        context: 'Apparel.'
    },
    {
        american: 'cramming for',
        british: 'swotting for',
        alt: 'revising for',
        context: 'Studying.'
    },
    {
        american: 'crazies',
        british: 'nutters',
        alt: 'madmen',
        context: 'Insanity.'
    },
    {
        american: 'crazy',
        british: 'mad',
        alt: 'barmy',
        context: 'Insanity.'
    },
    {
        american: 'crossing guard',
        british: 'lollipop man',
        plural: 'lollipop men',
        alt: 'lollipop lady',
        altplural: 'lollipop ladies',
        context: 'Road safety.'
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
        american: 'custodian',
        british: 'caretaker',
        plural: 'caretakers',
        context: 'Janitor or guardian.'
    },
    {
        american: 'custom-made',
        british: 'bespoke'
    },
    {
        american: 'customer',
        british: 'punter'
    },
    {
        american: 'cut the crap',
        british: 'come off it',
        context: 'Exasperation.'
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
        american: 'debark',
        british: 'disembark',
        plural: 'disembarks',
        context: 'Exiting.'
    },
    {
        american: 'debarkation',
        british: 'disembarkation',
        plural: 'disembarkations',
        context: 'Exiting.'
    },
    {
        american: 'degrease',
        british: 'swarfega'
    },
    {
        american: 'delicious',
        british: 'gorgeous',
        alt: 'nice'
    },
    {
        american: 'deplane',
        british: 'disembark',
        context: 'Aviation.'
    },
    {
        american: 'deputy',
        british: 'constable',
        plural: 'constables',
        context: 'Law enforcement.'
    },
    {
        american: 'desperate',
        british: 'gagging',
        alt: 'keen',
        context: 'Eagerness.'
    },
    {
        american: 'detour',
        british: 'diversion',
        plural: 'diversions'
    },
    {
        american: 'devastated',
        british: 'gutted',
        alt: 'knocked for six',
        context: 'Mood.'
    },
    {
        american: 'diaper',
        british: 'nappy',
        plural: 'nappies'
    },
    {
        american: 'dibs',
        british: 'bagsy',
        context: 'Claims.'
    },
    {
        american: 'dick',
        british: 'knob',
        plural: 'knobs',
        alt: 'prick',
        altplural: 'pricks',
        context: 'Phalli.'
    },
    {
        american: 'dickhead',
        british: 'bellend',
        plural: 'bellends',
        alt: 'knob',
        altplural: 'knobs',
        context: 'Phalli.'
    },
    {
        american: 'dirty',
        british: 'manky',
        alt: 'grotty',
        context: 'Unclean.'
    },
    {
        american: 'dining car',
        british: 'restaurant car',
        plural: 'restaurant cars',
        context: 'Trains.'
    },
    {
        american: 'dipshit',
        british: 'gobshite'
    },
    {
        american: 'direct deposit',
        british: 'giro',
        context: 'Finances.'
    },
    {
        american: 'discombobulated',
        british: 'discomposed'
    },
    {
        american: 'disgusting',
        british: 'minging',
        alt: 'rank'
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
        american: 'dishrag',
        british: 'dishcloth',
        plural: 'dishcloths'
    },
    {
        american: 'disobedient',
        british: 'naughty'
    },
    {
        american: 'disorganized',
        british: 'shambolic',
        alt: 'muddled'
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
        altplural: 'quid',
        context: 'Currency.'
    },
    {
        american: 'domino effect',
        british: 'knock-on effect',
        plural: 'knock-on effects'
    },
    {
        american: 'don\'t worry',
        british: 'chin up',
        context: 'Consolation.'
    },
    {
        american: 'doofus',
        british: 'ninny',
        plural: 'ninnies',
        alt: 'nitwit',
        altplural: 'nitwits'
    },
    {
        american: 'dopey',
        british: 'dozy',
        alt: 'gormless',
        context: 'Sluggishness.'
    },
    {
        american: 'dorm',
        british: 'hall of residence',
        plural: 'halls of residence',
        alt: 'diggings',
        altplural: 'diggings',
        context: 'Student accommodations.'
    },
    {
        american: 'douchebag',
        british: 'sketchead',
        plural: 'sketcheads',
        context: 'Contemptible people.'
    },
    {
        american: 'down the drain',
        british: 'up the spout',
        context: 'Destruction.'
    },
    {
        american: 'drape',
        british: 'curtain',
        plural: 'curtains',
        context: 'Window coverings.'
    },
    {
        american: 'dreamed',
        british: 'dreamt'
    },
    {
        american: 'drinking heavily',
        british: 'on the piss',
        context: 'Inebriation.'
    },
    {
        american: 'driver\'s license',
        british: 'driving license',
        plural: 'driving licenses'
    },
    {
        american: 'drugstore',
        british: 'chemist',
        plural: 'chemists',
        alt: 'pharmacy',
        altplural: 'pharmacies'
    },
    {
        american: 'drunk driving',
        british: 'drink-driving'
    },
    {
        american: 'drunkard',
        british: 'tosspot',
        plural: 'tosspots'
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
        american: 'duffel bag',
        british: 'holdall',
        plural: 'holdalls'
    },
    {
        american: 'dumb',
        british: 'thick',
        alt: 'daft',
        context: 'Foolishness.'
    },
    {
        american: 'dummy',
        british: 'numpty',
        plural: 'numpties',
        alt: 'berk',
        altplural: 'berks',
        context:'Simpletons.'
    },
    {
        american: 'dump waste',
        british: 'fly-tip'
    },
    {
        american: 'dumped waste',
        british: 'fly-tipped'
    },
    {
        american: 'dumping waste',
        british: 'fly-tipping'
    },
    {
        american: 'dumps waste',
        british: 'fly-tips'
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
        american: 'egghead',
        british: 'boffin',
        plural: 'boffins',
        context: 'Intellect.'
    },
    {
        american: 'eggplant',
        british: 'aubergine',
        plural: 'aubergines'
    },
    {
        american: 'eight thirty',
        british: 'half eight',
        context: 'Time.'
    },
    {
        american: 'eighth grade',
        british: 'year nine',
        plural: 'year nines',
        context: 'School.'
    },
    {
        american: 'eighth grader',
        british: 'ninth-year',
        plural: 'ninth-years',
        context: 'School.'
    },
    {
        american: 'election day',
        british: 'polling day',
        plural: 'polling days'
    },
    {
        american: 'elementary school',
        british: 'primary school',
        plural: 'primary schools'
    },
    {
        american: 'elevator',
        british: 'lift',
        plural: 'lifts'
    },
    {
        american: 'eleven thirty',
        british: 'half eleven',
        context: 'Time.'
    },
    {
        american: 'eleventh grade',
        british: 'year twelve',
        plural: 'year twelves',
        alt: 'lower sixth',
        altplural: 'lower sixths',
        context: 'School.'
    },
    {
        american: 'eleventh grader',
        british: 'twelfth-year',
        plural: 'twelfth-years',
        context: 'School.'
    },
    {
        american: 'emergency brake',
        british: 'handbrake',
        plural: 'handbrakes',
        context: 'Vehicles.'
    },
    {
        american: 'english muffin',
        british: 'muffin',
        plural: 'muffins',
        context: 'Food.'
    },
    {
        american: 'eraser',
        british: 'rubber',
        plural: 'rubbers'
    },
    {
        american: 'evasive',
        british: 'dodgy',
        alt: 'slippery',
        context: 'Deception.'
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
        american: 'excited',
        british: 'buzzing',
        context: 'Thrilled.'
    },
    {
        american: 'exclamation point',
        british: 'exclamation mark',
        plural: 'exclamation marks',
        context: 'Punctuation.'
    },
    {
        american: 'exhausted',
        british: 'shattered',
        alt: 'knackered',
        context: 'Tiredness.'
    },
    {
        american: 'expensive',
        british: 'dear',
        alt: 'pricey'
    },
    {
        american: 'expiration date',
        british: 'expiry date',
        plural: 'expiry dates'
    },
    {
        american: 'expressway',
        british: 'motorway',
        plural: 'motorways',
        alt: 'carriageway',
        altplural: 'carriageways'
    },
    {
        american: 'extremely',
        british: 'well',
        alt: 'dead'
    },
    {
        american: 'eyeglasses',
        british: 'specs',
        alt: 'glasses'
    },
    {
        american: 'fall leaf',
        british: 'autumn leaf'
    },
    {
        american: 'fall leaves',
        british: 'autumn leaves'
    },
    {
        american: 'fanny pack',
        british: 'bum bag',
        plural: 'bum bags'
    },
    {
        american: 'fantastic',
        british: 'lovely jubbly',
        alt: 'ace'
    },
    {
        american: 'faucet',
        british: 'tap',
        plural: 'taps'
    },
    {
        american: 'fdic',
        british: 'fscs',
        context: 'Banking.'
    },
    {
        american: 'fell over',
        british: 'went arse over tit',
        alt: 'went arse over teakettle'
    },
    {
        american: 'fender bender',
        british: 'prang',
        plural: 'prangs'
    },
    {
        american: 'field',
        british: 'pitch',
        plural: 'pitches',
        context: 'Playing fields.'
    },
    {
        american: 'fifth grade',
        british: 'year six',
        plural: 'year sixes',
        context: 'School.'
    },
    {
        american: 'fifth grader',
        british: 'sixth-year',
        plural: 'sixth-years',
        context: 'School.'
    },
    {
        american: 'figure out',
        british: 'suss out',
        alt: 'rumble',
        context: 'Discovery.'
    },
    {
        american: 'figured out',
        british: 'sussed out',
        alt: 'rumbled',
        context: 'Discovery.'
    },
    {
        american: 'figures out',
        british: 'susses out',
        alt: 'rumbles',
        context: 'Discovery.'
    },
    {
        american: 'figuring out',
        british: 'sussing out',
        alt: 'rumbling',
        context: 'Discovery.'
    },
    {
        american: 'filthy',
        british: 'grotty',
        alt: 'manky'
    },
    {
        american: 'fine',
        british: 'tickety-boo',
        alt: 'hunky-dory',
        context: 'Okay, in order.'
    },
    {
        american: 'first floor',
        british: 'ground floor'
    },
    {
        american: 'first grade',
        british: 'year two',
        plural: 'year twos',
        context: 'School.'
    },
    {
        american: 'first grader',
        british: 'second-year',
        plural: 'second-years',
        context: 'School.'
    },
    {
        american: 'fish stick',
        british: 'fish finger',
        plural: 'fish fingers'
    },
    {
        american: 'fishstick',
        british: 'fish finger',
        plural: 'fish fingers'
    },
    {
        american: 'fistfight',
        british: 'punch-up',
        plural: 'punch-ups',
        alt: 'scrap',
        altplural: 'scraps'
    },
    {
        american: 'five thirty',
        british: 'half five',
        context: 'Time.'
    },
    {
        american: 'flat tire',
        british: 'puncture',
        plural: 'punctures',
        context: 'Vehicles.'
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
        altplural: 'mugs',
        context: 'Simpletons.'
    },
    {
        american: 'fork over',
        british: 'fork out'
    },
    {
        american: 'four thirty',
        british: 'half four',
        context: 'Time.'
    },
    {
        american: 'fourth grade',
        british: 'year five',
        plural: 'year fives',
        context: 'School.'
    },
    {
        american: 'fourth grader',
        british: 'fifth-year',
        plural: 'fifth-years',
        context: 'School.'
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
        american: 'freezing',
        british: 'baltic',
        alt: 'biting',
        context: 'Weather.'
    },
    {
        american: 'french press',
        british: 'cafetière',
        plural: 'cafetières',
        context: 'Coffee.'
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
        american: 'friggin',
        british: 'blummin'
    },
    {
        american: 'frigging',
        british: 'blooming'
    },
    {
        american: 'fry',
        british: 'chip',
        plural: 'chips',
        context: 'French fries.'
    },
    {
        american: 'front desk',
        british: 'reception',
        plural: 'receptions'
    },
    {
        american: 'frosh',
        british: 'fresher',
        plural: 'freshers'
    },
    {
        american: 'frosting',
        british: 'icing',
        context: 'Confectionaries.'
    },
    {
        american: 'full-size bed',
        british: 'double bed',
        plural: 'double beds'
    },
    {
        american: 'full-size mattress',
        british: 'double mattress',
        plural: 'double mattresses'
    },
    {
        american: 'furious',
        british: 'fuming',
        alt: 'boiling',
        context: 'Anger.'
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
        british: 'petrol',
        context: 'Fuel.'
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
        american: 'gearhead',
        british: 'petrolhead',
        plural: 'petrolheads'
    },
    {
        american: 'gearshift',
        british: 'gear stick',
        plural: 'gear sticks' 
    },
    {
        american: 'general delivery',
        british: 'poste restante',
        context: 'Mail.'
    },
    {
        american: 'get along',
        british: 'get on'
    },
    {
        american: 'get lost',
        british: 'jog on',
        alt: 'piss off',
        context: 'Dismissal.'
    },
    {
        american: 'gets along',
        british: 'gets on'
    },
    {
        american: 'getting along',
        british: 'getting on'
    },
    {
        american: 'getting drunk',
        british: 'on the piss',
        context: 'Binge drinking.'
    },
    {
        american: 'gimpy',
        british: 'gammy',
        context: 'Injuries.'
    },
    {
        american: 'girl',
        british: 'bird',
        plural: 'birds'
    },
    {
        american: 'glove box',
        british: 'glove compartment',
        plural: 'glove compartments',
        context: 'Vehicles.'
    },
    {
        american: 'go away',
        british: 'jog on',
        alt: 'piss off',
        context: 'Dismissal.'
    },
    {
        american: 'go ballistic',
        british: 'go spare',
        context: 'Anger.'
    },
    {
        american: 'go on about',
        british: 'bang on about'
    },
    {
        american: 'goes ballistic',
        british: 'goes spare',
        context: 'Anger.'
    },
    {
        american: 'goes on about',
        british: 'bangs on about'
    },
    {
        american: 'going ballistic',
        british: 'going spare',
        context: 'Anger.'
    },
    {
        american: 'going on about',
        british: 'banging on about'
    },
    {
        american: 'good grief',
        british: 'gordon bennett',
        plural: 'gordon bennetts',
        context: 'Interjection.'
    },
    {
        american: 'good guy',
        british: 'goody',
        plural: 'goodies'
    },
    {
        american: 'got along',
        british: 'got on'
    },
    {
        american: 'got told off',
        british: 'got a bollocking',
        alt: 'got stick',
        context: 'Castigation.'
    },
    {
        american: 'gotten',
        british: 'got'
    },
    {
        american: 'gps',
        british: 'satnav',
        plural: 'satnavs',
        context: 'Navigation.',
        abbreviation: true
    },
    {
        american: 'grandma',
        british: 'nan',
        plural: 'nans'
    },
    {
        american: 'grandpa',
        british: 'grandad',
        plural: 'grandads'
    },
    {
        american: 'green thumb',
        british: 'green fingers',
        plural: 'green fingers',
        context: 'Gardening.'
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
        plural: 'dogsbodies',
        context: 'Rookies.'
    },
    {
        american: 'had a look',
        british: 'had a gander',
        context: 'Inspection.'
    },
    {
        american: 'half bath',
        british: 'toilet',
        plural: 'toilets',
        alt: 'cloakroom',
        altplural: 'cloakrooms',
        context: 'Powder room.'
    },
    {
        american: 'handsome',
        british: 'fit',
        alt: 'dishy',
        context: 'Appearance.'
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
        american: 'has a look',
        british: 'has a gander',
        context: 'Inspection.'
    },
    {
        american: 'hassle',
        british: 'palaver',
        plural: 'palavers',
        alt: 'faff',
        altplural: 'faffs',
        context: 'Annoyance.'
    },
    {
        american: 'have a look',
        british: 'have a gander',
        context: 'Inspection.'
    },
    {
        american: 'having a look',
        british: 'having a gander',
        context: 'Inspection.'
    },
    {
        american: 'heavy cream',
        british: 'double cream',
        context: 'Dairy products.'
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
        british: 'oi',
        context: 'Interjection.'
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
        american: 'hissy fit',
        british: 'strop',
        plural: 'strops',
        alt: 'wobbly',
        altplural: 'wobblies'
    },
    {
        american: 'ho',
        british: 'trollop',
        plural: 'trollops',
        alt: 'tart',
        altplural: 'tarts',
        context: 'Insult.'
    },
    {
        american: 'hobo',
        british: 'tramp',
        plural: 'tramps',
        alt: 'rough sleeper',
        altplural: 'rough sleepers',
        context: 'Vagrants.'
    },
    {
        american: 'hoity-toity',
        british: 'posh'
    },
    {
        american: 'hokey pokey',
        british: 'hokey cokey'
    },
    {
        american: 'hokey pokies',
        british: 'hokey cokies'
    },
    {
        american: 'holy crap',
        british: 'bloody hell',
        alt: 'blooming heck',
        context: 'Interjection.'
    },
    {
        american: 'homeless',
        british: 'sleeping rough',
        plural: 'sleeping rough',
        alt: 'rough sleeper',
        altplural: 'rough sleepers',
        context: 'Vagrancy.'
    },
    {
        american: 'hood',
        british: 'bonnet',
        plural: 'bonnets',
        context: 'Vehicles.'
    },
    {
        american: 'horny',
        british: 'randy',
        context: 'Aroused.'
    },
    {
        american: 'horseback riding',
        british: 'riding',
        alt: 'horse riding'
    },
    {
        american: 'hottie',
        british: 'totty',
        plural: 'totties',
        context: 'Attractive people.'
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
        altplural: 'lollies',
        context: 'Confections.'
    },
    {
        american: 'idiot',
        british: 'git',
        plural: 'gits',
        alt: 'plonker',
        altplural: 'plonkers'
    },
    {
        american: 'i\'m drained',
        british: 'i\'m spent',
        context: 'Listlessness.'
    },
    {
        american: 'impressive',
        british: 'cracking'
    },
    {
        american: 'in the hospital',
        british: 'in hospital',
        plural: 'in hospitals'
    },
    {
        american: 'inebriated',
        british: 'sozzled',
        alt: 'blotto'
    },
    {
        american: 'infantryman',
        british: 'squaddie',
        plural: 'squaddies'
    },
    {
        american: 'insane',
        british: 'mental',
        alt: 'doolally'
    },
    {
        american: 'intel',
        british: 'gen',
        context: 'Information.'
    },
    {
        american: 'intermission',
        british: 'interval',
        plural: 'intervals'
    },
    {
        american: 'irritated',
        british: 'peeved',
        context: 'Frustration.'
    },
    {
        american: 'isn\'t it',
        british: 'innit'
    },
    {
        american: 'jack off',
        british: 'wank',
        context: 'Onanism.'
    },
    {
        american: 'jacked off',
        british: 'wanked',
        context: 'Onanism.'
    },
    {
        american: 'jackhammer',
        british: 'pneumatic drill',
        plural: 'pneumatic drills'
    },
    {
        american: 'jacking off',
        british: 'wanking',
        context: 'Onanism.'
    },
    {
        american: 'jacks off',
        british: 'wanks',
        context: 'Onanism.'
    },
    {
        american: 'jagoff',
        british: 'wanker',
        plural: 'wankers',
        context: 'Unpleasant people.'
    },
    {
        american: 'jam-packed',
        british: 'rammed',
        alt: 'chockablock'
    },
    {
        american: 'janitor',
        british: 'caretaker',
        plural: 'caretakers'
    },
    {
        american: 'jeez',
        british: 'blimey',
        alt: 'cripes',
        context: 'Interjection.'
    },
    {
        american: 'jell-o',
        british: 'jelly',
        plural: 'jellies'
    },
    {
        american: 'jelly',
        british: 'jam',
        plural: 'jams',
        context: 'Fruit preserves.'
    },
    {
        american: 'jerk',
        british: 'tosser',
        plural: 'tossers',
        alt: 'twat',
        altplural: 'twats',
        context: 'Foes.'
    },
    {
        american: 'jizz',
        british: 'spunk',
        context: 'Semen.'
    },
    {
        american: 'joe schmo',
        british: 'joe bloggs',
        plural: 'joe bloggses'
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
        american: 'jumper cable',
        british: 'jump lead',
        plural: 'jump leads'
    },
    {
        american: 'jumping jack',
        british: 'star jump',
        plural: 'star jumps',
        context: 'Exercise.'
    },
    {
        american: 'junk',
        british: 'tat',
        context: 'Poor quality.'
    },
    {
        american: 'junkman',
        british: 'rag-and-bone man',
        plural: 'rag-and-bone men'
    },
    {
        american: 'kerosene',
        british: 'paraffin'
    },
    {
        american: 'kinda',
        british: 'quite',
        alt: 'a bit',
        context: 'Sorta.'
    },
    {
        american: 'kindergarten',
        british: 'year one',
        plural: 'year ones'
    },
    {
        american: 'kindergartner',
        british: 'first year',
        plural: 'first years'
    },
    {
        american: 'kiss',
        british: 'snog',
        plural: 'snogs'
    },
    {
        american: 'kissing',
        british: 'snogging',
        alt: 'necking'
    },
    {
        american: 'kitty-corner',
        british: 'catty-corner'
    },
    {
        american: 'knock on wood',
        british: 'touch wood',
        context: 'Superstition.'
    },
    {
        american: 'knocked her up',
        british: 'got her up the duff',
        context: 'Pregnancy.'
    },
    {
        american: 'ladybug',
        british: 'ladybird',
        plural: 'ladybirds'
    },
    {
        american: 'laid off',
        british: 'made redundant',
        context: 'Employment.'
    },
    {
        american: 'landfill',
        british: 'tip',
        plural: 'tips',
        alt: 'dump',
        altplural: 'dumps'
    },
    {
        american: 'landslide',
        british: 'landslip',
        plural: 'landslips'
    },
    {
        american: 'laundromat',
        british: 'launderette',
        plural: 'launderettes'
    },
    {
        american: 'layaway',
        british: 'hire purchase',
        plural: 'hire purchases'
    },
    {
        american: 'lawyer',
        british: 'barrister',
        plural: 'barristers',
        alt: 'solicitor',
        altplural: 'solicitors'
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
        american: 'learner\'s permit',
        british: 'provisional license',
        plural: 'provisional licenses'
    },
    {
        american: 'legos',
        british: 'lego bricks',
        alt: 'lego sets'
    },
    {
        american: 'license plate',
        british: 'number plate',
        plural: 'number plates'
    },
    {
        american: 'lie',
        british: 'porky',
        plural: 'porkies',
        context: 'Fabrication.'
    },
    {
        american: 'line',
        british: 'queue',
        plural: 'queues',
        context: 'People, waiting.'
    },
    {
        american: 'liquor store',
        british: 'off-license',
        plural: 'off-licenses',
        alt: 'offie',
        altplural: 'offies'
    },
    {
        american: 'litter box',
        british: 'litter tray',
        plural: 'litter trays'
    },
    {
        american: 'litterbug',
        british: 'fly-tipper',
        plural: 'fly-tippers'
    },
    {
        american: 'liverpudlian',
        british: 'scouse',
        plural: 'scousers',
        alt: 'scouser',
        altplural: 'scousers'
    },
    {
        american: 'long johns',
        british: 'onesie',
        plural: 'onesies'
    },
    {
        american: 'loose change',
        british: 'shrapnel',
        context: 'Coins.'
    },
    {
        american: 'lost her mind',
        british: 'lost the plot',
        alt: 'gone round the bend',
        context: 'Irrational behavior.'
    },
    {
        american: 'lost his mind',
        british: 'lost the plot',
        alt: 'gone round the bend',
        context: 'Irrational behavior.'
    },
    {
        american: 'lost their minds',
        british: 'lost the plot',
        alt: 'gone round the bend',
        context: 'Irrational behavior.'
    },
    {
        american: 'lost your mind',
        british: 'lost the plot',
        alt: 'gone round the bend',
        context: 'Irrational behavior.'
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
        american: 'lunatic',
        british: 'bedlamite',
        plural: 'bedlamites'
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
        american: 'majored in',
        british: 'read',
        context: 'Education.'
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
        british: 'poppycock',
        alt: 'codswallop'
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
        american: 'median strip',
        british: 'central reservation',
        plural: 'central reservations'
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
        american: 'messed up',
        british: 'bungled',
        alt: 'mucked up',
        context: 'Disarray.'
    },
    {
        american: 'middle school',
        british: 'secondary school',
        plural: 'secondary schools',
        alt: 'comprehensive school',
        altplural: 'comprehensive schools'
    },
    {
        american: 'miner',
        british: 'pitman',
        plural: 'pitmen'
    },
    {
        american: 'minivan',
        british: 'people carrier',
        plural: 'people carriers'
    },
    {
        american: 'minor injury',
        british: 'tweak',
        plural: 'tweaks',
        alt: 'knock',
        altplural: 'knocks'
    },
    {
        american: 'misspelled',
        british: 'misspelt'
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
        british: 'glandular fever',
        context: 'Mononucleosis.'
    },
    {
        american: 'mooch',
        british: 'scrounger',
        plural: 'scroungers',
        alt: 'cadger',
        altplural: 'cadgers',
        context: 'Freeloaders.'
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
        american: 'motorcycle',
        british: 'motorbike',
        plural: 'motorbikes'
    },
    {
        american: 'mouse pad',
        british: 'mouse mat',
        plural: 'mouse mats',
        context: 'Computers.'
    },
    {
        american: 'mouth',
        british: 'gob',
        plural: 'gobs',
        alt: 'trap',
        altplural: 'traps'
    },
    {
        american: 'mouthy',
        british: 'gobby',
        alt: 'lairy'
    },
    {
        american: 'move over',
        british: 'budge up',
        context: 'Requesting space.'
    },
    {
        american: 'movie',
        british: 'film',
        plural: 'films'
    },
    {
        american: 'moxie',
        british: 'bottle',
        alt: 'pecker',
        context: 'Courage.'
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
        american: 'my treat',
        british: 'my shout',
        context: 'Payment.'
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
        plural: 'serviettes',
        context: 'Dining.'
    },
    {
        american: 'narc',
        british: 'grass',
        plural: 'grasses',
        context: 'Snitching.'
    },
    {
        american: 'national holiday',
        british: 'bank holiday',
        plural: 'bank holidays'
    },
    {
        american: 'necktie',
        british: 'tie',
        plural: 'ties'
    },
    {
        american: 'neosporin',
        british: 'savlon',
        plural: 'savlons'
    },
    {
        american: 'nerd',
        british: 'swot',
        plural: 'swots',
        alt: 'anorak',
        altplural: 'anoraks'
    },
    {
        american: 'nervous',
        british: 'nervy'
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
        american: 'newspaperman',
        british: 'pressman',
        plural: 'pressmen'
    },
    {
        american: 'newspaperwoman',
        british: 'presswoman',
        plural: 'presswomen'
    },
    {
        american: 'night crawler',
        british: 'earthworm',
        plural: 'earthworms'
    },
    {
        american: 'nightstand',
        british: 'bedside table',
        plural: 'bedside tables'
    },
    {
        american: 'nightstick',
        british: 'truncheon',
        plural: 'truncheons'
    },
    {
        american: 'nine thirty',
        british: 'half nine',
        context: 'Time.'
    },
    {
        american: 'ninth grade',
        british: 'year ten',
        plural: 'year tens',
        context: 'School.'
    },
    {
        american: 'ninth grader',
        british: 'tenth-year',
        plural: 'tenth-years',
        context: 'School.'
    },
    {
        american: 'no offense',
        british: 'i\'m not being funny'
    },
    {
        american: 'nonsense',
        british: 'bollocks',
        alt: 'codswallop'
    },
    {
        american: 'noon',
        british: 'midday'
    },
    {
        american: 'normalcy',
        british: 'normality'
    },
    {
        american: 'not too bright',
        british: 'thick as mince',
        alt: 'thick as two short planks',
        context: 'Intelligence.'
    },
    {
        american: 'novocastrian',
        british: 'geordie',
        plural: 'geordies'
    },
    {
        american: 'nutcase',
        british: 'nutter',
        plural: 'nutters',
        alt: 'bedlamite',
        altplural: 'bedlamites'
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
        american: 'off of',
        british: 'off'
    },
    {
        american: 'offended',
        british: 'miffed'
    },
    {
        american: 'oftentimes',
        british: 'often'
    },
    {
        american: 'oh my god',
        british: 'bloody hell',
        alt: 'blimey',
        context: 'Interjection.'
    },
    {
        american: 'on a dime',
        british: 'on a sixpence',
        context: 'Idiomatic.'
    },
    {
        american: 'on the fritz',
        british: 'on the blink',
        alt: 'knackered',
        context: 'Malfunction.'
    },
    {
        american: 'on the prowl',
        british: 'on the pull',
        context: 'Finding a partner.'
    },
    {
        american: 'on the weekend',
        british: 'at the weekend'
    },
    {
        american: 'on welfare',
        british: 'on the dole'
    },
    {
        american: 'one thirty',
        british: 'half one',
        context: 'Time.'
    },
    {
        american: 'one-time thing',
        british: 'one-off',
        plural: 'one-offs'
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
        american: 'orient',
        british: 'orientate',
        context: 'Adjustment.'
    },
    {
        american: 'oriented',
        british: 'orientated',
        context: 'Adjustment.'
    },
    {
        american: 'ornery',
        british: 'crotchety'
    },
    {
        american: 'out of her mind',
        british: 'off her head',
        context: 'Insanity or delirium.'
    },
    {
        american: 'out of his mind',
        british: 'off his head',
        context: 'Insanity or delirium.'
    },
    {
        american: 'out of our mind',
        british: 'off our head',
        plural: 'off our heads',
        context: 'Insanity or delirium.'
    },
    {
        american: 'out of their mind',
        british: 'off their head',
        plural: 'off their heads',
        context: 'Insanity or delirium.'
    },
    {
        american: 'out of your mind',
        british: 'off your head',
        plural: 'off your heads',
        context: 'Insanity or delirium.'
    },
    {
        american: 'out sick',
        british: 'off sick',
        context: 'Absence due to illness.'
    },
    {
        american: 'outlet',
        british: 'socket',
        plural: 'sockets',
        alt: 'power point',
        altplural: 'power points',
        context: 'Electricity.'
    },
    {
        american: 'overalls',
        british: 'dungarees',
        context: 'Apparel.'
    },
    {
        american: 'overpass',
        british: 'flyover',
        plural: 'flyovers'
    },
    {
        american: 'pacifier',
        british: 'dummy',
        plural: 'dummies',
        context: 'Babies.'
    },
    {
        american: 'packet',
        british: 'sachet',
        plural: 'sachets',
        context: 'E.g., condiments.'
    },
    {
        american: 'pant',
        british: 'trouser',
        plural: 'trousers',
        context: 'Apparel.'
    },
    {
        american: 'pantry',
        british: 'larder',
        plural: 'larders',
        context: 'Storage.'
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
        plural: 'paper rounds',
        context: 'Delivery service.'
    },
    {
        american: 'paper towel',
        british: 'bit of kitchen roll',
        plural: 'kitchen roll'
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
        plural: 'marquees',
        context: 'Outdoor events.'
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
        plural: 'full stops',
        context: 'Punctuation.'
    },
    {
        american: 'persnickety',
        british: 'pernickety',
        alt: 'particular'
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
        american: 'pharmacy',
        british: 'chemist',
        plural: 'chemists'
    },
    {
        american: 'pickle',
        british: 'gherkin',
        plural: 'gherkins',
        context: 'Gourds.'
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
        plural: 'p45s',
        context: 'Employment.'
    },
    {
        american: 'pipe down',
        british: 'wind your neck in',
        alt: 'shut it',
        context: 'Admonishment.'
    },
    {
        american: 'piss me off',
        british: 'do my head in'
    },
    {
        american: 'pissed',
        british: 'narked',
        context: 'Annoyance.'
    },
    {
        american: 'pisses me off',
        british: 'does my head in'
    },
    {
        american: 'pissing me off',
        british: 'doing my head in'
    },
    {
        american: 'pitch a fit',
        british: 'throw a wobbly',
        context: 'Tantrums.'
    },
    {
        american: 'pitched a fit',
        british: 'threw a wobbly',
        context: 'Tantrums.'
    },
    {
        american: 'pitches a fit',
        british: 'throws a wobbly',
        context: 'Tantrums.'
    },
    {
        american: 'pitching a fit',
        british: 'throwing a wobbly',
        context: 'Tantrums.'
    },
    {
        american: 'plantar wart',
        british: 'verruca',
        plural: 'verrucas'
    },
    {
        american: 'plastic bag',
        british: 'carrier bag',
        plural: 'carrier bags',
        context: 'Shopping bags.'
    },
    {
        american: 'plastic wrap',
        british: 'cling film',
        plural: 'cling films',
        context: 'Food storage.'
    },
    {
        american: 'play around',
        british: 'muck about'
    },
    {
        american: 'play hooky',
        british: 'skive off'
    },
    {
        american: 'played around',
        british: 'mucked about'
    },
    {
        american: 'played hooky',
        british: 'skived off'
    },
    {
        american: 'playful',
        british: 'cheeky'
    },
    {
        american: 'playing around',
        british: 'mucking about'
    },
    {
        american: 'playing hooky',
        british: 'skiving off'
    },
    {
        american: 'plays around',
        british: 'mucks about'
    },
    {
        american: 'plays hooky',
        british: 'skives off'
    },
    {
        american: 'pleased',
        british: 'chuffed',
        context: 'Happiness.'
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
        plural: 'hash signs',
        context: 'As on phone keypads.'
    },
    {
        american: 'powdered sugar',
        british: 'icing sugar',
        plural: 'icing sugars',
        context: 'Baking.'
    },
    {
        american: 'pre-k',
        british: 'reception',
        plural: 'receptions',
        context: 'Education.'
    },
    {
        american: 'prep school',
        british: 'public school',
        plural: 'public schools',
        context: 'Prestigious, costly school.'
    },
    {
        american: 'pretentious',
        british: 'wanky',
        altplural: 'toffee-nosed'
    },
    {
        american: 'principal',
        british: 'head teacher',
        plural: 'head teachers',
        context: 'Educator.'
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
        plural: 'prozzies',
        alt: 'slapper',
        altplural: 'slappers',
        context: 'Noun.'
    },
    {
        american: 'pruning shears',
        british: 'secateurs',
        context: 'Garden tools.'
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
        american: 'puffer vest',
        british: 'gilet',
        plural: 'gilets',
        alt: 'body warmer',
        altplural: 'body warmers'
    },
    {
        american: 'pullover',
        british: 'jumper',
        plural: 'jumpers',
        context: 'Sweaters.'
    },
    {
        american: 'punching bag',
        british: 'punch bag',
        plural: 'punch bags',
        context: 'Gym equipment.'
    },
    {
        american: 'purse',
        british: 'handbag',
        plural: 'handbags',
        context: 'Pocketbooks.'
    },
    {
        american: 'push-up',
        british: 'press-up',
        plural: 'press-ups',
        context: 'Exercise.'
    },
    {
        american: 'putter',
        british: 'potter',
        context: 'Aimlessness, tinkering.'
    },
    {
        american: 'questionable',
        british: 'dodgy'
    },
    {
        american: 'quiet down',
        british: 'quieten down',
        context: 'A command.'
    },
    {
        american: 'quieted',
        british: 'quietened'
    },
    {
        american: 'quit doing that',
        british: 'pack it in',
        alt: 'leave off',
        context: 'Annoyance.'
    },
    {
        american: 'quotation mark',
        british: 'inverted comma',
        plural: 'inverted commas'
    },
    {
        american: 'railroad',
        british: 'railway',
        plural: 'railways',
        context: 'Trains.'
    },
    {
        american: 'rain boot',
        british: 'wellie',
        plural: 'wellies',
        context: 'Footwear.'
    },
    {
        american: 'rain check',
        british: 'another chance',
        alt: 'another time',
        context: 'Unavailability.'
    },
    {
        american: 'raincoat',
        british: 'waterproof',
        plural: 'waterproofs',
        alt: 'mac',
        altpl: 'macs'
    },
    {
        american: 'raining buckets',
        british: 'pissing it down',
        alt: 'chucking it down',
        context: 'Severe weather.'
    },
    {
        american: 'ran away',
        british: 'scarpered',
        alt: 'did a runner'
    },
    {
        american: 'ran for office',
        british: 'stood for election',
        context: 'Campaigning.'
    },
    {
        american: 'ran off',
        british: 'did a bunk',
        context: 'Fleeing.'
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
        american: 'red hair',
        british: 'ginger hair',
        plural: 'ginger hairs'
    },
    {
        american: 'red-handed',
        british: 'bang to rights',
        context: 'Getting caught.'
    },
    {
        american: 'redhead',
        british: 'ginger',
        plural: 'gingers'
    },
    {
        american: 'redheaded',
        british: 'ginger'
    },
    {
        american: 'redneck',
        british: 'yokel',
        plural: 'yokels',
        alt: 'bumpkin',
        altplural: 'bumpkins'
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
        altplural: 'bogs',
        context: 'Bathrooms.'
    },
    {
        american: 'retiree',
        british: 'pensioner',
        plural: 'pensioners'
    },
    {
        american: 'right away',
        british: 'straightaway',
        context: 'Immediately.'
    },
    {
        american: 'ritzy',
        british: 'posh'
    },
    {
        american: 'robe',
        british: 'dressing gown',
        plural: 'dressing gowns',
        context: 'Loungewear.'
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
        plural: 'palavers',
        alt: 'kerfuffle',
        altplural: 'kerfuffles'
    },
    {
        american: 'run away',
        british: 'scarper',
        alt: 'do a runner'
    },
    {
        american: 'run for office',
        british: 'stand for election',
        context: 'Campaigning.'
    },
    {
        american: 'running away',
        british: 'scarpering',
        alt: 'doing a runner'
    },
    {
        american: 'running for office',
        british: 'standing for election',
        context: 'Campaigning.'
    },
    {
        american: 'runs away',
        british: 'scarpers',
        alt: 'does a runner'
    },
    {
        american: 'runs for office',
        british: 'stands for election',
        context: 'Campaigning.'
    },
    {
        american: 'runs off',
        british: 'does a bunk',
        context: 'Fleeing.'
    },
    {
        american: 'rutabaga',
        british: 'swede',
        plural: 'swedes'
    },
    {
        american: 'rv',
        british: 'caravan',
        plural: 'caravans',
        alt: 'camper',
        altplural: 'campers',
        abbreviation: true
    },
    {
        american: 'an rv',
        british: 'a caravan',
        alt: 'a camper',
        abbreviation: true
    },
    {
        american: 'sales assistant',
        british: 'shop assistant',
        plural: 'shop assistants'
    },
    {
        american: 'salt spreader',
        british: 'gritter',
        plural: 'gritters',
        context: 'Snow.'
    },
    {
        american: 'sandwich',
        british: 'sarnie',
        plural: 'sarnies',
        alt: 'butty',
        altplural: 'butties',
        context: 'Food.'
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
        american: 'scallion',
        british: 'spring onion',
        plural: 'spring onions'
    },
    {
        american: 'scammer',
        british: 'swindler',
        plural: 'swindlers',
        alt: 'fraudster',
        altplural: 'fraudsters',
        context: 'Con artists.'
    },
    {
        american: 'scamper off',
        british: 'hook it'
    },
    {
        american: 'scampered off',
        british: 'hooked it'
    },
    {
        american: 'scampers off',
        british: 'hooks it'
    },
    {
        american: 'scared her',
        british: 'gave her a fright'
    },
    {
        american: 'scared him',
        british: 'gave him a fright'
    },
    {
        american: 'scared me',
        british: 'gave me a fright'
    },
    {
        american: 'scared shitless',
        british: 'shit-scared'
    },
    {
        american: 'scared them',
        british: 'gave them a fright'
    },
    {
        american: 'scared us',
        british: 'gave us a fright'
    },
    {
        american: 'scared you',
        british: 'gave you a fright'
    },
    {
        american: 'scarf',
        british: 'scoff',
        context: 'Gobbling food.'
    },
    {
        american: 'scotch tape',
        british: 'sellotape'
    },
    {
        american: 'scotch-irish',
        british: 'ulster-scots'
    },
    {
        american: 'screwup',
        british: 'cock-up',
        plural: 'cock-ups'
    },
    {
        american: 'second grade',
        british: 'year three',
        plural: 'year threes',
        context: 'School.'
    },
    {
        american: 'second grader',
        british: 'third-year',
        plural: 'third-years',
        context: 'School.'
    },
    {
        american: 'sedan',
        british: 'saloon',
        plural: 'saloons'
    },
    {
        american: 'seeing eye dog',
        british: 'guide dog',
        plural: 'guide dogs'
    },
    {
        american: 'seeing-eye dog',
        british: 'guide dog',
        plural: 'guide dogs'
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
        american: 'seven thirty',
        british: 'half seven',
        context: 'Time.'
    },
    {
        american: 'seventh grade',
        british: 'year eight',
        plural: 'year eights',
        context: 'School.'
    },
    {
        american: 'seventh grader',
        british: 'eighth-year',
        plural: 'eighth-years',
        context: 'School.'
    },
    {
        american: 'shady',
        british: 'dodgy',
        context: 'Something questionable.'
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
        american: 'sheet cake',
        british: 'tray cake',
        plural: 'tray cakes',
        context: 'Confections.'
    },
    {
        american: 'sheet-pan dinner',
        british: 'tray bake',
        plural: 'tray bakes'
    },
    {
        american: 'sherbet',
        british: 'sorbet',
        plural: 'sorbets'
    },
    {
        american: 'shipping and handling',
        british: 'postage and packing'
    },
    {
        american: 'shit',
        british: 'shite'
    },
    {
        american: 'shitcan',
        british: 'sack',
        context: 'Unemployment.'
    },
    {
        american: 'shitcanned',
        british: 'sacked',
        context: 'Unemployment.'
    },
    {
        american: 'shitcanning',
        british: 'sacking',
        context: 'Unemployment.'
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
        plural: 'carrier bags',
        context: 'Paper/plastic bags with handles.'
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
        american: 'shredded cheese',
        british: 'grated cheese',
        plural: 'grated cheeses'
    },
    {
        american: 'shut up',
        british: 'shut it',
        alt: 'belt up',
        context: 'Silence.'
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
        american: 'silly me',
        british: 'what am i like',
        context: 'Self-deprecation.'
    },
    {
        american: 'silverware',
        british: 'cutlery'
    },
    {
        american: 'six thirty',
        british: 'half six',
        context: 'Time.'
    },
    {
        american: 'sixth grade',
        british: 'year seven',
        plural: 'year sevens',
        context: 'School.'
    },
    {
        american: 'sixth grader',
        british: 'seventh-year',
        plural: 'seventh-years',
        context: 'School.'
    },
    {
        american: 'sketchy',
        british: 'dodgy',
        context: 'Dubiousness.'
    },
    {
        american: 'skim milk',
        british: 'skimmed milk'
    },
    {
        american: 'skivvies',
        british: 'pants',
        alt: 'knickers',
        context: 'Underwear.'
    },
    {
        american: 'skosh',
        british: 'bit',
        alt: 'tad'
    },
    {
        american: 'sleeveless shirt',
        british: 'vest',
        plural: 'vests'
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
        american: 'small bet',
        british: 'flutter',
        plural: 'flutters',
        alt: 'punt',
        altplural: 'punts',
        context: 'Gambling.'
    },
    {
        american: 'smart',
        british: 'clever',
        alt: 'canny',
        context: 'Intelligence.'
    },
    {
        american: 'smarty-pants',
        british: 'clever clogs',
        alt: 'know-all',
        context: 'Intelligence.'
    },
    {
        american: 'snack',
        british: 'nosh',
        plural: 'noshes'
    },
    {
        american: 'snazzy',
        british: 'smart'
    },
    {
        american: 'sneaker',
        british: 'trainer',
        plural: 'trainers',
        alt: 'plimsoll',
        altplural: 'plimsolls',
        context: 'Footwear.'
    },
    {
        american: 'snob',
        british: 'toff',
        plural: 'toffs',
        alt: 'nob',
        altplural: 'nobs'
    },
    {
        american: 'snuck',
        british: 'sneaked'
    },
    {
        american: 'so good',
        british: 'mint',
        alt: 'lush',
        context: 'Quality.'
    },
    {
        american: 'so nervous',
        british: 'bricking it',
        alt: 'shit-scared'
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
        // soccer coach
        american: 'football coach',
        british: 'gaffer',
        plural: 'gaffers',
        alt: 'skipper',
        altplural: 'skippers',
        typed: 'soccer coach',
        typedplural: 'soccer coaches'
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
        british: 'patience',
        context: 'Card game.'
    },
    {
        american: 'sorta',
        british: 'quite',
        alt: 'a bit'
    },
    {
        american: 'soused',
        british: 'pickled',
        context: 'Inebriation.'
    },
    {
        american: 'space heater',
        british: 'electric fire',
        plural: 'electric fires'
    },
    {
        american: 'spaghetti bolognese',
        british: 'spag bol',
        plural: 'spag bols'
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
        american: 'speedo',
        british: 'budgy smuggler',
        plural: 'budgy smugglers',
        context: 'Swimwear.'
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
        american: 'spring break',
        british: 'easter holiday',
        plural: 'easter holidays'
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
        altplural: 'offies',
        context: 'Liquor stores.'
    },
    {
        american: 'station wagon',
        british: 'estate car',
        plural: 'estate cars',
        context: 'Vehicles.'
    },
    {
        american: 'steal',
        british: 'nick',
        alt: 'pinch',
        context: 'Theft.'
    },
    {
        american: 'stenographer',
        british: 'shorthand typist',
        plural: 'shorthand typists'
    },
    {
        american: 'stingy',
        british: 'tightfisted',
        alt: 'miserly'
    },
    {
        american: 'stole',
        british: 'nicked',
        alt: 'pinched',
        context: 'Theft.'
    },
    {
        american: 'stolen',
        british: 'nicked',
        alt: 'pinched',
        context: 'Theft.'
    },
    {
        american: 'stop lying',
        british: 'come off it',
        context: 'Dishonesty.'
    },
    {
        american: 'stoplight',
        british: 'traffic light',
        plural: 'traffic lights'
    },
    {
        american: 'store',
        british: 'shop',
        plural: 'shops',
        context: 'Retail.'
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
        american: 'stovetop',
        british: 'hob',
        plural: 'hobs'
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
        altplural: 'pushchairs',
        context: 'Baby carriages.'
    },
    {
        american: 'student',
        british: 'pupil',
        plural: 'pupils',
        context: 'Ages K–12.'
    },
    {
        american: 'studio apartment',
        british: 'bedsit',
        plural: 'bedsits'
    },
    {
        american: 'study',
        british: 'revise',
        plural: 'revises',
        context: 'Education.'
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
        american: 'stunned',
        british: 'knocked for six',
        alt: 'gobsmacked',
        context: 'Astonishment.'
    },
    {
        american: 'stupid',
        british: 'daft',
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
        altplural: 'undergrounds',
        context: 'Transportation.'
    },
    {
        american: 'sunblock',
        british: 'sun cream',
        plural: 'sun creams'
    },
    {
        american: 'sunscreen',
        british: 'sun cream',
        plural: 'sun creams'
    },
    {
        american: 'superintendent',
        british: 'caretaker',
        plural: 'caretakers',
        context: 'Custodians.'
    },
    {
        american: 'suspender',
        british: 'brace',
        plural: 'braces',
        context: 'Apparel.'
    },
    {
        american: 'suv',
        british: 'four-by-four',
        plural: 'four-by-fours',
        abbreviation: true
    },
    {
        american: 'an suv',
        british: 'a four-by-four',
        abbreviation: true
    },
    {
        american: 'sweater',
        british: 'jumper',
        plural: 'jumpers',
        context: 'Apparel.'
    },
    {
        // sweater vest
        american: 'jumper vest',
        british: 'sleeveless jumper',
        plural: 'sleeveless jumpers',
        typed: 'sweater vest',
        typedplural: 'sweater vests',
        context: 'Apparel.'
    },
    {
        american: 'sweatpant',
        british: 'track bottom',
        plural: 'track bottoms',
        alt: 'jogging bottom',
        altplural: 'jogging bottoms'
    },
    {
        american: 'sweetie',
        british: 'duck'
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
        altplural: 'fruit chews',
        context: 'Candy.'
    },
    {
        american: 'tailpipe',
        british: 'exhaust pipe',
        plural: 'exhaust pipes'
    },
    {
        american: 'taken care of',
        british: 'sorted'
    },
    {
        american: 'takeout',
        british: 'takeaway',
        plural: 'takeaways',
        context: 'Food.'
    },
    {
        american: 'take-out',
        british: 'takeaway',
        plural: 'takeaways',
        context: 'Food.'
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
        altplural: 'vests',
        context: 'Apparel.'
    },
    {
        american: 'tantrum',
        british: 'strop',
        plural: 'strops',
        alt: 'wobbly',
        altplural: 'wobblies'
    },
    {
        american: 'teeter-totter',
        british: 'seesaw',
        plural: 'seesaws'
    },
    {
        american: 'teed off',
        british: 'hacked off',
        alt: 'cheesed off',
        context: 'Irritation.'
    },
    {
        american: 'teleprompter',
        british: 'autocue',
        plural: 'autocues'
    },
    {
        american: 'ten thirty',
        british: 'half ten',
        context: 'Time.'
    },
    {
        american: 'tenth grade',
        british: 'year eleven',
        plural: 'year elevens',
        context: 'School.'
    },
    {
        american: 'tenth grader',
        british: 'eleventh-year',
        plural: 'eleventh-years',
        context: 'School.'
    },
    {
        american: 'terminate',
        british: 'sack',
        context: 'Employment.'
    },
    {
        american: 'terminated',
        british: 'sacked',
        context: 'Employment.'
    },
    {
        american: 'thanks',
        british: 'cheers',
        alt: 'ta'
    },
    {
        american: 'that\'s bullshit',
        british: 'come off it',
        alt: 'you\'re having a laugh',
        context: 'Exasperation.'
    },
    {
        american: 'the emergency room',
        british: 'casualty',
        plural: 'the casualty wards',
        context: 'Hospitals.'
    },
    {
        american: 'the er',
        british: 'a&e',
        context: 'Hospitals.'
    },
    {
        american: 'theater',
        british: 'cinema',
        plural: 'cinemas',
        context: 'Films.'
    },
    {
        american: 'the whole shebang',
        british: 'the full monty'
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
        american: 'thief',
        british: 'filcher',
        plural: 'filchers'
    },
    {
        american: 'thingy',
        british: 'wotsit',
        plural: 'wotsits',
        alt: 'wossname',
        altplural: 'wossnames'
    },
    {
        american: 'think',
        british: 'reckon'
    },
    {
        american: 'third grade',
        british: 'year four',
        plural: 'year fours',
        context: 'School.'
    },
    {
        american: 'third grader',
        british: 'fourth-year',
        plural: 'fourth-years',
        context: 'School.'
    },
    {
        american: 'third wheel',
        british: 'gooseberry',
        plural: 'gooseberries',
        context: 'Superfluousness.'
    },
    {
        american: 'thought',
        british: 'reckoned'
    },
    {
        american: 'three thirty',
        british: 'half three',
        context: 'Time.'
    },
    {
        american: 'throw',
        british: 'bung',
        plural: 'bungs',
        context: 'Flinging motion.'
    },
    {
        american: 'thumbtack',
        british: 'drawing pin',
        plural: 'drawing pins'
    },
    {
        american: 'ticket stub',
        british: 'counterfoil',
        plural: 'counterfoils'
    },
    {
        american: 'tidbit',
        british: 'titbit',
        plural: 'titbits'
    },
    {
        american: 'timid',
        british: 'nesh'
    },
    {
        american: 'tipsy',
        british: 'tiddly'
    },
    {
        american: 'tired',
        british: 'knackered',
        alt: 'done in',
        context: 'Sleepiness.'
    },
    {
        american: 'to boot',
        british: 'in the bargain',
        context: 'As well, also.'
    },
    {
        american: 'toilet',
        british: 'loo',
        plural: 'loos'
    },
    {
        american: 'ton',
        british: 'shedload',
        plural: 'shedloads',
        context: 'Quantity.'
    },
    {
        american: 'top-notch',
        british: 'top-drawer'
    },
    {
        american: 'total',
        british: 'proper',
        context: 'Absolute, utter.'
    },
    {
        american: 'touchy',
        british: 'tetchy',
        context: 'Petulance.'
    },
    {
        american: 'tough luck',
        british: 'hard cheese',
        alt: 'hard lines',
        context: 'Interjection.'
    },
    {
        american: 'toward',
        british: 'towards'
    },
    {
        american: 'track meet',
        british: 'athletics meeting',
        alt: 'athletics meetings'
    },
    {
        american: 'track pants',
        british: 'trackies',
        context: 'Sports apparel.'
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
        american: 'transportation',
        british: 'transport'
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
        american: 'trophies',
        british: 'silverware',
        context: 'Awards.'
    },
    {
        american: 'truck',
        british: 'lorry',
        plural: 'lorries'
    },
    {
        // truck stop
        american: 'lorry stop',
        british: 'transport café',
        plural: 'transport cafés',
        typed: 'truck stop',
        typedplural: 'truck stops'
    },
    {
        american: 'trunk',
        british: 'boot',
        plural: 'boots',
        context: 'Vehicles.'
    },
    {
        american: 'tuna fish',
        british: 'tuna'
    },
    {
        american: 'turn signal',
        british: 'indicator',
        plural: 'indicators'
    },
    {
        american: 'turn up',
        british: 'rock up',
        context: 'Making an appearance.'
    },
    {
        american: 'turned up',
        british: 'rocked up',
        context: 'Making an appearance.'
    },
    {
        american: 'turning up',
        british: 'rocking up',
        context: 'Making an appearance.'
    },
    {
        american: 'turns up',
        british: 'rocks up',
        context: 'Making an appearance.'
    },
    {
        american: 'tv',
        british: 'telly',
        abbreviation: true,
        context: 'Television.'
    },
    {
        american: 'twelfth grade',
        british: 'year thirteen',
        plural: 'year thirteens',
        alt: 'upper sixth',
        altplural: 'upper sixths',
        context: 'School.'
    },
    {
        american: 'twelfth grader',
        british: 'thirteenth-year',
        plural: 'thirteenth-years',
        context: 'School.'
    },
    {
        american: 'twelve thirty',
        british: 'half twelve',
        context: 'Time.'
    },
    {
        american: 'two cents',
        british: 'twopence'
    },
    {
        american: 'two thirty',
        british: 'half two',
        context: 'Time.'
    },
    {
        american: 'two weeks',
        british: 'a fortnight',
        alt: 'fortnight'
    },
    {
        american: 'tylenol',
        british: 'panadol',
        alt: 'paracetamol'
    },
    {
        american: 'umbrella',
        british: 'brolly',
        plural: 'brollies'
    },
    {
        american: 'uncertain',
        british: 'wobbly'
    },
    {
        american: 'underwear',
        british: 'pants',
        alt: 'knickers'
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
        american: 'useless',
        british: 'feckless'
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
        plural: 'hoovers',
        context: 'Cleaning.'
    },
    {
        american: 'vagina',
        british: 'fanny',
        plural: 'fannies',
        alt: 'twat',
        altplural: 'twats'
    },
    {
        american: 'varmint',
        british: 'vermin',
        plural: 'vermin'
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
        american: 'was sitting there',
        british: 'was sat there'
    },
    {
        american: 'was told off',
        british: 'got a bollocking',
        alt: 'got stick'
    },
    {
        american: 'wash the dishes',
        british: 'wash up'
    },
    {
        american: 'washed the dishes',
        british: 'washed up'
    },
    {
        american: 'washes the dishes',
        british: 'washes up'
    },
    {
        american: 'washing the dishes',
        british: 'washing up'
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
        american: 'wealthy',
        british: 'minted'
    },
    {
        american: 'went ballistic',
        british: 'went spare',
        plural: 'Outrage.'
    },
    {
        american: 'went on about',
        british: 'banged on about'
    },
    {
        american: 'went wrong',
        british: 'went pear-shaped'
    },
    {
        american: 'were sitting there',
        british: 'were sat there'
    },
    {
        american: 'were told off',
        british: 'got a bollocking',
        alt: 'got stick'
    },
    {
        american: 'what do they have',
        british: 'what have they got'
    },
    {
        american: 'what do you have',
        british: 'what have you got'
    },
    {
        american: 'what does he have',
        british: 'what has he got'
    },
    {
        american: 'what does she have',
        british: 'what has she got'
    },
    {
        american: 'whatchamacallit',
        british: 'wossname',
        plural: 'wossnames',
        alt: 'wotsit',
        altplural: 'wotsits'
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
        plural: 'melts',
        alt: 'drip',
        altplural: 'drips'
    },
    {
        american: 'windbreaker',
        british: 'windcheater',
        plural: 'windcheaters',
        alt: 'cagoule',
        altplural: 'cagoules'
    },
    {
        american: 'windshield',
        british: 'windscreen',
        plural: 'windscreens'
    },
    {
        american: 'wonderful',
        british: 'corking'
    },
    {
        american: 'worn-out',
        british: 'clapped-out'
    },
    {
        american: 'would you like',
        british: 'fancy',
        context: 'Beginning an offering.'
    },
    {
        american: 'wow',
        british: 'blimey',
        alt: 'bloody hell',
        context: 'Interjection.'
    },
    {
        american: 'wrench',
        british: 'spanner',
        plural: 'spanners'
    },
    {
        american: 'yard',
        british: 'garden',
        plural: 'gardens',
        context: 'Grass.'
    },
    {
        american: 'yellow light',
        british: 'amber light',
        plural: 'amber lights',
        context: 'Traffic lights.'
    },
    {
        american: 'yield',
        british: 'give way',
        plural: 'gives way',
        context: 'Traffic.'
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
        american: 'zilch',
        british: 'nought',
        alt: 'nowt'
    },
    {
        american: 'zip code',
        british: 'postcode',
        plural: 'postcodes'
    },
    {
        american: 'zipper',
        british: 'zip',
        plural: 'zips',
        context: 'Haberdashery.'
    },
    {
        american: 'zucchini',
        british: 'courgette',
        plural: 'courgettes'
    },
];

export { translations };
