import { BookingDay } from "@/type/booking-date.type";

type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

const weekdayMap = [
  "Chủ Nhật",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

export function generateBookingDays(days = 14): BookingDay[] {
  const result: BookingDay[] = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);

    const weekday = weekdayMap[d.getDay()];
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");

    result.push({
      label: weekday,
      date: `${day}/${month}`,
      fullDate: d,
    });
  }

  return result;
}
export const bookingTimes = [
  { time: "09:00", period: "AM" },
  { time: "09:30", period: "AM" },
  { time: "10:00", period: "AM" },
  { time: "10:30", period: "AM" },
  { time: "11:00", period: "AM" },
  { time: "11:30", period: "AM" },

  { time: "12:00", period: "PM" },
  { time: "12:30", period: "PM" },

  { time: "01:00", period: "PM" },
  { time: "01:30", period: "PM" },

  { time: "02:00", period: "PM" },
  { time: "02:30", period: "PM" },

  { time: "03:00", period: "PM" },
  { time: "03:30", period: "PM" },

  { time: "04:00", period: "PM" },
  { time: "04:30", period: "PM" },

  { time: "05:00", period: "PM" },
  { time: "05:30", period: "PM" },

  { time: "06:00", period: "PM" },
  { time: "06:30", period: "PM" },
];
