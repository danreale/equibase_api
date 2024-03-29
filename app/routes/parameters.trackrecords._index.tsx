import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllTrackRecords, getTrackRecordsSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function TrackRecords() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Track Records"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getTrackRecordsSearch(search);
  } else {
    codes = await getAllTrackRecords();
  }
  return { codes };
}
