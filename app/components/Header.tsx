import { Link } from "@remix-run/react";
import { GiHorseshoe } from "react-icons/gi";

export default function Header({}) {
  return (
    <>
      <div className="flex justify-center text-center py-5 items-center">
        <Link to="/">
          <h1 className="text-4xl py-2">Equibase</h1>
        </Link>
        <GiHorseshoe size={42} />
      </div>
    </>
  );
}
