import dayjs from "dayjs";

export default function GenerateDates(
  startDate: Date | string,
  endDate: Date,
  period: "day" | "year" | "month" = "month"
) {
  const ranges = [];
  let currentDate = dayjs(startDate);

  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
    currentDate = currentDate.add(1, period);
    ranges.push(currentDate.toISOString());
  }

  return ranges;
}
