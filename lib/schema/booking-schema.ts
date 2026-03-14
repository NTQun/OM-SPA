import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(1, "Tên phải có ít nhất 2 ký tự"),

  phone: z.string().regex(/^(0|\+84)[0-9]{9}$/, "Số điện thoại không hợp lệ"),

  day: z.string(),

  time: z.string().min(1, "Vui lòng chọn giờ"),
});

export type BookingForm = z.infer<typeof bookingSchema>;
