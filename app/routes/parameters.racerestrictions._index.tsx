import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllRaceRestrictions,
  getRaceRestrictionsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function RaceRestrictions() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Race Restrictions"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getRaceRestrictionsSearch(search);
  } else {
    codes = await getAllRaceRestrictions();
  }
  return { codes };
}
