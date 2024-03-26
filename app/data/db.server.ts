import { getXataClient } from "src/xata";
import { DateTime } from "luxon";
import { equals } from "@xata.io/client";

export async function getTracksSearch(query: string) {
  const data = await getXataClient()
    .db.tracks.filter({
      $any: [
        { track_id: { $contains: query.toUpperCase() } },
        { country_code: { $contains: query.toUpperCase() } },
        { track_description: { $contains: query.toUpperCase() } },
        { state_providence: { $contains: query.toUpperCase() } },
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
        { training_center_id: { $contains: query.toUpperCase() } },
        { country_code: { $contains: query.toUpperCase() } },
        { training_center_name: { $contains: query.toUpperCase() } },
        { state_providence: { $contains: query.toUpperCase() } },
      ],
    })
    .sort("country_code", "asc")
    .sort("training_center_id", "asc")
    .getAll();
  return data;
}
