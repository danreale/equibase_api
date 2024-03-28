import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllAttendanceTypes,
  getAttendanceTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function AttendanceTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Attendance Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getAttendanceTypesSearch(search);
  } else {
    codes = await getAllAttendanceTypes();
  }
  return { codes };
}
