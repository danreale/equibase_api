import { getXataClient } from "src/xata";
import { DateTime } from "luxon";
import { equals } from "@xata.io/client";

export async function getTracksSearch(query: string) {
  const data = await getXataClient()
    .db.tracks.filter({
      $any: [
        { track_id: { $iContains: query } },
        { country_code: { $iContains: query } },
        { track_description: { $iContains: query } },
        { state_providence: { $iContains: query } },
      ],
    })
    .sort("country_code", "asc")
    .sort("track_id", "asc")
    .getAll();
  return data;
}
export async function getAllTracks() {
  const data = await getXataClient()
    .db.tracks.sort("country_code", "asc")
    .sort("track_id", "asc")
    .getAll();
  return data;
}

export async function getAllTraingCenters() {
  const data = await getXataClient()
    .db.training_centers.sort("country_code", "asc")
    .sort("training_center_id", "asc")
    .getAll();
  return data;
}
export async function getTrainingCenterSearch(query: string) {
  const data = await getXataClient()
    .db.training_centers.filter({
      $any: [
        { training_center_id: { $iContains: query } },
        { country_code: { $iContains: query } },
        { training_center_name: { $iContains: query } },
        { state_providence: { $iContains: query } },
      ],
    })
    .sort("country_code", "asc")
    .sort("training_center_id", "asc")
    .getAll();
  return data;
}

export async function getAllAboutDistanceIndidcators() {
  const data = await getXataClient()
    .db.about_distance_indicator.sort("code", "asc")
    .getAll();
  return data;
}
export async function getAboutDistanceIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.about_distance_indicator.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllGuaranteedIndicators() {
  const data = await getXataClient()
    .db.guaranteed_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getGuaranteedIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.guaranteed_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllCountries() {
  const data = await getXataClient()
    .db.countries.sort("country_code", "asc")
    .sort("state_providence", "asc")
    .sort("description", "asc")
    .getAll();
  return data;
}
export async function getCountriesSearch(query: string) {
  const data = await getXataClient()
    .db.countries.filter({
      $any: [
        { description: { $iContains: query } },
        { country_code: { $iContains: query } },
        { state_providence: { $iContains: query } },
      ],
    })
    .sort("country_code", "asc")
    .sort("state_providence", "asc")
    .sort("description", "asc")
    .getAll();
  return data;
}

export async function getAllAgeRestrictions() {
  const data = await getXataClient()
    .db.age_restrictions.sort("code", "asc")
    .getAll();
  return data;
}
export async function getAgeRestrictionsSearch(query: string) {
  const data = await getXataClient()
    .db.age_restrictions.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllApprenticeTypes() {
  const data = await getXataClient()
    .db.apprentice_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getApprenticeTypesSearch(query: string) {
  const data = await getXataClient()
    .db.apprentice_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
        { type: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllAttendanceTypes() {
  const data = await getXataClient()
    .db.attendance_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getAttendanceTypesSearch(query: string) {
  const data = await getXataClient()
    .db.attendance_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceBreedTypes() {
  const data = await getXataClient()
    .db.race_breed_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceBreedTypesSearch(query: string) {
  const data = await getXataClient()
    .db.race_breed_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllStarterBreedTypes() {
  const data = await getXataClient()
    .db.starter_breed_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getStarterBreedTypesSearch(query: string) {
  const data = await getXataClient()
    .db.starter_breed_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllCardIds() {
  const data = await getXataClient().db.card_ids.sort("code", "asc").getAll();
  return data;
}
export async function getCardIdsSearch(query: string) {
  const data = await getXataClient()
    .db.card_ids.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllCoupledIndicators() {
  const data = await getXataClient()
    .db.coupled_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getCoupledIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.coupled_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllCourseTypes() {
  const data = await getXataClient()
    .db.course_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getCourseTypesSearch(query: string) {
  const data = await getXataClient()
    .db.course_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}
export async function getAllDistances() {
  const data = await getXataClient()
    .db.distances.sort("distance", "asc")
    .getAll();
  return data;
}
export async function getDistancesSearch(query: string) {
  const data = await getXataClient()
    .db.distances.filter({
      $any: [
        { distance_unit: { $iContains: query } },
        { about: { $iContains: query } },
        { long_description: { $iContains: query } },
        { published_value: { $iContains: query } },
      ],
    })
    .sort("distance", "asc")
    .getAll();
  return data;
}
export async function getAllDistanceUnits() {
  const data = await getXataClient()
    .db.distance_units.sort("code", "asc")
    .getAll();
  return data;
}
export async function getDistanceUnitsSearch(query: string) {
  const data = await getXataClient()
    .db.distance_units.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllDivisionIndicators() {
  const data = await getXataClient()
    .db.division_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getDivisionIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.division_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllDogIndicators() {
  const data = await getXataClient()
    .db.dog_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getDogIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.dog_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllEligibilityTypes() {
  const data = await getXataClient()
    .db.eligibility_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getEligibilityTypesSearch(query: string) {
  const data = await getXataClient()
    .db.eligibility_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllEquipmentEntries() {
  const data = await getXataClient()
    .db.equipment_entries.sort("code", "asc")
    .getAll();
  return data;
}
export async function getEquipmentEntriesSearch(query: string) {
  const data = await getXataClient()
    .db.equipment_entries.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllEquipmentResults() {
  const data = await getXataClient()
    .db.equipment_results.sort("code", "asc")
    .getAll();
  return data;
}
export async function getEquipmentResultsSearch(query: string) {
  const data = await getXataClient()
    .db.equipment_results.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllGateIndicators() {
  const data = await getXataClient()
    .db.gate_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getGateIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.gate_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllHorseColors() {
  const data = await getXataClient()
    .db.horse_colors.sort("code", "asc")
    .getAll();
  return data;
}
export async function getHorseColorsSearch(query: string) {
  const data = await getXataClient()
    .db.horse_colors.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
        { horse_type: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}
export async function getAllHorseSexes() {
  const data = await getXataClient()
    .db.horse_sexes.sort("code", "asc")
    .getAll();
  return data;
}
export async function getHorseSexesSearch(query: string) {
  const data = await getXataClient()
    .db.horse_sexes.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllIncludePlusIndicators() {
  const data = await getXataClient()
    .db.include_plus_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getIncludePlusIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.include_plus_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllMargins() {
  const data = await getXataClient().db.margins.sort("code", "asc").getAll();
  return data;
}
export async function getMarginsSearch(query: string) {
  const data = await getXataClient()
    .db.margins.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllMedications() {
  const data = await getXataClient()
    .db.medications.sort("code", "asc")
    .getAll();
  return data;
}
export async function getMedicationsSearch(query: string) {
  const data = await getXataClient()
    .db.medications.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllNonBettingIndicators() {
  const data = await getXataClient()
    .db.non_betting_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getNonBettingIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.non_betting_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllOfficialIndicators() {
  const data = await getXataClient()
    .db.official_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getOfficialIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.official_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}
export async function getAllQualityIndicators() {
  const data = await getXataClient()
    .db.quality_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getQualityIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.quality_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllPurseEnhancements() {
  const data = await getXataClient()
    .db.purse_enhancements.sort("code", "asc")
    .getAll();
  return data;
}
export async function getPurseEnhancementsSearch(query: string) {
  const data = await getXataClient()
    .db.purse_enhancements.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllPurseEnhancementTypes() {
  const data = await getXataClient()
    .db.purse_enhancement_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getPurseEnhancementTypesSearch(query: string) {
  const data = await getXataClient()
    .db.purse_enhancement_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceGrades() {
  const data = await getXataClient()
    .db.race_grades.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceGradesSearch(query: string) {
  const data = await getXataClient()
    .db.race_grades.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceRestrictions() {
  const data = await getXataClient()
    .db.race_restrictions.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceRestrictionsSearch(query: string) {
  const data = await getXataClient()
    .db.race_restrictions.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceTypeThoroughbred() {
  const data = await getXataClient()
    .db.race_type_thoroughbred.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceTypeThoroughbredSearch(query: string) {
  const data = await getXataClient()
    .db.race_type_thoroughbred.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceTypeQuarterHorse() {
  const data = await getXataClient()
    .db.race_type_quarter_horse.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceTypeQuarterHorseSearch(query: string) {
  const data = await getXataClient()
    .db.race_type_quarter_horse.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRiderTypes() {
  const data = await getXataClient()
    .db.rider_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRiderTypesSearch(query: string) {
  const data = await getXataClient()
    .db.rider_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllScratchIndicators() {
  const data = await getXataClient()
    .db.scratch_indicators.sort("code", "asc")
    .getAll();
  return data;
}
export async function getScratchIndicatorsSearch(query: string) {
  const data = await getXataClient()
    .db.scratch_indicators.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllScratchReasons() {
  const data = await getXataClient()
    .db.scratch_reasons.sort("code", "asc")
    .getAll();
  return data;
}
export async function getScratchReasonsSearch(query: string) {
  const data = await getXataClient()
    .db.scratch_reasons.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllSexRestrictions() {
  const data = await getXataClient()
    .db.sex_restrictions.sort("code", "asc")
    .getAll();
  return data;
}
export async function getSexRestrictionsSearch(query: string) {
  const data = await getXataClient()
    .db.sex_restrictions.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceSummaryTypes() {
  const data = await getXataClient()
    .db.race_summary_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceSummaryTypesSearch(query: string) {
  const data = await getXataClient()
    .db.race_summary_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllDomesticRaceSummaryTypes() {
  const data = await getXataClient()
    .db.domestic_race_summary_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getDomesticRaceSummaryTypesSearch(query: string) {
  const data = await getXataClient()
    .db.domestic_race_summary_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllForeignRaceSummaryTypes() {
  const data = await getXataClient()
    .db.foreign_race_summary_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getForeignRaceSummaryTypesSearch(query: string) {
  const data = await getXataClient()
    .db.foreign_race_summary_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllRaceSummarySurfaceTypes() {
  const data = await getXataClient()
    .db.race_summary_surface_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getRaceSummarySurfaceTypesSearch(query: string) {
  const data = await getXataClient()
    .db.race_summary_surface_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllPeopleSources() {
  const data = await getXataClient()
    .db.people_sources.sort("code", "asc")
    .getAll();
  return data;
}
export async function getPeopleSourcesSearch(query: string) {
  const data = await getXataClient()
    .db.people_sources.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllTimingMethods() {
  const data = await getXataClient()
    .db.timing_methods.sort("code", "asc")
    .getAll();
  return data;
}
export async function getTimingMethodsSearch(query: string) {
  const data = await getXataClient()
    .db.timing_methods.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}
export async function getAllTrackConditions() {
  const data = await getXataClient()
    .db.track_conditions.sort("code", "asc")
    .getAll();
  return data;
}
export async function getTrackConditionsSearch(query: string) {
  const data = await getXataClient()
    .db.track_conditions.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllTrackRecords() {
  const data = await getXataClient()
    .db.track_records.sort("code", "asc")
    .getAll();
  return data;
}
export async function getTrackRecordsSearch(query: string) {
  const data = await getXataClient()
    .db.track_records.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllPeopleTypes() {
  const data = await getXataClient()
    .db.people_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getPeopleTypesSearch(query: string) {
  const data = await getXataClient()
    .db.people_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
        { person: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllWagerTypes() {
  const data = await getXataClient()
    .db.wager_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getWagerTypesSearch(query: string) {
  const data = await getXataClient()
    .db.wager_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllWeatherTypes() {
  const data = await getXataClient()
    .db.weather_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getWeatherTypesSearch(query: string) {
  const data = await getXataClient()
    .db.weather_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllWindDirections() {
  const data = await getXataClient()
    .db.wind_directions.sort("code", "asc")
    .getAll();
  return data;
}
export async function getWindDirectionsSearch(query: string) {
  const data = await getXataClient()
    .db.wind_directions.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllWonDescriptions() {
  const data = await getXataClient()
    .db.won_descriptions.sort("code", "asc")
    .getAll();
  return data;
}
export async function getWonDescriptionsSearch(query: string) {
  const data = await getXataClient()
    .db.won_descriptions.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getAllWorkoutTypes() {
  const data = await getXataClient()
    .db.workout_types.sort("code", "asc")
    .getAll();
  return data;
}
export async function getWorkoutTypesSearch(query: string) {
  const data = await getXataClient()
    .db.workout_types.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .getAll();
  return data;
}

export async function getConditionsOfRacesSearch(query: string) {
  const data = await getXataClient()
    .db.conditions_of_races.filter({
      $any: [
        { code: { $iContains: query } },
        { description: { $iContains: query } },
        { type: { $iContains: query } },
        { condition: { $iContains: query } },
      ],
    })
    .sort("code", "asc")
    .sort("type", "asc")
    .getAll();
  return data;
}
export async function getAllConditionsOfRaces() {
  const data = await getXataClient()
    .db.conditions_of_races.sort("code", "asc")
    .sort("type", "asc")
    .getAll();
  return data;
}
