import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Equibase" },
    { name: "description", content: "Equibase Data" },
  ];
};

export default function Index() {
  return (
    <>
      <div>
        <Header />
        <ul className="grid justify-center space-y-5 text-center">
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
          <li>
            <Link to="/trainingcenters">Training Centers</Link>
          </li>
        </ul>
      </div>

      <div className="py-5">
        <h2 className="text-center text-2xl py-5">Parameters</h2>
        <ul className="grid justify-center space-y-5 text-center">
          <li>
            <Link to="/parameters/aboutdistanceindicators">
              About Distance Indicators
            </Link>
          </li>
          <li>
            <Link to="/parameters/guaranteedindicators">
              Guaranteed Indicators
            </Link>
          </li>
          <li>
            <Link to="/parameters/countries">Countries</Link>
          </li>
          <li>
            <Link to="/parameters/agerestrictions">Age Restrictions</Link>
          </li>
          <li>
            <Link to="/parameters/apprenticetypes">Apprentice Types</Link>
          </li>
          <li>
            <Link to="/parameters/attendancetypes">Attendance Types</Link>
          </li>
          <li>
            <Link to="/parameters/racebreedtypes">Race Breed Types</Link>
          </li>
          <li>
            <Link to="/parameters/starterbreedtypes">Starter Breed Types</Link>
          </li>
          <li>
            <Link to="/parameters/cardids">Card Ids</Link>
          </li>
          <li>
            <Link to="/parameters/coupledindicators">Coupled Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/coursetypes">Course Types</Link>
          </li>
          <li>
            <Link to="/parameters/distances">Distances</Link>
          </li>
          <li>
            <Link to="/parameters/distanceunits">Distance Units</Link>
          </li>
          <li>
            <Link to="/parameters/divisionindicators">Division Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/dogindicators">Dog Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/eligibilitytypes">Eligibility Types</Link>
          </li>
          <li>
            <Link to="/parameters/equipmententries">Equipment Entries</Link>
          </li>
          <li>
            <Link to="/parameters/equipmentresults">Countries</Link>
          </li>
          <li>
            <Link to="/parameters/gateindicators">Gate Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/horsecolors">Horse Colors</Link>
          </li>
          <li>
            <Link to="/parameters/horsesexes">Horse Sexes</Link>
          </li>
          <li>
            <Link to="/parameters/includeplusindicators">
              Include Plus Indicators
            </Link>
          </li>
          <li>
            <Link to="/parameters/margins">Margins</Link>
          </li>
          <li>
            <Link to="/parameters/medications">Medications</Link>
          </li>
          <li>
            <Link to="/parameters/nonbettingindicators">
              Non Betting Indicators
            </Link>
          </li>
          <li>
            <Link to="/parameters/officialindicators">Official Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/qualityindicators">Quality Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/purseenhancements">Purse Enhancements</Link>
          </li>
          <li>
            <Link to="/parameters/purseenhancementtypes">
              Purse Enhancement Types
            </Link>
          </li>
          <li>
            <Link to="/parameters/racegrades">Race Grades</Link>
          </li>
          <li>
            <Link to="/parameters/racerestrictions">Race Restrictions</Link>
          </li>
          <li>
            <Link to="/parameters/racetypethoroughbred">
              Race Type Thoroughbred
            </Link>
          </li>
          <li>
            <Link to="/parameters/racetypequarterhorse">
              Race Type Quarter Horse
            </Link>
          </li>
          <li>
            <Link to="/parameters/ridertypes">Rider Types</Link>
          </li>
          <li>
            <Link to="/parameters/scratchindicators">Scratch Indicators</Link>
          </li>
          <li>
            <Link to="/parameters/scratchreasons">Scratch Reasons</Link>
          </li>
          <li>
            <Link to="/parameters/sexrestrictions">Sex Restrictions</Link>
          </li>
          <li>
            <Link to="/parameters/peoplesources">People Sources</Link>
          </li>
          <li>
            <Link to="/parameters/racesummarytypes">Race Summary Types</Link>
          </li>
          <li>
            <Link to="/parameters/domesticracesummarytypes">
              Domestic Race Summary Types
            </Link>
          </li>
          <li>
            <Link to="/parameters/foreignracesummarytypes">
              Foreign Race Summary Types
            </Link>
          </li>
          <li>
            <Link to="/parameters/racesummarysurfacetypes">
              Race Summary Surface Types
            </Link>
          </li>
          <li>
            <Link to="/parameters/timingmethods">Timing Methods</Link>
          </li>
          <li>
            <Link to="/parameters/trackconditions">Track Conditions</Link>
          </li>
          <li>
            <Link to="/parameters/trackrecords">Track Records</Link>
          </li>
          <li>
            <Link to="/parameters/peopletypes">People Types</Link>
          </li>
          <li>
            <Link to="/parameters/wagertypes">Wager Types</Link>
          </li>
          <li>
            <Link to="/parameters/weathertypes">Weather Types</Link>
          </li>
          <li>
            <Link to="/parameters/winddirections">Wind Directions</Link>
          </li>
          <li>
            <Link to="/parameters/wondescriptions">Won Descriptions</Link>
          </li>
          <li>
            <Link to="/parameters/workouttypes">Workout Types</Link>
          </li>
          <li>
            <Link to="/parameters/conditionsofraces">Conditions of Races</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
