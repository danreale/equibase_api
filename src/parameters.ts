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
  // TODO: fill the rest out
}
interface HORSE_COLOR {
  code: string;
  description: string;
  horse_type: string;
}
interface HORSE_SEX {}
interface INCLUDE_PLUS_INDICATOR {}
interface MARGINS {}
interface MEDICATION {}
interface NON_BETTING_INDICATOR {}
interface OFFICIAL_INDICATOR {}
interface QUALITY_INDICATOR {}
interface PURSE_ENHANCEMENT {}
interface PURSE_ENHANCEMENT_TYPE {}
interface RACE_GRADE {}
interface RACE_RESTRICTION {}
interface RACE_TYPE_THOROUGHBRED_ARABIAN {}
interface RACE_TYPE_QUARTER_HORSE_PAINT_APPALOOSA {}
interface RIDER_TYPE {}
interface SCRATCH_INDICATOR {}
interface SCRATCH_REASON {}
interface SEX_RESTRICTION {}
interface PEOPLE_SOURCE {}
interface RACE_SUMMARY_TYPE {}
interface DOMESTIC_RACE_SUMMARY_TYPE {}
interface FOREIGN_RACE_SUMMARY_TYPE {}
interface RACE_SUMMARY_SURFACE_TYPE {}
interface TIMING_METHOD {}
interface TRACK_CONDITION {}
interface TRACK_RECORD {}
interface PEOPLE_TYPE {}
interface WAGER_TYPE {}
interface WEATHER {}
interface WIND_DIRECTION {}
interface WON_DESCRIPTION {}
interface WORKOUT_TYPE {}

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
