const flairByKeywords = {
    americanfootball: ["American Football", "Football", "Super Bowl", "Superbowl"],
    archery: ["archery"],
    art: ["art workshop", "art workshops", "Artist", "Artistic", "Art", "Arts", "drawing workshop", "painting", "sketching workshop"],
    artisticgymnastics: ["artistic gymnastics"],
    athleticsjumping: ["Jumping"],
    athleticsthrowing: ["discus", "hammer throw", "javelin", "shot put"],
    babyshower: ["baby shower", "babyshower", "maternity"],
    backtoschool: ["set-up", "back 2 school", "back to school", "back2school", "backtoschool", "first day of school", "first school day"],
    badminton: ["badminton"],
    baseball: ["baseball"],
    basketball: ["basketball"],
    bbq: ["barbecue", "barbeque", "bbq"],
    beer: ["beer", "beers", "October Fest", "Octoberfest", "Oktoberfest"],
    billiard: ["billiard"],
    bookclub: ["book club", "reading"],
    bowling: ["bowling"],
    boxing: ["Boxing"],
    breakfast: ["breakfast", "breakfasts", "brunch", "brunches"],
    camping: ["camping"],
    carmaintenance: ["auto maintenance", "auto mechanic", "auto repair", "automotive", "car maintenance", "car mechanic", "car repair", "tire change", "tire replacement"],
    chinesenewyear: ["Chinese Lunar New Year", "chinese new year", "Chinese New Year", "chinese new year's", "chinese new years", "Vietnamese New Year"],
    chores: ["Horticulture", "Housekeeping"],
    cinema: ["A/V", "cinema", "movie", "movies"],
    clean: ["clean house", "clean the apartment", "clean the house", "Cleaning", "tidy up", "vacuum clean", "vacuum cleaning"],
    climbing: ["bouldering", "climbing"],
    code: ["Codecademy", "coding time", "Computer Science", "hackathon", "Hour of Code", "learn to code", "Programming in Java", "Programming in Python", "Rails Girls", "Railsgirls", "Tech", "Web Development", "Web Programming"],
    coffee: ["coffee", "coffees"],
    concert: ["Music", "concert", "concerts", "gig", "gigs", "Performance"],
    cooking: ["Cookbook", "Nutrition/Edible", "cook dinner", "cook lunch", "cook meal", "cooking", "Culinary", "Edible", "make dinner", "make lunch", "prepare dinner", "prepare lunch", "prepare meal", "Recipe"],
    cricket: ["cricket competition", "cricket game", "cricket match"],
    cycling: ["bicycle", "bicycles", "bike", "bikes", "Biking", "cycling", "Mountain Bike", "Mountain Biking"],
    cyclingbmx: ["BMX"],
    dancing: ["ballet", "dance", "dances", "dancing"],
    datenight: ["candle light dinner", "candlelight dinner", "date night", "datenight", "Orientation", "romantic dinner"],
    dentist: ["dental", "dentist", "dentistry", "teeth cleaning"],
    dinner: ["Baking", "dinner", "dinners", "Family meal", "restaurant", "restaurants"],
    drinks: ["Bachelorette Party", "cocktail", "cocktails", "drinks", "Hen do", "Hen night", "Ladies night", "Stag and Doe", "Stag do", "Stag night", "stag party", "wine bar", "wine night"],
    equestrian: ["Dressage", "Equestrian", "Eventing", "Horse", "riding", "Horseriding"],
    fencing: ["Fencing"],
    fieldhockey: ["Field hockey"],
    gamenight: ["board game", "board games", "boardgame", "boardgames"],
    genericnewyear: ["New Year", "new year's", "new years"],
    golf: ["golf"],
    graduation: ["graduation"],
    gym: ["crossfit", "fitness center", "fitness class", "fitness evaluation", "fitness program", "fitness test", "fitness training", "gym", "weight lifting", "weightlifting", "workout", "workouts"],
    haircut: ["hair", "haircut", "hairdresser"],
    halloween: ["All Hallows' Eve", "All Saints' Eve", "Allhalloween", "hallowe'en", "halloween", "helloween"],
    handball: ["Handball"],
    handcraft: ["(cindy)", "Bead", "crochet", "embroidery", "felting", "handicraft", "knitting", "millinery", "patchwork", "quilting", "sewing"],
    hiking: ["hike", "hikes", "hiking"],
    islamicnewyear: ["Hijri New Year", "Islamic New Year", "Parsi New Year"],
    karate: ["defense", "Aikido", "jiu jitsu", "jiu-jitsu", "judo", "Jujutsu", "karate", "martial arts", "taekwondo"],
    kayaking: ["Canoe", "Canoeing", "kayaking"],
    learninstrument: ["cello", "choir", "choir practice", "clarinet", "classical music", "contrabass", "cornett", "flute", "guitar lesson", "Coaching", "music Class", "music ensemble", "oboe", "orchestra", "piano", "saxophone", "singing", "string quartett", "trombone", "trumpet", "tuba"],
    // learnlanguage: <language> Class, <language> Course, Practice <language>, where language is one of: Arabic, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Farsi, Filipino, Finnish, French, German, Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Russian, Slovak, Slovenian, Spanish, Swedish, Thai, Turkish, Ukranian, Vietnamese
    learnlanguage: ["Language"],
    lunch: ["Farmer's", "lunch", "luncheon", "lunches"],
    manicure: ["manicure", "manicures", "pedicure", "pedicures"],
    mardigras: ["Fat Tuesday", "Mardi Gras", "Mardigras", "Shrove Tuesday"],
    massage: ["back rub", "backrub", "massage", "massages"],
    nowruz: ["Nowruz", "Persian New Year"],
    oilchange: ["car service", "oil change"],
    pingpong: ["ping pong", "ping-pong", "pingpong", "table tennis"],
    planmyday: ["budgeting", "Meeting", "plan day", "plan quarter", "plan vacation", "plan week", "vacation planning", "week planning"],
    pride: ["christopher street day", "dyke march", "euro pride", "europride", "Gay & lesbian", "gay and lesbian", "gay lesbian", "gay parade", "gay pride", "gaygler", "gayglers", "lesbian march", "lesbian parade", "lesbian pride", "world pride", "worldpride"],
    quinceanera: ["quinceanera"],
    reachout: ["Advocacy", "clean up", "Employment", "reach out to", "send invitations", "write letter"],
    read: ["Insel", "ebook", "Newsletter", "newspaper", "reading", "Writer's"],
    repair: ["DIY", "electrician", "fridge repair", "handyman", "plumber"],
    rhythmicgymnastics: ["rhythmic gymnastics"],
    rowing: ["Head of the Charles", "Head of the River Race", "May Bumps", "Rowing"],
    rugbysevens: ["Rugby"],
    running: ["jog", "jogging", "jogs", "running", "sprinting", "track & field", "Track and field"],
    sailing: ["boat cruise", "sail", "sailboat", "sailing"],
    saintpatricksday: ["St Patrick's", "St Patricks"],
    santa: ["Father Christmas", "Santa Claus"],
    shooting: ["competitive shooting", "shooting competition", "shooting sport", "shooting sports"],
    skiing2: ["ski", "skiing", "skis", "snow boarding", "snow shoe", "Snowboarding", "snowshoeing"],
    sleep: ["nap", "napping", "relaxing", "resting", "sleep", "sleeping"],
    soccer: ["soccer"],
    swimming: ["Diving", "swim", "swimming", "swims", "Synchronized Swimming"],
    tennis: ["tennis"],
    thanksgiving: ["thanksgiving"],
    theatreopera: ["opera", "theater", "theatre"],
    triathlon: ["triathlon"],
    valentinesday: ["Valentine Day", "Valentine's Day", "Valentines Day"],
    videogaming: ["AGDQ", "Games Done Quick", "SGDQ", "video game", "video games", "video gaming", "Videogames", "Videogaming", "Youth"],
    violin2: ["violin", "violins"],
    volleyball: ["Volleyball"],
    walk: ["going for a walk", "walk", "walking"],
    walkingdog: ["dog sitting", "dog walker", "dog walking", "dogsitting", "take dog out", "take out dog", "walk dog", "walk the dog"],
    waterpolo: ["Water polo", "waterpolo"],
    wedding: ["wedding", "wedding eve", "wedding-eve party", "weddings"],
    wrestling: ["Wrestling"],
    xmas: ["Boxing Day", "christmas", "x-mas", "xmas"],
    // xmasmeal: <holiday> brunch, <holiday> dinner, <holiday> lunch, <holiday> luncheon, where <holiday> is in christmas, christmas eve, x-mas, xmas, x-mas, x-mas eve
    xmasparty: ["christmas eve party", "christmas party", "x-mas eve party", "x-mas party", "xmas eve party", "xmas party"],
    yoga: ["yoga"]
}

const keywords = [];

Object.values(flairByKeywords).forEach(( v ) => { keywords.push(...v.map((item) => {return item.toLowerCase()})) });

function splitWords( eventTitle ) {
    return eventTitle.toLowerCase().split(' ')
}

const matchesKeyword = ( word ) => keywords.includes( word )

function getFlairByKeyword( keyword ) {
    return Object.keys( flairByKeywords ).find( key => flairByKeywords[key].map(item => item.toLowerCase()).includes( keyword ) );
}

function flairUrl( flair ) {
    return `https://ssl.gstatic.com/tmly/f8944938hffheth4ew890ht4i8/flairs/xxhdpi/img_${flair}.jpg`;
}

function getFlairUrl( eventTitle ) {
    const words = splitWords( eventTitle );
    const matchingKeyword = words.find( matchesKeyword );
    const flair = getFlairByKeyword( matchingKeyword );
    const url = flairUrl( flair );
    return matchingKeyword ? url : null;
}


export default getFlairUrl;