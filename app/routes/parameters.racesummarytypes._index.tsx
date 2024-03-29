import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllRaceSummaryTypes,
  getRaceSummaryTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function RaceSummaryTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Race Summary Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getRaceSummaryTypesSearch(search);
  } else {
    codes = await getAllRaceSummaryTypes();
  }
  return { codes };
}
