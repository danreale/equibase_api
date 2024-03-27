import "dotenv/config";
// Generated with CLI
import { getXataClient } from "src/xata";
const xata = getXataClient();
import { TRACK_CODES } from "./track_codes";
import { TRAINING_CENTERS } from "./training_centers";
import * as parameters from "./parameters";

// TRACKS
// const tracks = await xata.db.tracks.create(TRACK_CODES);
// console.log(tracks);

// TRAINING CENTERS
// const training_centers = await xata.db.training_centers.create(
//   TRAINING_CENTERS
// );
// console.log(training_centers);

// PARAMETERS
// const about_distance_indicators = await xata.db.about_distance_indicator.create(
//   parameters.ABOUT_DISTANCE_INDICATORS
// );
// console.log("About Distance Indicators", about_distance_indicators.length);

// const guaranteed_indicators = await xata.db.guaranteed_indicators.create(
//   parameters.GUARANTEED_INDICATORS
// );
// console.log("Guaranteed Indicators", guaranteed_indicators.length);

// const countries = await xata.db.countries.create(parameters.COUNTRY_CODES);
// console.log("Countries", countries.length);

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
