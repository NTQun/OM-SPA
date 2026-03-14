"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeSuccess } from "@/store/ui/uiSlice";
import NextImage from "next/image";
import { useLockBodyScroll } from "@/hook/use-block-scroll";
export default function BookingSuccessModal() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.ui.successOpen);
  useLockBodyScroll(open);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative w-[450px] bg-[#E9E4DC] p-10 text-center shadow-xl">
        <button
          onClick={() => dispatch(closeSuccess())}
          className="absolute top-3 right-6 text-2xl text-gray-500"
        >
          ×
        </button>

        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#E6DCC7]">
            <div className="relative flex items-center justify-center w-20 h-20">
              <div className="absolute w-20 h-20 rounded-full bg-[#E6DCC7]"></div>

              <div className="absolute w-14 h-14 rounded-full bg-[#D9CBAE]"></div>

              <NextImage
                src="/icon/icon-send.png"
                alt="send"
                width={28}
                height={28}
                className="relative z-10"
              />

              <div className="absolute -bottom-1 -right-1 z-20 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <NextImage
                  src="/icon/icon-success.png"
                  alt="success"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-medium text-gray-700 mb-4">
          Gửi Yêu Cầu Thành Công!
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
          thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
      </div>
    </div>
  );
}
