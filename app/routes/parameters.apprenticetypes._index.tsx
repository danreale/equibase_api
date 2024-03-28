import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllApprenticeTypes,
  getApprenticeTypesSearch,
} from "~/data/db.server";
import CommonTableExtended from "~/components/CommonTableExtended";

export default function ApprenticeTypes() {
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
  ];
  return (
    <>
      <CommonTableExtended
        name={"Apprentice Types"}
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
    codes = await getApprenticeTypesSearch(search);
  } else {
    codes = await getAllApprenticeTypes();
  }
  return { codes };
}
