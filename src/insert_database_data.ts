import "dotenv/config";
// Generated with CLI
import { getXataClient } from "src/xata";
const xata = getXataClient();

import {TRACK_CODES} from './track_codes'
const tracks = await xata.db.tracks.create(TRACK_CODES);
console.log(tracks);