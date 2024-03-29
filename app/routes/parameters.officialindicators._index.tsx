import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllOfficialIndicators,
  getOfficialIndicatorsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function OfficialIndicators() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Official Indicators"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getOfficialIndicatorsSearch(search);
  } else {
    codes = await getAllOfficialIndicators();
  }
  return { codes };
}
