import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllTimingMethods, getTimingMethodsSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function TimingMethods() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Timing Methods"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getTimingMethodsSearch(search);
  } else {
    codes = await getAllTimingMethods();
  }
  return { codes };
}
