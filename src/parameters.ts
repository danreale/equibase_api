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

const ABOUT_DISTANCE_INDICATORS: Array<ABOUT_DISTANCE_INDICATOR> = [
  {code: 'A', description: 'About Distance'},
  {code: 'Space', description: 'Exact Distance'},
];

const GUARANTEED_INDICATORS: Array<GUARANTEED_INDICATOR> = [
  {code: 'A', description: 'Added'},
  {code: 'G', description: 'Guaranteed'},
  {code: 'E', description: 'Estimated'},
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
