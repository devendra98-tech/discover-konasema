export interface Place {
  id: string;
  name: {
    en: string;
    te: string;
  };
  title: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  highlights: string[];
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  travelTips: string[];
}

export interface FoodItem {
  id: string;
  name: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  image: string;
  category: string;
}

export const places: Place[] = [
  {
    id: "amalapuram",
    name: { en: "Amalapuram", te: "అమలాపురం" },
    title: { en: "The Cultural Hub", te: "సాంస్కృతిక కేంద్రం" },
    description: {
      en: "A major town in Konaseema known for its temples, markets, and riverfront. The town serves as a cultural and commercial center of the region.",
      te: "దేవాలయాలు, మార్కెట్లు మరియు నదీ ఫ్రంట్‌కు ప్రసిద్ధి చెందిన కోనసీమలోని ప్రధాన పట్టణం. ఈ పట్టణం ప్రాంతం యొక్క సాంస్కృతిక మరియు వాణిజ్య కేంద్రంగా పనిచేస్తుంది.",
    },
    highlights: [
      "Ancient Temples",
      "Riverfront Views",
      "Local Markets",
      "Cultural Events",
    ],
    images: [],
    coordinates: { lat: 16.5783, lng: 82.0061 },
    travelTips: [
      "Best visited during festivals",
      "Try local street food",
      "Visit during early morning for temple darshan",
    ],
  },
  {
    id: "dindi",
    name: { en: "Dindi Resorts", te: "దిండి రిసార్ట్‌లు" },
    title: { en: "Riverside Paradise", te: "నదీ ఫ్రంట్ స్వర్గం" },
    description: {
      en: "Beautiful resorts along the Godavari offering serene views and boat rides. Perfect for a peaceful getaway amidst nature.",
      te: "గోదావరి వెంట అందమైన రిసార్ట్‌లు ప్రశాంతమైన వీక్షణలు మరియు పడవ ప్రయాణాలను అందిస్తాయి. ప్రకృతి మధ్య ప్రశాంతమైన విశ్రాంతికి సరైనది.",
    },
    highlights: [
      "Boat Rides",
      "Riverside Views",
      "Resort Stay",
      "Nature Walks",
    ],
    images: [],
    coordinates: { lat: 16.7333, lng: 82.2167 },
    travelTips: [
      "Book resorts in advance",
      "Best for weekend getaways",
      "Carry mosquito repellent",
    ],
  },
  {
    id: "yanam",
    name: { en: "Yanam Coastline", te: "యానం తీరం" },
    title: { en: "Coastal Beauty", te: "తీర సౌందర్యం" },
    description: {
      en: "Pristine beaches and coastal areas where the Godavari meets the Bay of Bengal. Experience the unique confluence of river and sea.",
      te: "గోదావరి బంగాళాఖాతాన్ని కలుస్తుంది, ప్రకృతి సౌందర్యమైన బీచ్‌లు మరియు తీర ప్రాంతాలు. నది మరియు సముద్రం యొక్క ప్రత్యేకమైన సంగమాన్ని అనుభవించండి.",
    },
    highlights: [
      "Beach Views",
      "River-Sea Confluence",
      "Coastal Villages",
      "Sunset Views",
    ],
    images: [],
    coordinates: { lat: 16.7333, lng: 82.2167 },
    travelTips: [
      "Visit during sunset",
      "Respect local customs",
      "Carry water and snacks",
    ],
  },
  {
    id: "papikondalu",
    name: { en: "Papikondalu Gateway", te: "పాపికొండలు గేట్‌వే" },
    title: { en: "Nature's Wonder", te: "ప్రకృతి అద్భుతం" },
    description: {
      en: "Gateway to the famous Papikondalu, known for scenic river cruises through narrow gorges and breathtaking natural beauty.",
      te: "ప్రసిద్ధ పాపికొండలకు గేట్‌వే, సన్నని గార్జ్‌ల గుండా సెనిక్ నది క్రూయిజ్‌లు మరియు అద్భుతమైన ప్రకృతి సౌందర్యానికి ప్రసిద్ధి.",
    },
    highlights: [
      "River Cruises",
      "Narrow Gorges",
      "Scenic Beauty",
      "Wildlife Spotting",
    ],
    images: [],
    coordinates: { lat: 17.5833, lng: 81.3333 },
    travelTips: [
      "Book cruise tickets in advance",
      "Best during monsoon season",
      "Carry binoculars for bird watching",
    ],
  },
  {
    id: "atreyapuram",
    name: { en: "Atreyapuram", te: "అత్రేయాపురం" },
    title: { en: "Sweet Village", te: "తీపి గ్రామం" },
    description: {
      en: "Famous for Pootharekulu, this village is a must-visit for food lovers. Watch the traditional preparation of this delicate sweet.",
      te: "పూతరేకులకు ప్రసిద్ధి, ఈ గ్రామం ఆహార ప్రేమికులకు తప్పనిసరిగా చూడవలసినది. ఈ సున్నితమైన తీపి యొక్క సాంప్రదాయ తయారీని చూడండి.",
    },
    highlights: [
      "Pootharekulu Making",
      "Traditional Sweets",
      "Village Experience",
      "Local Crafts",
    ],
    images: [],
    coordinates: { lat: 16.7333, lng: 82.2167 },
    travelTips: [
      "Try fresh Pootharekulu",
      "Watch the preparation process",
      "Buy as souvenirs",
    ],
  },
];

export const foodItems: FoodItem[] = [
  {
    id: "pootharekulu",
    name: { en: "Pootharekulu", te: "పూతరేకులు" },
    description: {
      en: "Paper-thin sweet from Atreyapuram, made with rice starch and jaggery. A delicate and unique delicacy.",
      te: "అత్రేయాపురం నుండి కాగితం-సన్నని తీపి, బియ్యపు స్టార్చ్ మరియు బెల్లంతో తయారు చేయబడింది. సున్నితమైన మరియు ప్రత్యేకమైన వంటకం.",
    },
    image: "",
    category: "sweets",
  },
  {
    id: "gongura",
    name: { en: "Gongura", te: "గోంగూర" },
    description: {
      en: "Tangy sorrel leaves curry, a staple in Andhra cuisine. Often paired with chicken or mutton.",
      te: "పుల్లని గోంగూర ఆకులు కూర, ఆంధ్ర వంటకాలలో ప్రధానమైనది. తరచుగా చికెన్ లేదా మటన్‌తో జతచేయబడుతుంది.",
    },
    image: "",
    category: "curry",
  },
  {
    id: "chepa-pulusu",
    name: { en: "Chepa Pulusu", te: "చేప పులుసు" },
    description: {
      en: "Traditional fish curry with tamarind and spices. A coastal delicacy loved by locals.",
      te: "చింతపండు మరియు మసాలా దినుసులతో సాంప్రదాయ చేప కూర. స్థానికులచే ప్రియమైన తీర వంటకం.",
    },
    image: "",
    category: "seafood",
  },
  {
    id: "mango-pickles",
    name: { en: "Mango Pickles", te: "మామిడి ఊరగాయలు" },
    description: {
      en: "Spicy and tangy pickles made from raw mangoes. A perfect accompaniment to rice.",
      te: "కాచిన మామిడి పండ్లతో తయారు చేసిన మసాలా మరియు పుల్లని ఊరగాయలు. బియ్యానికి సంపూర్ణమైన అనుబంధం.",
    },
    image: "",
    category: "pickles",
  },
  {
    id: "pulihora",
    name: { en: "Pulihora", te: "పులిహోర" },
    description: {
      en: "Tangy tamarind rice, a traditional dish prepared during festivals and special occasions.",
      te: "పుల్లని చింతపండు అన్నం, పండుగలు మరియు ప్రత్యేక సందర్భాలలో తయారు చేసిన సాంప్రదాయ వంటకం.",
    },
    image: "",
    category: "rice",
  },
  {
    id: "coconut-sweets",
    name: { en: "Coconut Sweets", te: "కొబ్బరి తీపులు" },
    description: {
      en: "Delicious sweets made from fresh coconut. Various preparations including laddus and barfis.",
      te: "తాజా కొబ్బరితో తయారు చేసిన రుచికరమైన తీపులు. లడ్డూలు మరియు బర్ఫీలతో సహా వివిధ తయారీలు.",
    },
    image: "",
    category: "sweets",
  },
];

