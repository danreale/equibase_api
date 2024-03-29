import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllMargins, getMarginsSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function Margins() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Margins"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getMarginsSearch(search);
  } else {
    codes = await getAllMargins();
  }
  return { codes };
}
