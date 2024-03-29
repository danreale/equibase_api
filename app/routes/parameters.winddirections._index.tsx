import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllWindDirections,
  getWindDirectionsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function WindDirections() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Wind Directions"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getWindDirectionsSearch(search);
  } else {
    codes = await getAllWindDirections();
  }
  return { codes };
}
