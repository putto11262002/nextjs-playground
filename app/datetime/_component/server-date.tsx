import { dayjs } from "@/lib/utils";
export default function ServerDate({ date }: { date: string }) {
  console.log("Server Date", date, dayjs(date));
  return (
    <div>
      <h2>Server Date</h2>
      <p>dayjs(date).format(): {dayjs(date).format()}</p>
      <p>
        dayjs(date).utc().format()
        {dayjs(date).utc().format()}
      </p>
      <p>guess timezone: {dayjs.tz.guess()}</p>
    </div>
  );
}
