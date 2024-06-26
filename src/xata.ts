// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "tracks",
    columns: [
      { name: "country_code", type: "string" },
      { name: "track_id", type: "string" },
      { name: "track_description", type: "string" },
      { name: "state_providence", type: "string" },
    ],
  },
  {
    name: "training_centers",
    columns: [
      { name: "country_code", type: "string" },
      { name: "training_center_id", type: "string" },
      { name: "training_center_name", type: "string" },
      { name: "state_providence", type: "string" },
    ],
  },
  {
    name: "about_distance_indicator",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "guaranteed_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "countries",
    columns: [
      { name: "country_code", type: "string" },
      { name: "state_providence", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "age_restrictions",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "apprentice_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
      { name: "type", type: "string" },
    ],
  },
  {
    name: "attendance_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_breed_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "starter_breed_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "card_ids",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "coupled_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "course_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "distances",
    columns: [
      { name: "distance", type: "int" },
      { name: "distance_unit", type: "string" },
      { name: "about", type: "string" },
      { name: "long_description", type: "string" },
      { name: "published_value", type: "string" },
    ],
  },
  {
    name: "distance_units",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "division_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "dog_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "eligibility_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "equipment_entries",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "equipment_results",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "gate_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "horse_colors",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
      { name: "horse_type", type: "string" },
    ],
  },
  {
    name: "horse_sexes",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "include_plus_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "margins",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "medications",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "non_betting_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "official_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "quality_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "purse_enhancements",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "purse_enhancement_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_grades",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_restrictions",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_type_thoroughbred",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_type_quarter_horse",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "rider_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "scratch_indicators",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "scratch_reasons",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "sex_restrictions",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "people_sources",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_summary_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "domestic_race_summary_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "foreign_race_summary_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "race_summary_surface_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "timing_methods",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "track_conditions",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
      { name: "foreign", type: "bool" },
    ],
  },
  {
    name: "track_records",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "people_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
      { name: "person", type: "string" },
    ],
  },
  {
    name: "wager_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "weather_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "wind_directions",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "won_descriptions",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "workout_types",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
    ],
  },
  {
    name: "conditions_of_races",
    columns: [
      { name: "code", type: "string" },
      { name: "description", type: "string" },
      { name: "type", type: "string" },
      { name: "condition", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Tracks = InferredTypes["tracks"];
export type TracksRecord = Tracks & XataRecord;

export type TrainingCenters = InferredTypes["training_centers"];
export type TrainingCentersRecord = TrainingCenters & XataRecord;

export type AboutDistanceIndicator = InferredTypes["about_distance_indicator"];
export type AboutDistanceIndicatorRecord = AboutDistanceIndicator & XataRecord;

export type GuaranteedIndicators = InferredTypes["guaranteed_indicators"];
export type GuaranteedIndicatorsRecord = GuaranteedIndicators & XataRecord;

export type Countries = InferredTypes["countries"];
export type CountriesRecord = Countries & XataRecord;

export type AgeRestrictions = InferredTypes["age_restrictions"];
export type AgeRestrictionsRecord = AgeRestrictions & XataRecord;

export type ApprenticeTypes = InferredTypes["apprentice_types"];
export type ApprenticeTypesRecord = ApprenticeTypes & XataRecord;

export type AttendanceTypes = InferredTypes["attendance_types"];
export type AttendanceTypesRecord = AttendanceTypes & XataRecord;

export type RaceBreedTypes = InferredTypes["race_breed_types"];
export type RaceBreedTypesRecord = RaceBreedTypes & XataRecord;

export type StarterBreedTypes = InferredTypes["starter_breed_types"];
export type StarterBreedTypesRecord = StarterBreedTypes & XataRecord;

export type CardIds = InferredTypes["card_ids"];
export type CardIdsRecord = CardIds & XataRecord;

export type CoupledIndicators = InferredTypes["coupled_indicators"];
export type CoupledIndicatorsRecord = CoupledIndicators & XataRecord;

export type CourseTypes = InferredTypes["course_types"];
export type CourseTypesRecord = CourseTypes & XataRecord;

export type Distances = InferredTypes["distances"];
export type DistancesRecord = Distances & XataRecord;

export type DistanceUnits = InferredTypes["distance_units"];
export type DistanceUnitsRecord = DistanceUnits & XataRecord;

export type DivisionIndicators = InferredTypes["division_indicators"];
export type DivisionIndicatorsRecord = DivisionIndicators & XataRecord;

export type DogIndicators = InferredTypes["dog_indicators"];
export type DogIndicatorsRecord = DogIndicators & XataRecord;

export type EligibilityTypes = InferredTypes["eligibility_types"];
export type EligibilityTypesRecord = EligibilityTypes & XataRecord;

export type EquipmentEntries = InferredTypes["equipment_entries"];
export type EquipmentEntriesRecord = EquipmentEntries & XataRecord;

export type EquipmentResults = InferredTypes["equipment_results"];
export type EquipmentResultsRecord = EquipmentResults & XataRecord;

export type GateIndicators = InferredTypes["gate_indicators"];
export type GateIndicatorsRecord = GateIndicators & XataRecord;

export type HorseColors = InferredTypes["horse_colors"];
export type HorseColorsRecord = HorseColors & XataRecord;

export type HorseSexes = InferredTypes["horse_sexes"];
export type HorseSexesRecord = HorseSexes & XataRecord;

export type IncludePlusIndicators = InferredTypes["include_plus_indicators"];
export type IncludePlusIndicatorsRecord = IncludePlusIndicators & XataRecord;

export type Margins = InferredTypes["margins"];
export type MarginsRecord = Margins & XataRecord;

export type Medications = InferredTypes["medications"];
export type MedicationsRecord = Medications & XataRecord;

export type NonBettingIndicators = InferredTypes["non_betting_indicators"];
export type NonBettingIndicatorsRecord = NonBettingIndicators & XataRecord;

export type OfficialIndicators = InferredTypes["official_indicators"];
export type OfficialIndicatorsRecord = OfficialIndicators & XataRecord;

export type QualityIndicators = InferredTypes["quality_indicators"];
export type QualityIndicatorsRecord = QualityIndicators & XataRecord;

export type PurseEnhancements = InferredTypes["purse_enhancements"];
export type PurseEnhancementsRecord = PurseEnhancements & XataRecord;

export type PurseEnhancementTypes = InferredTypes["purse_enhancement_types"];
export type PurseEnhancementTypesRecord = PurseEnhancementTypes & XataRecord;

export type RaceGrades = InferredTypes["race_grades"];
export type RaceGradesRecord = RaceGrades & XataRecord;

export type RaceRestrictions = InferredTypes["race_restrictions"];
export type RaceRestrictionsRecord = RaceRestrictions & XataRecord;

export type RaceTypeThoroughbred = InferredTypes["race_type_thoroughbred"];
export type RaceTypeThoroughbredRecord = RaceTypeThoroughbred & XataRecord;

export type RaceTypeQuarterHorse = InferredTypes["race_type_quarter_horse"];
export type RaceTypeQuarterHorseRecord = RaceTypeQuarterHorse & XataRecord;

export type RiderTypes = InferredTypes["rider_types"];
export type RiderTypesRecord = RiderTypes & XataRecord;

export type ScratchIndicators = InferredTypes["scratch_indicators"];
export type ScratchIndicatorsRecord = ScratchIndicators & XataRecord;

export type ScratchReasons = InferredTypes["scratch_reasons"];
export type ScratchReasonsRecord = ScratchReasons & XataRecord;

export type SexRestrictions = InferredTypes["sex_restrictions"];
export type SexRestrictionsRecord = SexRestrictions & XataRecord;

export type PeopleSources = InferredTypes["people_sources"];
export type PeopleSourcesRecord = PeopleSources & XataRecord;

export type RaceSummaryTypes = InferredTypes["race_summary_types"];
export type RaceSummaryTypesRecord = RaceSummaryTypes & XataRecord;

export type DomesticRaceSummaryTypes =
  InferredTypes["domestic_race_summary_types"];
export type DomesticRaceSummaryTypesRecord = DomesticRaceSummaryTypes &
  XataRecord;

export type ForeignRaceSummaryTypes =
  InferredTypes["foreign_race_summary_types"];
export type ForeignRaceSummaryTypesRecord = ForeignRaceSummaryTypes &
  XataRecord;

export type RaceSummarySurfaceTypes =
  InferredTypes["race_summary_surface_types"];
export type RaceSummarySurfaceTypesRecord = RaceSummarySurfaceTypes &
  XataRecord;

export type TimingMethods = InferredTypes["timing_methods"];
export type TimingMethodsRecord = TimingMethods & XataRecord;

export type TrackConditions = InferredTypes["track_conditions"];
export type TrackConditionsRecord = TrackConditions & XataRecord;

export type TrackRecords = InferredTypes["track_records"];
export type TrackRecordsRecord = TrackRecords & XataRecord;

export type PeopleTypes = InferredTypes["people_types"];
export type PeopleTypesRecord = PeopleTypes & XataRecord;

export type WagerTypes = InferredTypes["wager_types"];
export type WagerTypesRecord = WagerTypes & XataRecord;

export type WeatherTypes = InferredTypes["weather_types"];
export type WeatherTypesRecord = WeatherTypes & XataRecord;

export type WindDirections = InferredTypes["wind_directions"];
export type WindDirectionsRecord = WindDirections & XataRecord;

export type WonDescriptions = InferredTypes["won_descriptions"];
export type WonDescriptionsRecord = WonDescriptions & XataRecord;

export type WorkoutTypes = InferredTypes["workout_types"];
export type WorkoutTypesRecord = WorkoutTypes & XataRecord;

export type ConditionsOfRaces = InferredTypes["conditions_of_races"];
export type ConditionsOfRacesRecord = ConditionsOfRaces & XataRecord;

export type DatabaseSchema = {
  tracks: TracksRecord;
  training_centers: TrainingCentersRecord;
  about_distance_indicator: AboutDistanceIndicatorRecord;
  guaranteed_indicators: GuaranteedIndicatorsRecord;
  countries: CountriesRecord;
  age_restrictions: AgeRestrictionsRecord;
  apprentice_types: ApprenticeTypesRecord;
  attendance_types: AttendanceTypesRecord;
  race_breed_types: RaceBreedTypesRecord;
  starter_breed_types: StarterBreedTypesRecord;
  card_ids: CardIdsRecord;
  coupled_indicators: CoupledIndicatorsRecord;
  course_types: CourseTypesRecord;
  distances: DistancesRecord;
  distance_units: DistanceUnitsRecord;
  division_indicators: DivisionIndicatorsRecord;
  dog_indicators: DogIndicatorsRecord;
  eligibility_types: EligibilityTypesRecord;
  equipment_entries: EquipmentEntriesRecord;
  equipment_results: EquipmentResultsRecord;
  gate_indicators: GateIndicatorsRecord;
  horse_colors: HorseColorsRecord;
  horse_sexes: HorseSexesRecord;
  include_plus_indicators: IncludePlusIndicatorsRecord;
  margins: MarginsRecord;
  medications: MedicationsRecord;
  non_betting_indicators: NonBettingIndicatorsRecord;
  official_indicators: OfficialIndicatorsRecord;
  quality_indicators: QualityIndicatorsRecord;
  purse_enhancements: PurseEnhancementsRecord;
  purse_enhancement_types: PurseEnhancementTypesRecord;
  race_grades: RaceGradesRecord;
  race_restrictions: RaceRestrictionsRecord;
  race_type_thoroughbred: RaceTypeThoroughbredRecord;
  race_type_quarter_horse: RaceTypeQuarterHorseRecord;
  rider_types: RiderTypesRecord;
  scratch_indicators: ScratchIndicatorsRecord;
  scratch_reasons: ScratchReasonsRecord;
  sex_restrictions: SexRestrictionsRecord;
  people_sources: PeopleSourcesRecord;
  race_summary_types: RaceSummaryTypesRecord;
  domestic_race_summary_types: DomesticRaceSummaryTypesRecord;
  foreign_race_summary_types: ForeignRaceSummaryTypesRecord;
  race_summary_surface_types: RaceSummarySurfaceTypesRecord;
  timing_methods: TimingMethodsRecord;
  track_conditions: TrackConditionsRecord;
  track_records: TrackRecordsRecord;
  people_types: PeopleTypesRecord;
  wager_types: WagerTypesRecord;
  weather_types: WeatherTypesRecord;
  wind_directions: WindDirectionsRecord;
  won_descriptions: WonDescriptionsRecord;
  workout_types: WorkoutTypesRecord;
  conditions_of_races: ConditionsOfRacesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Dan-Reale-s-workspace-3m1pjh.us-east-1.xata.sh/db/equibase",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
