import { getIp, getIpGeo } from "@/lib/get-ip-geo";
import { dayjs } from "@/lib/utils";
import ClientDate from "./_component/client-date";
import ServerDate from "./_component/server-date";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Page() {
  const date = new Date().toISOString();
  const headerList = await headers();
  const ip = await getIp(headerList);
  const geo = await getIpGeo(ip);
  console.log("Page Date", date);
  return (
    <div className="grid gap-4 p-4">
      <ClientDate date={date} />
      <ServerDate date={date} />
      <div>
        <h2>Geo IP</h2>
        <p>IP: {ip}</p>
        <p>timezone: {geo?.timezone}</p>
        <p>
          Infered client now base on geo: {dayjs().tz(geo?.timezone).format()}
        </p>
      </div>
    </div>
  );
}
