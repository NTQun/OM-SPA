"use client";

import SidePanel from "@/components/ui/side-panel";
import { RootState } from "@/store";
import { closeBooking, openSuccess } from "@/store/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./button";
import { bookingTimes, generateBookingDays } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { bookingSchema, BookingForm } from "@/lib/schema/booking-schema";

export default function BookingPanel() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.bookingOpen);

  const days = generateBookingDays(14);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      day: "",
      time: "",
    },
  });

  const selectedDay = watch("day");
  const selectedTime = watch("time");

  const onSubmit = (data: BookingForm) => {
    localStorage.setItem("booking", JSON.stringify(data));
    dispatch(closeBooking());
    dispatch(openSuccess());
    setValue("day", "");
    setValue("time", "");
  };

  const onClose = () => {
    dispatch(closeBooking());
  };

  return (
    <SidePanel open={isOpen} onClose={onClose} title="Xác Nhận Đặt Lịch">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          <div>
            <p className="text-sm text-gray-500 mb-1">Tên khách hàng</p>

            <input
              {...register("name")}
              placeholder="Nhập tên"
              className="w-full border-b py-2 outline-none bg-transparent text-black"
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Số điện thoại</p>

            <input
              {...register("phone")}
              placeholder="Nhập số điện thoại"
              className="w-full border-b py-2 outline-none bg-transparent text-black"
            />

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm mb-3 text-black">Chọn ngày</p>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {days.map((t, i) => (
                <Button
                  key={i}
                  type="button"
                  onClick={() => setValue("day", t.date)}
                  className={`flex flex-col items-center justify-center h-[44px] min-w-[80px] border text-sm shrink-0
      ${
        selectedDay === t.date
          ? "bg-[#B97A50] text-white border-[#B97A50]"
          : "bg-[#E5E3DC]"
      }`}
                >
                  <span className="leading-none">{t.label}</span>
                  <span className="text-[10px] leading-none">{t.date}</span>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm mb-3  text-black">Chọn khung giờ</p>

            <div className="grid grid-cols-4 gap-3">
              {bookingTimes.map((t) => (
                <button
                  type="button"
                  key={t.time}
                  onClick={() => setValue("time", t.time)}
                  className={`flex flex-col items-center py-3 border text-sm
                  ${
                    selectedTime === t.time
                      ? "bg-[#B97A50] text-white border-[#B97A50]"
                      : "bg-[#E5E3DC]"
                  }`}
                >
                  <span>{t.time}</span>
                  <span className="text-xs">{t.period}</span>
                </button>
              ))}
            </div>

            {errors.time && (
              <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-[#d9d2c7]">
          <Button
            type="submit"
            className="w-full bg-[#824C08] text-white py-4 flex justify-between px-6"
          >
            Đặt Lịch <span>→</span>
          </Button>
        </div>
      </form>
    </SidePanel>
  );
}
