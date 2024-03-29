import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllConditionsOfRaces,
  getConditionsOfRacesSearch,
} from "~/data/db.server";
import CommonTableExtended from "~/components/CommonTableExtended";

export default function ConditionsOfRaces() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  let columns = [
    {
      field: "code",
      headerName: "Code",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "condition",
      headerName: "Condition",
      flex: 1,
    },
  ];
  return (
    <>
      <CommonTableExtended
        name={"Conditions Of Races"}
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
    codes = await getConditionsOfRacesSearch(search);
  } else {
    codes = await getAllConditionsOfRaces();
  }
  return { codes };
}
