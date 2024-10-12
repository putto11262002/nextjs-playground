"use client";
import { dayjs } from "@/lib/utils";
export default function ClientDate({ date }: { date: string }) {
  console.log("Client Date", date, dayjs(date));
  return (
    <div>
      <h2>Client Date</h2>
      <p>dayjs(date).format(): {dayjs(date).format()}</p>
      <p>
        dayjs(date).utc().format()
        {dayjs(date).utc().format()}
      </p>
      <p>infered cleint timezone (dayjs): {dayjs.tz.guess()}</p>

      <p>
        Infered client timezone:
        {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </p>
    </div>
  );
}
