var mongoose = require("mongoose");

var Location = require("./models/location");
var User = require("./models/user");


var largeList = [
    "Aberfeldy",
    "Aberlour",
    "Abhainn Dearg",
    "Ailsa Bay",
    "Allt-a-Bhainne",
    "Annandale",
    "Arbikie",
    "Ardbeg",
    "Ardmore",
    "Ardnahoe",
    "Ardnamurchan",
    "Arran",
    "Auchentoshan",
    "Auchroisk",
    "Aultmore",
    "Balblair",
    "Ballindalloch",
    "Balmenach",
    "Balvenie",
    "Banff",
    "Ben Nevis",
    "Ben Wyvis",
    "Benriach",
    "Benrinnes",
    "Benromach",
    "Bladnoch",
    "Blair Athol",
    "Borders",
    "Bowmore",
    "Braeval",
    "Brora",
    "Bruichladdich",
    "Bunnahabhain",
    "Caol Ila",
    "Caperdonich",
    "Cardhu",
    "Clynelish",
    "Coleburn",
    "Convalmore",
    "Cragganmore",
    "Craigellachie",
    "Daftmill",
    "Dailuaine",
    "Dallas Dhu",
    "Dalmore",
    "Dalmunach",
    "Dalwhinnie",
    "Deanston",
    "Dufftown",
    "Edradour",
    "Ferintosh",
    "Fettercairn",
    "Glasgow",
    "Glen Albyn",
    "Glen Elgin",
    "Glen Flagler",
    "Glen Garioch",
    "Glen Grant",
    "Glen Keith",
    "Glen Mhor",
    "Glen Moray",
    "Glen Ord",
    "Glen Scotia",
    "Glen Spey",
    "Glenallachie",
    "Glenburgie",
    "Glencadam",
    "Glendronach",
    "Glendullan",
    "Glenesk",
    "Glenfarclas",
    "Glenfiddich",
    "Glenglassaugh",
    "Glengoyne",
    "Glengyle",
    "Glenkinchie",
    "The Glenlivet",
    "Glenlochy",
    "Glenlossie",
    "Glenmorangie",
    "Glenrothes",
    "Glentauchers",
    "Glenturret",
    "Glenugie",
    "Glenury Royal",
    "Highland Park",
    "Imperial",
    "InchDairnie",
    "Inchgower",
    "Inverleven",
    "Isle of Harris",
    "Isle of Raasay",
    "Jura",
    "Kilchoman",
    "Killyloch",
    "Kinclaith",
    "Kininvie",
    "Knockando",
    "Knockdhu",
    "Ladyburn",
    "Lagavulin",
    "Laphroaig",
    "Leven",
    "Lindores Abbey",
    "Linkwood",
    "Littlemill",
    "Loch Lomond",
    "Lochside",
    "Lomond",
    "Longmorn",
    "Macallan",
    "Macduff",
    "Malt Mill",
    "Mannochmore",
    "Millburn",
    "Miltonduff",
    "Mortlach",
    "North Port",
    "Oban",
    "Parkmore",
    "Pittyvaich",
    "Port Ellen",
    "Pulteney",
    "Rosebank",
    "Roseisle",
    "Royal Brackla",
    "Royal Lochnagar",
    "Scapa",
    "Speyburn",
    "Speyside",
    "Springbank",
    "St Magdalene",
    "Strathearn",
    "Strathisla",
    "Strathmill",
    "Strathmore",
    "Talisker",
    "Tamdhu",
    "Tamnavulin",
    "Teaninich",
    "Tobermory",
    "Tomatin",
    "Tomintoul",
    "Tormore",
    "Tullibardine",
    "Wolfburn"
];


var data2 = [
    ["Aberfeldy",
        "Aberfeldy Perth and Kinross",
        "Highlands",
        "Bacardi",
    ],
    [
        "Aberlour",
        "Charlestown-of-Aberlour",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Abhainn Dearg",
        "Isle of Lewis",
        "Islands",
        "Independent",
    ],
    [
        "Ailsa Bay",
        "Girvan Ayrshire",
        "Lowlands",
        "William Grant &amp; Sons",
    ],
    [
        "Allt a' Bhainne",
        "Glenrinnes",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Annandale distillery",
        "Annan",
        "Lowlands",
        "Annandale Distillery Company Limited",
    ],
    [
        "Arbikie",
        "Inverkeilor",
        "Highlands",
        "Arbikie Distilling",
    ],
    [
        "Ardbeg",
        "Port Ellen",
        "Islay",
        "LVMH",
    ],
    [
        "Ardmore",
        "Kennethmont",
        "Highlands",
        "Beam Suntory",
    ],
    [
        "Ardnamurchan distillery",
        "Ardnamurchan",
        "Highlands",
        "Adelphi Whisky",
    ],
    [
        "Arran",
        "Lochranza",
        "Islands",
        "Isle of Arran Distillers Ltd",
    ],
    [
        "Auchentoshan",
        "Dalmuir",
        "Lowlands",
        "Beam Suntory",
    ],
    [
        "Auchroisk",
        "Mulben",
        "Speyside",
        "Diageo",
    ],
    [
        "Aultmore",
        "Banffshire",
        "Speyside",
        "Bacardi",
    ],
    [
        "Balblair",
        "Edderton",
        "Highlands",
        "ThaiBev",
    ],
    [
        "Balmenach",
        "Cromdale",
        "Speyside",
        "ThaiBev",
    ],
    [
        "Balvenie",
        "Dufftown",
        "Speyside",
        "William Grant &amp; Sons",
    ],
    [
        "Ben Nevis",
        "Fort William",
        "Highlands",
        "Nikka Whisky Distilling",
    ],
    [
        "BenRiach",
        "Morayshire",
        "Speyside",
        "Brown-Forman",
    ],
    [
        "Benrinnes",
        "Banffshire",
        "Speyside",
        "Diageo",
    ],
    [
        "Benromach",
        "Forres",
        "Speyside",
        "Gordon &amp; MacPhail",
    ],
    [
        "Bladnoch",
        "Wigtown",
        "Lowlands",
        "David Prior",
    ],
    [
        "Blair Athol",
        "Pitlochry Perthshire",
        "Highlands",
        "Diageo",
    ],
    [
        "Bowmore",
        "Isle of Islay",
        "Islay",
        "Beam Suntory",
    ],
    [
        "Brackla",
        "Nairn",
        "Highlands",
        "Bacardi",
    ],
    [
        "Braeval",
        "Ballindalloch",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Bruichladdich",
        "Isle of Islay",
        "Islay",
        "Rémy Cointreau",
    ],
    [
        "Bunnahabhain",
        "Port Askaig",
        "Islay",
        "Distell South Africa",
    ],
    [
        "Caol Ila",
        "Port Askaig",
        "Islay",
        "Diageo",
    ],
    [
        "Cardhu",
        "Knockando",
        "Speyside",
        "Diageo",
    ],
    [
        "Clynelish",
        "Brora",
        "Highlands",
        "Diageo",
    ],
    [
        "Cragganmore",
        "Ballindalloch",
        "Speyside",
        "Diageo",
    ],
    [
        "Craigellachie",
        "Craigellachie Moray",
        "Speyside",
        "Bacardi",
    ],
    [
        "Daftmill",
        "Fife",
        "Lowlands",
        "Independent",
    ],
    [
        "Dailuaine",
        "Aberlour",
        "Speyside",
        "Diageo",
    ],
    [
        "Dalmore",
        "Alness",
        "Highlands",
        "Emperador Inc",
    ],
    [
        "Dalwhinnie",
        "Dalwhinnie",
        "Highlands",
        "Diageo",
    ],
    [
        "Deanston",
        "Doune",
        "Highlands",
        "Distell South Africa",
    ],
    [
        "Dufftown",
        "Banffshire",
        "Speyside",
        "Diageo",
    ],
    [
        "Edradour",
        "Pitlochry",
        "Highlands",
        "Signatory Vintage Scotch Whisky Company",
    ],
    [
        "Fettercairn",
        "Laurencekirk",
        "Highlands",
        "Emperador Inc",
    ],
    [
        "Gartbreck distillery",
        "Bowmore",
        "Islay",
        "Gartbreck Distilling Company",
    ],
    [
        "Glen Elgin",
        "Morayshire",
        "Speyside",
        "Diageo",
    ],
    [
        "Glen Garioch",
        "Oldmeldrum",
        "Highlands",
        "Beam Suntory",
    ],
    [
        "Glen Grant",
        "Rothes",
        "Speyside",
        "Campari",
    ],
    [
        "Glen Keith",
        "Keith",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Glen Moray",
        "Elgin",
        "Speyside",
        "La Martiniquaise",
    ],
    [
        "Glen Ord",
        "Muir of Ord",
        "Northern Highlands",
        "Diageo",
    ],
    [
        "Glen Scotia",
        "Mull of Kintyre",
        "Campbeltown",
        "Loch Lomond Group",
    ],
    [
        "Glen Spey",
        "Rothes",
        "Speyside",
        "Diageo",
    ],
    [
        "Glenallachie",
        "Banffshire",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Glenburgie",
        "Morayshire",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Glencadam Distillery",
        "Angus",
        "Highlands",
        "Angus Dundee Distiller",
    ],
    [
        "Glendronach",
        "Aberdeenshire",
        "Highlands",
        "Brown-Forman",
    ],
    [
        "Glendullan",
        "Banffshire",
        "Speyside",
        "Diageo",
    ],
    [
        "Glenfarclas",
        "Ballindollach",
        "Speyside",
        "J. &amp; G. Grant",
    ],
    [
        "Glenfiddich",
        "Dufftown",
        "Speyside",
        "William Grant &amp; Sons",
    ],
    [
        "Glenglassaugh",
        "Portsoy",
        "Highlands",
        "Brown-Forman",
    ],
    [
        "Glengoyne",
        "Dumgoyne",
        "Highlands",
        "Ian Macleod Distillers",
    ],
    [
        "Glengyle",
        "Campbeltown",
        "Campbeltown",
        "Mitchell's Glengyle Ltd",
    ],
    [
        "Glenkinchie",
        "Pencaitland",
        "Lowlands",
        "Diageo",
    ],
    [
        "Glenlivet",
        "Ballindalloch",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Glenlossie",
        "Elgin",
        "Speyside",
        "Diageo",
    ],
    [
        "Glenmorangie",
        "Tain",
        "Highlands",
        "LVMH",
    ],
    [
        "Glenrothes",
        "Rothes",
        "Speyside",
        "Berry Brothers &amp; Rudd",
    ],
    [
        "Glentauchers",
        "Mulben",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Glenturret",
        "Crieff",
        "Highlands",
        "Highland Distillers",
    ],
    [
        "Highland Park",
        "Kirkwall",
        "Islands",
        "Edrington",
    ],
    [
        "Inchgower",
        "Buckie",
        "Speyside",
        "Diageo",
    ],
    [
        "Isle of Jura",
        "Jura",
        "Islands",
        "Whyte &amp; Mackay",
    ],
    [
        "Kilchoman",
        "Kilchoman",
        "Islay",
        "Independent",
    ],
    [
        "Kingsbarns Distillery",
        "Kingsbarns",
        "Lowlands",
        "Wemyss Malts",
    ],
    [
        "Kininvie Distillery",
        "Dufftown",
        "Speyside",
        "William Grant &amp; Sons",
    ],
    [
        "Knockando",
        "Knockando",
        "Speyside",
        "Diageo",
    ],
    [
        "Knockdhu",
        "Knock",
        "Highlands",
        "ThaiBev",
    ],
    [
        "Lagavulin",
        "Port Ellen",
        "Islay",
        "Diageo",
    ],
    [
        "Laphroaig",
        "Port Ellen",
        "Islay",
        "Beam Suntory",
    ],
    [
        "Linkwood",
        "Elgin",
        "Speyside",
        "Diageo",
    ],
    [
        "Loch Lomond",
        "Alexandria",
        "Highlands",
        "Loch Lomond Distillery Company",
    ],
    [
        "Lochnagar",
        "Ballater",
        "Highlands",
        "Diageo",
    ],
    [
        "LoneWolf",
        "Ellon",
        "Highland",
        "LoneWolf Spirits Ltd",
    ],
    [
        "Longmorn",
        "Elgin",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Macduff",
        "Banff",
        "Speyside",
        "Bacardi",
    ],
    [
        "Mannochmore",
        "Elgin",
        "Speyside",
        "Diageo",
    ],
    [
        "Miltonduff",
        "Elgin",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Mortlach",
        "Dufftown",
        "Speyside",
        "Diageo",
    ],
    [
        "Oban",
        "Oban",
        "Highlands",
        "Diageo",
    ],
    [
        "Pulteney",
        "Wick",
        "Highlands",
        "ThaiBev",
    ],
    [
        "Roseisle distillery",
        "Elgin",
        "Speyside",
        "Diageo",
    ],
    [
        "Royal Brackla",
        "Nairn",
        "Highlands",
        "Bacardi",
    ],
    [
        "Scapa",
        "Kirkwall",
        "Islands",
        "Pernod Ricard",
    ],
    [
        "Speyburn",
        "Rothes",
        "Speyside",
        "ThaiBev",
    ],
    [
        "Speyside",
        "Drumguish",
        "Speyside",
        "Speyside Distillery Co. Ltd.",
    ],
    [
        "Springbank",
        "Mull of Kintyre",
        "Campbeltown",
        "Independent",
    ],
    [
        "Strathearn",
        "Methven",
        "Highlands",
        "Independent",
    ],
    [
        "Strathisla",
        "Keith",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Strathmill",
        "Keith",
        "Speyside",
        "Diageo",
    ],
    [
        "Talisker",
        "Carbost Isle of Skye",
        "Islands",
        "Diageo",
    ],
    [
        "Tamdhu",
        "Knockando",
        "Speyside",
        "Ian MacLeod Distillers",
    ],
    [
        "Tamnavulin",
        "Tomnavoulin",
        "Speyside",
        "Whyte &amp; Mackay",
    ],
    [
        "Teaninich",
        "Alness",
        "Highlands",
        "Diageo",
    ],
    [
        "The Macallan",
        "Craigellachie",
        "Speyside",
        "Edrington",
    ],
    [
        "Tobermory",
        "Isle of Mull",
        "Islands",
        "Distell South Africa",
    ],
    [
        "Tomatin",
        "Tomatin",
        "Highlands",
        "Takara Shuzo Corp.",
    ],
    [
        "Tomintoul",
        "Ballindalloch",
        "Speyside",
        "Angus Dundee Distiller",
    ],
    [
        "Tormore",
        "Grantown-on-Spey",
        "Speyside",
        "Pernod Ricard",
    ],
    [
        "Tullibardine",
        "Blackford",
        "Highlands",
        "Picard Vins &amp; Spiritueux",
    ],
    [
        "Wolfburn",
        "Thurso",
        "Highlands",
        "Independent",
    ]
];

var data = [{
    name: "Aberlour",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Aberfeldy",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Abhainn Dearg",
    area: "Islands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Ailsa Bay",
    area: "Lowlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Allt a' Bhainne",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "AnCnoc",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Annandale",
    area: "Lowlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Arbikie",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Ardbeg",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Ardmore",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Ardnamurchan",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Arran",
    area: "Islands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Auchentoshan",
    area: "Lowlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Auchroisk",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Aultmore",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Balblair",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Balmenach",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Balvenie",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Ben Nevis",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "BenRiach",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Benrinnes",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Benromach",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Bladnoch",
    area: "Lowlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Blair Athol",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Bowmore",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Brackla",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Braeval",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Bruichladdich",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Bunnahabhain",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Caol Ila",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Cardhu",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Clynelish",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Cragganmore",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Craigellachie",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Daftmill",
    area: "Lowlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Dailuaine",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Dalmore",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Dalwhinnie",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Deanston",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Dufftown",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Edradour",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Fettercairn",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Gartbreck",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenallachie",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenburgie",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glencadam",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Deveron",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glendronach",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glendullan",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Elgin",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenfarclas",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenfiddich",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Garioch",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenglassaugh",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glengoyne",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Grant",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glengyle",
    area: "Campbeltown",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Keith",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenkinchie",
    area: "Lowlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenlivet",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenlossie",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenmorangie",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Moray",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Ord",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenrothes",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Scotia",
    area: "Campbeltown",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glen Spey",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glentauchers",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Glenturret",
    area: "Highlands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Highland Park",
    area: "Islands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Inchgower",
    area: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Isle of Jura",
    area: "Islands",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Kilchoman",
    area: "Islay",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Kingsbarns",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Kininvie",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Knockando",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Knockdhu",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Lagavulin",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Laphroaig",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Linkwood",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Loch Lomond",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Lochnagar",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Longmorn",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Macallan",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Macduff",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Mannochmore",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Miltonduff",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Mortlach",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Oban",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Pulteney",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Roseisle",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Scapa",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Speyburn",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Speyside",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Springbank",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Strathearn",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Strathisla",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Strathmill",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Talisker",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tamdhu",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tamnavulin",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Teaninich",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tobermory",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tomatin",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tomintoul",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tormore",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Tullibardine",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}, {
    name: "Wolfburn",
    author: {
        id: "57e27a326e0aee63403d9ad4",
        username: 'Spirit Of Scotland'
    }
}];

var user = {
    id: "57e27a326e0aee63403d9ad4",
    username: 'Spirit Of Scotland',
    password: 'test'
};



function seedDB() {
    User.remove({});
    User.create(user);

    var mergeLargeAndOriginal = function (data, largeList) {
        largeList.forEach(
            function (listName) {
                console.log("finding " + listName);
                if (data.filter(function (obj) {
                        return obj.name == listName;
                    }).length == 0) {
                    data.push({
                        name: listName,
                        author: {
                            id: "57e27a326e0aee63403d9ad4",
                            username: 'Spirit Of Scotland'
                        }
                    });
                }
            }
        );
        return data;
    };

    var mergeOrginalAndDetails = function (getNewData, data, data2, largeList) {
        var newData = getNewData(data, largeList);
        newData.forEach(function (still) {
            still.locationType = "Distillery";
            still.area = "No Area Found";
            still.town = "No Town Found";
            still.owner = "No Owner Found";
            data2.forEach(function (newInfo) {
                if (still.name == newInfo[0]) {
                    still.area = newInfo[2];
                    still.town = newInfo[1];
                    still.owner = newInfo[3];
                    return still;
                }
            });
            Location.create(still, function (err, location) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("added " + location);

                }

            });
        });

    };


    //Remove all locations
    Location.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed locations!");

        mergeOrginalAndDetails(mergeLargeAndOriginal, data, data2, largeList);




    });







}

module.exports = seedDB;
