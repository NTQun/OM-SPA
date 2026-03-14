"use client";

import NextImage from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 bg-[#291E0A] overflow-hidden  md:px-10 lg:px-14">
      <div className=" py-4">
        <div className="absolute -right-6 -top-2">
          <NextImage
            src="/assets/flower.png"
            alt="Hoa trang trí"
            width={160}
            height={160}
            className="pointer-events-none select-none rotate-[165deg] opacity-75"
            style={{ transform: "rotate(165deg)" }}
            priority
          />
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="flex items-start gap-[10px] md:w-[45%]">
            <NextImage
              src="/assets/logo.png"
              alt="The OM Lounge"
              width={206}
              height={206}
              className="h-14 w-auto"
              priority
              loading="eager"
            />
            <div className=" text-center leading-none font-mtdalatsans h-full flex flex-col gap-1 md:gap-2">
              <div className="text-white truncate text-[24px] md:text-[36px]">
                The OM
              </div>
              <div className="text-white tracking-wide text-[12px] md:text-[18px]">
                LOUNGE
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-12 md:gap-[96px]">
              <div>
                <div className="flex items-center gap-3 text-[#B19879] text-[14px] mb-8">
                  <div className="flex gap-1">
                    <span className="size-2 bg-[#B19879] rounded-full" />
                    <span className="size-2 rounded-full border border-[#B19879]" />
                  </div>
                  <span>Sitemap</span>
                </div>
                <div className="flex flex-col gap-4 font-mtdalatsans text-[28px] leading-[120%] tracking-[-0.02em] text-brand-100">
                  <Link
                    href="#home"
                    className="block transition hover:text-[#caa15a]"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    href="#about"
                    className="block transition hover:text-[#caa15a]"
                  >
                    Giới thiệu
                  </Link>
                  <Link
                    href="#services"
                    className="block transition hover:text-[#caa15a]"
                  >
                    Dịch vụ
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[#B19879] text-[14px] mb-8">
                  <div className="flex gap-1">
                    <span className="size-2 bg-[#B19879] rounded-full" />
                    <span className="size-2 rounded-full border border-[#B19879]" />
                  </div>
                  <span>Liên hệ</span>
                </div>
                <div className="flex flex-col gap-4 font-mtdalatsans- text-[14px] leading-[120%] tracking-[-0.02em] text-brand-100">
                  <p> ++84 89 812 12 97</p>
                  <p className="mt-2 min-w-[208px]">
                    {" "}
                    6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh (gần Crescent
                    Mall)
                  </p>
                  <div className="mt-2 grid grid-cols-2 text-brand-100 w-60.75">
                    <p className="truncate">Thứ 2 - Thứ 6:</p>
                    <p> 9:00 - 19:00</p>
                    <p className="truncate">Thứ 7 - Chủ nhật:</p>
                    <p> 9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-[14px] mb-8 mt-12">
                <div className="flex flex-col gap-4 font-mtdalatsans text-[28px] leading-[120%] tracking-[-0.02em] text-brand-100">
                  <Link
                    href="#blog"
                    className="block transition hover:text-[#caa15a]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#contact"
                    className="block transition hover:text-[#caa15a]"
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>
              <div className="hidden md:block mt-[142px] relative w-fit">
                <div className="relative flex h-[160px] w-[300px] items-center justify-center">
                  <svg className="absolute inset-0" viewBox="0 0 300 160">
                    <ellipse
                      cx="150"
                      cy="80"
                      rx="140"
                      ry="60"
                      stroke="#caa15a"
                      strokeWidth="1"
                      fill="none"
                      transform="rotate(165 150 80)"
                    />
                  </svg>

                  <button className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#caa15a]">
                    Đặt lịch ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row">
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com"
            className="flex items-center gap-2 transition hover:text-[#caa15a]"
          >
            <NextImage
              src="icon/facebook.svg"
              alt="Facebook"
              width={18}
              height={18}
            />
          </Link>
          <Link
            href="https://www.tiktok.com"
            className="flex items-center gap-2 transition hover:text-[#caa15a]"
          >
            <NextImage
              src="icon/tiktok.svg"
              alt="TikTok"
              width={18}
              height={18}
            />
          </Link>
          <Link
            href="https://zalo.me"
            className="flex items-center gap-2 transition hover:text-[#caa15a]"
          >
            <NextImage src="icon/zalo.svg" alt="Zalo" width={18} height={18} />
          </Link>
        </div>
        <div className="text-center md:text-right">
          © 2025 — Bản quyền The OM Lounge. Đã đăng ký mọi quyền.
        </div>
      </div>
    </footer>
  );
}
