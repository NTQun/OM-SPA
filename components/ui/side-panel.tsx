"use client";

import { useLockBodyScroll } from "@/hook/use-block-scroll";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function SidePanel({
  open,
  onClose,
  title,
  children,
  footer,
}: Props) {
  useLockBodyScroll(open);

  return (
    <>
      {open && (
        <div onClick={onClose} className="fixed inset-0 bg-black/20 z-40" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[360px] sm:w-[400px] bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* header */}
        <div className="relative flex justify-center py-5 border-b border-[#d9d2c7]">
          <h2 className="text-xl text-[#824C08] font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="absolute left-6 text-xl text-gray-500"
          >
            ×
          </button>
        </div>

        {/* body */}
        <div className="flex flex-col h-[calc(100%-64px)]">
          <div className="flex-1 overflow-y-auto">{children}</div>

          {footer && (
            <div className="border-t border-[#d9d2c7] p-6">{footer}</div>
          )}
        </div>
      </div>
    </>
  );
}
