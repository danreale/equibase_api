import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllCourseTypes, getCourseTypesSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function CourseTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Course Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getCourseTypesSearch(search);
  } else {
    codes = await getAllCourseTypes();
  }
  return { codes };
}
