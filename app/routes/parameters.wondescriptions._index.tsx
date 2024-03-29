import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllWonDescriptions,
  getWonDescriptionsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function WonDescriptions() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Won Descriptions"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getWonDescriptionsSearch(search);
  } else {
    codes = await getAllWonDescriptions();
  }
  return { codes };
}
