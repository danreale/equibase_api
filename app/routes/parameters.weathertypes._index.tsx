import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllWeatherTypes, getWeatherTypesSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function WeatherTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Weather Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getWeatherTypesSearch(search);
  } else {
    codes = await getAllWeatherTypes();
  }
  return { codes };
}
