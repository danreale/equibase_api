import "dotenv/config";
// Generated with CLI
import { getXataClient } from "src/xata";
const xata = getXataClient();
import { TRACK_CODES } from "./track_codes";
import { TRAINING_CENTERS } from "./training_centers";
import * as parameters from "./parameters";

// TRACKS
const tracks = await xata.db.tracks.create(TRACK_CODES);
console.log(tracks);

// TRAINING CENTERS
const training_centers = await xata.db.training_centers.create(
  TRAINING_CENTERS
);
console.log(training_centers);

// PARAMETERS
const about_distance_indicators = await xata.db.about_distance_indicator.create(
  parameters.ABOUT_DISTANCE_INDICATORS
);
console.log("About Distance Indicators", about_distance_indicators.length);

const guaranteed_indicators = await xata.db.guaranteed_indicators.create(
  parameters.GUARANTEED_INDICATORS
);
console.log("Guaranteed Indicators", guaranteed_indicators.length);

const countries = await xata.db.countries.create(parameters.COUNTRY_CODES);
console.log("Countries", countries.length);

const age_restrictions = await xata.db.age_restrictions.create(
  parameters.AGE_RESTRICTIONS
);
console.log("Age Restrictions", age_restrictions.length);

const apprentice_types = await xata.db.apprentice_types.create(
  parameters.APPRENTICE_TYPES
);
console.log("Age Restrictions", apprentice_types.length);

const attendance_types = await xata.db.attendance_types.create(
  parameters.ATTENDANCE_TYPES
);
console.log("Age Restrictions", attendance_types.length);

const race_breed_types = await xata.db.race_breed_types.create(
  parameters.RACE_BREED_TYPES
);
console.log("Race Breed Types", race_breed_types.length);

const starter_breed_types = await xata.db.starter_breed_types.create(
  parameters.STARTER_BREED_TYPES
);
console.log("Starter Breed Types", starter_breed_types.length);

const card_ids = await xata.db.card_ids.create(parameters.CARD_IDS);
console.log("Card Ids", card_ids.length);

const coupled_indicators = await xata.db.coupled_indicators.create(
  parameters.COUPLED_INDICATORS
);
console.log("Coupled Indicators", coupled_indicators.length);

const course_types = await xata.db.course_types.create(parameters.COURSE_TYPES);
console.log("Course Types", course_types.length);

const distances = await xata.db.distances.create(parameters.DISTANCES);
console.log("Distances", distances.length);

const distance_units = await xata.db.distance_units.create(
  parameters.DISTANCE_UNITS
);
console.log("Distance Units", distance_units.length);

const division_indicators = await xata.db.division_indicators.create(
  parameters.DIVISION_INDICATORS
);
console.log("Division Indicators", division_indicators.length);

const dog_indicators = await xata.db.dog_indicators.create(
  parameters.DOG_INDICATORS
);
console.log("Dog Indicators", dog_indicators.length);

const eligibility_types = await xata.db.eligibility_types.create(
  parameters.ELIGIBILITY_TYPES
);
console.log("Eligibility Types", eligibility_types.length);

const equipment_entries = await xata.db.equipment_entries.create(
  parameters.EQUIPMENT_ENTRIES
);
console.log("Equipment Entries", equipment_entries.length);

const equipment_results = await xata.db.equipment_results.create(
  parameters.EQUIPMENT_RESULTS
);
console.log("Equipment Results", equipment_results.length);

const gate_indicators = await xata.db.gate_indicators.create(
  parameters.GATE_INDICATORS
);
console.log("Gate Indicators", gate_indicators.length);

const horse_colors = await xata.db.horse_colors.create(parameters.HORSE_COLORS);
console.log("Horse Colors", horse_colors.length);

const horse_sexes = await xata.db.horse_sexes.create(parameters.HORSE_SEXES);
console.log("Horse Sexes", horse_sexes.length);

const include_plus_indicators = await xata.db.include_plus_indicators.create(
  parameters.INCLUDE_PLUS_INDICATORS
);
console.log("Inclide Plus Indicators", include_plus_indicators.length);

const margins = await xata.db.margins.create(parameters.MARGINS);
console.log("Margins", margins.length);

const medications = await xata.db.medications.create(parameters.MEDICATIONS);
console.log("Medications", medications.length);

const non_betting_indicators = await xata.db.non_betting_indicators.create(
  parameters.NON_BETTING_INDICATORS
);
console.log("Non Betting Indicators", non_betting_indicators.length);

const official_indicators = await xata.db.official_indicators.create(
  parameters.OFFICIAL_INDICATORS
);
console.log("Official Indicators", official_indicators.length);

const quality_indicators = await xata.db.quality_indicators.create(
  parameters.QUALITY_INDICATORS
);
console.log("Quality Indicators", quality_indicators.length);

const purse_enhancements = await xata.db.purse_enhancements.create(
  parameters.PURSE_ENHANCEMENTS
);
console.log("Purse Enhancements", purse_enhancements.length);

const purse_enhancement_types = await xata.db.purse_enhancement_types.create(
  parameters.PURSE_ENHANCEMENT_TYPES
);
console.log("Purse Enhancement Types", purse_enhancement_types.length);

const race_grades = await xata.db.race_grades.create(parameters.RACE_GRADES);
console.log("Race Grades", race_grades.length);

const race_restrictions = await xata.db.race_restrictions.create(
  parameters.RACE_RESTRICTIONS
);
console.log("Race Restrictions", race_restrictions.length);

const race_type_thoroughbred = await xata.db.race_type_thoroughbred.create(
  parameters.RACE_TYPE_THOROUGHBRED
);
console.log("Race Type Thoroughbred", race_type_thoroughbred.length);

const race_type_quarter_horse = await xata.db.race_type_quarter_horse.create(
  parameters.RACE_TYPE_QUARTER_HORSE_PAINT_APPALOOSA
);
console.log("Race Type Quarter Horse", race_type_quarter_horse.length);

const rider_types = await xata.db.rider_types.create(parameters.RIDER_TYPES);
console.log("Rider Types", rider_types.length);

const scratch_indicators = await xata.db.scratch_indicators.create(
  parameters.SCRATCH_INDICATORS
);
console.log("Scratch Indicators", scratch_indicators.length);

const scratch_reasons = await xata.db.scratch_reasons.create(
  parameters.SCRATCH_REASONS
);
console.log("Scratch Reasons", scratch_reasons.length);

const sex_restrictions = await xata.db.sex_restrictions.create(
  parameters.SEX_RESTRICTIONS
);
console.log("Sex Restrictions", sex_restrictions.length);

const people_sources = await xata.db.people_sources.create(
  parameters.PEOPLE_SOURCES
);
console.log("People Sources", people_sources.length);

const race_summary_types = await xata.db.race_summary_types.create(
  parameters.RACE_SUMMARY_TYPES
);
console.log("Race Summary Types", race_summary_types.length);

const domestic_race_summary_types =
  await xata.db.domestic_race_summary_types.create(
    parameters.DOMESTIC_RACE_SUMMARY_TYPES
  );
console.log("Domestic Race Summary Types", domestic_race_summary_types.length);

const foreign_race_summary_types =
  await xata.db.foreign_race_summary_types.create(
    parameters.FOREIGN_RACE_SUMMARY_TYPES
  );
console.log("Foreign Race Summary Types", foreign_race_summary_types.length);

const race_summary_surface_types =
  await xata.db.race_summary_surface_types.create(
    parameters.RACE_SUMMARY_SURFACE_TYPES
  );
console.log("Race Summary Summary Types", race_summary_surface_types.length);

const timing_methods = await xata.db.timing_methods.create(
  parameters.TIMING_METHODS
);
console.log("Timing Methods", timing_methods.length);

const track_conditions = await xata.db.track_conditions.create(
  parameters.TRACK_CONDITIONS
);
console.log("Track Conditions", track_conditions.length);

const track_records = await xata.db.track_records.create(
  parameters.TRACK_RECORDS
);
console.log("Track Records", track_records.length);

const people_types = await xata.db.people_types.create(parameters.PEOPLE_TYPES);
console.log("People Types", people_types.length);

const wager_types = await xata.db.wager_types.create(parameters.WAGER_TYPES);
console.log("Wager Types", wager_types.length);

const weather_types = await xata.db.weather_types.create(
  parameters.WEATHER_TYPES
);
console.log("Weather Types", weather_types.length);

const wind_directions = await xata.db.wind_directions.create(
  parameters.WIND_DIRECTIONS
);
console.log("Wind Directions", wind_directions.length);

const won_descriptions = await xata.db.won_descriptions.create(
  parameters.WON_DESCRIPTIONS
);
console.log("Won Descriptions", won_descriptions.length);

const workout_types = await xata.db.workout_types.create(
  parameters.WORKOUT_TYPES
);
console.log("Workout Types", workout_types.length);

const conditions_of_races = await xata.db.conditions_of_races.create(
  parameters.CONDITIONS_OF_RACES
);
console.log("Conditions of Races", conditions_of_races.length);
