import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllDistances, getDistancesSearch } from "~/data/db.server";
import CommonTableExtended from "~/components/CommonTableExtended";

export default function Distances() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  let columns = [
    {
      field: "distance",
      headerName: "Distance",
      flex: 1,
    },
    {
      field: "distance_unit",
      headerName: "Distance Unit",
      flex: 1,
    },
    {
      field: "about",
      headerName: "About",
      flex: 1,
    },
    {
      field: "long_description",
      headerName: "About",
      flex: 1,
    },
    {
      field: "published_value",
      headerName: "Published Value",
      flex: 1,
    },
  ];
  return (
    <>
      <CommonTableExtended
        name={"Distances"}
        rows={codes}
        params={params}
        columns={columns}
      />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getDistancesSearch(search);
  } else {
    codes = await getAllDistances();
    console.log(codes);
  }
  return { codes };
}
