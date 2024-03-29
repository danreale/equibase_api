import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllPeopleSources, getPeopleSourcesSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function PeopleSources() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"People Sources"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getPeopleSourcesSearch(search);
  } else {
    codes = await getAllPeopleSources();
  }
  return { codes };
}
