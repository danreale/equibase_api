import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAgeRestrictionsSearch,
  getAllAgeRestrictions,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function AgeRestrictions() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Age Restrictions"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getAgeRestrictionsSearch(search);
  } else {
    codes = await getAllAgeRestrictions();
  }
  return { codes };
}
