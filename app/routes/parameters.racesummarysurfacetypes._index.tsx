import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllRaceSummarySurfaceTypes,
  getRaceSummarySurfaceTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function RaceSummarySurfaceTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable
        name={"Race Summary Surface Types"}
        rows={codes}
        params={params}
      />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getRaceSummarySurfaceTypesSearch(search);
  } else {
    codes = await getAllRaceSummarySurfaceTypes();
  }
  return { codes };
}
