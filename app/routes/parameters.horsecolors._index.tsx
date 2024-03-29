import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllHorseColors, getHorseColorsSearch } from "~/data/db.server";
import CommonTableExtended from "~/components/CommonTableExtended";

export default function HorseColors() {
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
      field: "horse_type",
      headerName: "Horse Type",
      flex: 1,
    },
  ];
  return (
    <>
      <CommonTableExtended
        name={"Horse Colors"}
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
    codes = await getHorseColorsSearch(search);
  } else {
    codes = await getAllHorseColors();
  }
  return { codes };
}
