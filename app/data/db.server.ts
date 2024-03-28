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
