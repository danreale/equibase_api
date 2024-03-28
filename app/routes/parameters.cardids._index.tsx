import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllCardIds, getCardIdsSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function CardIds() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Card Ids"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getCardIdsSearch(search);
  } else {
    codes = await getAllCardIds();
  }
  return { codes };
}
