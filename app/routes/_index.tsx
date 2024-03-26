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
        </ul>
      </div>
    </>
  );
}
