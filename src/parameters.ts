interface ABOUT_DISTANCE_INDICATOR {
  code: string;
  description: string;
}
interface GUARANTEED_INDICATOR {
  code: string;
  description: string;
}

interface COUNTRY {
  country_code: string;
  state_providence: string | null;
  description: string;
}

enum DOMESTIC_FOREIGN {
  DOMESTIC = 'Domestic',
  FOREIGN = 'Foreign',
}

interface CONDITIONS_OF_RACE {
  condition: string;
  code: string;
  description: string;
  type: DOMESTIC_FOREIGN;
}

interface AGE_RESTRICTION {
  code: string;
  description: string;
}

interface APPRENTICE_TYPE {
  code: string;
  description: string;
  type: DOMESTIC_FOREIGN;
}

interface LOCATION_TYPE {
  code: string;
  description: string;
}

interface BREED_TYPE_RACE {
  code: string;
  description: string;
}

interface BREED_TYPE_STARTER {
  code: string;
  description: string;
}
interface DAY_EVENING {
  code: string;
  description: string;
}
interface COUPLED_INDICATOR {
  code: string;
  description: string;
}
interface COURSE_TYPE {
  code: string;
  description: string;
}
interface DISTANCE {
  distance: number;
  distance_unit: DISTANCE_UNIT;
  about: ABOUT_DISTANCE_INDICATOR;
  long_description: string;
  published_value: string;
}
interface DISTANCE_UNIT {
  code: string;
  description: string;
}
interface DIVISION {
  code: string;
  description: string;
}
interface DOG_INDICATOR {
  code: string;
  description: string;
}
interface ELIGIBILITY {
  code: string;
  description: string;
}
interface EQUIPMENT_ENTRY {
  code: string;
  description: string;
}
interface EQUIPMENT_RESULT {
  code: string;
  description: string;
}
interface GATE_INDICATOR {
  code: string;
  description: string;
}
enum HORSE_TYPE {
  ARABIAN = 'Arabian',
  PAINT = 'Paint',
  APPALOOSA = 'Appaloosa',
  MULE = 'Mule',
  THOROUGHBRED = 'Thoroughbred',
  QUARTER_HORSE = 'Quarter Horse',
}
interface HORSE_COLOR {
  code: string;
  description: string;
  horse_type: string;
}
interface HORSE_SEX {
  code: string;
  description: string;
}
interface INCLUDE_PLUS_INDICATOR {
  code: string;
  description: string;
}
interface MARGINS {
  code: string;
  description: string;
}
interface MEDICATION {
  code: string;
  description: string;
}
interface NON_BETTING_INDICATOR {
  code: string;
  description: string;
}
interface OFFICIAL_INDICATOR {
  code: string;
  description: string;
}
interface QUALITY_INDICATOR {
  code: string;
  description: string;
}
interface PURSE_ENHANCEMENT {
  code: string;
  description: string;
}
interface PURSE_ENHANCEMENT_TYPE {
  code: string;
  description: string;
}
interface RACE_GRADE {
  code: string;
  description: string;
}
interface RACE_RESTRICTION {
  code: string;
  description: string;
}
interface RACE_TYPE_THOROUGHBRED_ARABIAN {
  code: string;
  description: string;
}
interface RACE_TYPE_QUARTER_HORSE_PAINT_APPALOOSA {
  code: string;
  description: string;
}
interface RIDER_TYPE {
  code: string;
  description: string;
}
interface SCRATCH_INDICATOR {
  code: string;
  description: string;
}
interface SCRATCH_REASON {
  code: string;
  description: string;
}
interface SEX_RESTRICTION {
  code: string;
  description: string;
}
interface PEOPLE_SOURCE {
  code: string;
  description: string;
}
interface RACE_SUMMARY_TYPE {
  code: string;
  description: string;
}
interface DOMESTIC_RACE_SUMMARY_TYPE {
  code: string;
  description: string;
}
interface FOREIGN_RACE_SUMMARY_TYPE {
  code: string;
  description: string;
}
interface RACE_SUMMARY_SURFACE_TYPE {
  code: string;
  description: string;
}
interface TIMING_METHOD {
  code: string;
  description: string;
}
interface TRACK_CONDITION {
  code: string;
  description: string;
  foreign: boolean;
}
interface TRACK_RECORD {
  code: string;
  description: string;
}
interface PEOPLE_TYPE {
  code: string;
  description: string;
  person: string;
}
interface WAGER_TYPE {
  code: string;
  description: string;
}
interface WEATHER {
  code: string;
  description: string;
}
interface WIND_DIRECTION {
  code: string;
  description: string;
}
interface WON_DESCRIPTION {
  code: string;
  description: string;
}
interface WORKOUT_TYPE {
  code: string;
  description: string;
}

const ABOUT_DISTANCE_INDICATORS: Array<ABOUT_DISTANCE_INDICATOR> = [
  {code: 'A', description: 'About Distance'},
  {code: 'Space', description: 'Exact Distance'},
];

const GUARANTEED_INDICATORS: Array<GUARANTEED_INDICATOR> = [
  {code: 'A', description: 'Added'},
  {code: 'G', description: 'Guaranteed'},
  {code: 'E', description: 'Estimated'},
];

const COUNTRY_CODES: Array<COUNTRY> = [
  // TODO:
];

const RACE_CONDITIONS: Array<CONDITIONS_OF_RACE> = [
  {
    condition: 'non winners',
    code: 'NW',
    description:
      'All races with conditions immediately followed by "non winners of..."',
    type: DOMESTIC_FOREIGN.DOMESTIC,
  },
  {
    condition: 'non winners',
    code: 'NMW',
    description: 'no Metropolitan wins',
    type: DOMESTIC_FOREIGN.FOREIGN,
  },
];

const AGE_RESTRICTIONS: Array<AGE_RESTRICTION> = [
  {code: '2', description: '2 yo'},
  {code: '3', description: '3 yo'},
  {code: '4', description: '4 yo'},
  {code: '5', description: '5 yo'},
  {code: '6', description: '6 yo'},
  {code: '7', description: '7 yo'},
  {code: '8', description: '8 yo'},
  {code: '9', description: '9 yo'},
  {code: '23', description: "2 & 3 yo's"},
  {code: '24', description: '2, 3 & 4 - foreign only'},
  {code: '2U', description: "2 yo's & up"},
  {code: '34', description: "3 & 4 yo's"},
  {code: '35', description: "3, 4, & 5 yo's"},
  {code: '36', description: "3, 4, 5 & 6 yo's"},
  {code: '3U', description: "3 yo's & up"},
  {code: '45', description: "4 & 5 yo's"},
  {code: '46', description: "4, 5 & 6 yo's"},
  {code: '47', description: "4, 5, 6 & 7 yo's"},
  {code: '4U', description: "4 yo's & up"},
  {code: '56', description: "5 & 6 yo's"},
  {code: '57', description: "5, 6 & 7 yo's"},
  {code: '58', description: "5, 6, 7 & 8 yo's"},
  {code: '59', description: "5, 6, 7, 8 & 9 yo's"},
  {code: '5U', description: "5 yo's & up"},
  {code: '67', description: "6 & 7 yo's"},
  {code: '68', description: "6, 7 & 8 yo's"},
  {code: '69', description: "6, 7, 8 & 9 yo's"},
  {code: '6U', description: "6 yo's & up"},
  {code: '78', description: "7 & 8 yo's"},
  {code: '79', description: "7, 8 & 9 yo's"},
  {code: '7U', description: "7 yo's & up"},
  {code: '8U', description: "8 yo's & up"},
  {code: '9U', description: "9 yo's & up"},
];

const APPRENTICE_TYPES: Array<APPRENTICE_TYPE> = [
  {
    code: '1',
    description: '1 bug = 5 pounds off',
    type: DOMESTIC_FOREIGN.DOMESTIC,
  },
  {
    code: '2',
    description: '2 bugs = 7 pounds off',
    type: DOMESTIC_FOREIGN.DOMESTIC,
  },
  {
    code: '3',
    description: '3 bugs = 10 pounds off',
    type: DOMESTIC_FOREIGN.DOMESTIC,
  },
  {
    code: 'C',
    description: 'Contract rider = 3 pounds off',
    type: DOMESTIC_FOREIGN.DOMESTIC,
  },
  {
    code: 'V',
    description: '1 kg = 2 pounds off',
    type: DOMESTIC_FOREIGN.FOREIGN,
  },
  {
    code: 'W',
    description: '2 kg = 4 pounds off ',
    type: DOMESTIC_FOREIGN.FOREIGN,
  },
  {
    code: 'X',
    description: '3 kg = 7 pounds off',
    type: DOMESTIC_FOREIGN.FOREIGN,
  },
  {
    code: 'Y',
    description: '4 kg = 9 pounds off',
    type: DOMESTIC_FOREIGN.FOREIGN,
  },
  {
    code: 'Z',
    description: '5 kg = 11 pounds off',
    type: DOMESTIC_FOREIGN.FOREIGN,
  },
];

const ATTENDANCE_TYPES: Array<LOCATION_TYPE> = [
  {code: 'F', description: 'Off track wagering'},
  {code: 'I', description: 'ITW = Intra state wagering'},
  {code: 'L', description: 'Total'},
  {code: 'N', description: 'INW = International wagering'},
  {code: 'O', description: 'OTB = Off track betting'},
  {code: 'P', description: 'Separate Pool handle (live)'},
  {code: 'S', description: 'ISW = Inter state wagering'},
  {code: 'T', description: 'Track'},
  {code: 'X', description: 'Simulcast handle (on track)'},
];

const RACE_BREED_TYPES: Array<BREED_TYPE_RACE> = [
  {code: 'AR', description: 'Arabian'},
  {code: 'QH', description: 'Quarter Horse'},
  {code: 'TB', description: 'Thoroughbred'},
  {
    code: 'MX',
    description: 'Paint and Appaloosa, Paint only, Appaloosa only or Mule only',
  },
];

const STARTER_BREED_TYPES: Array<BREED_TYPE_STARTER> = [
  {code: 'AR', description: 'Arabian'},
  {code: 'QH', description: 'Quarter Horse'},
  {code: 'PT', description: 'Paint'},
  {code: 'AP', description: 'Appaloosa'},
  {code: 'TB', description: 'Thoroughbred'},
  {code: 'MU', description: 'Mule'},
];

const CARD_IDS: Array<DAY_EVENING> = [
  {code: 'D', description: 'Day'},
  {code: 'E', description: 'Evening'},
];
const COUPLED_INDICATORS: Array<COUPLED_INDICATOR> = [
  {code: 'NA', description: 'Use letter listed on program page'},
  {code: 'Space', description: 'Not coupled'},
];

const COURSE_TYPES: Array<COURSE_TYPE> = [
  {code: 'A', description: 'All Weather Training'},
  {code: 'B', description: 'Timber'},
  {code: 'C', description: 'Downhill turf'},
  {code: 'D', description: 'Dirt'},
  {code: 'E', description: 'All Weather Track'},
  {code: 'F', description: 'Dirt training'},
  {code: 'G', description: 'Turf training'},
  {code: 'I', description: 'Inner turf'},
  {code: 'J', description: 'Jump'},
  {code: 'M', description: 'Hurdle'},
  {code: 'N', description: 'Inner track'},
  {code: 'O', description: 'Outer turf'},
  {code: 'S', description: 'Steeplechase'},
  {code: 'T', description: 'Turf'},
  {code: 'U', description: 'Hunt on turf'},
  {code: 'V', description: 'Hunt (Weatherbys only)'},
  {code: 'W', description: 'Wood chips'},
];
