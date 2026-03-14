"use client";
import { useState } from "react";
import { services } from "@/data/service.data";
import ServiceSection from "@/components/layout/service-section";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import TestimonialSection from "@/components/layout/testimonial-section";
import CartPanel from "@/components/card/cart-panel";

const nav = [
  { label: "GÓI COMBO", value: "combo" },
  { label: "MEDICURE", value: "medicure" },
  { label: "PEDICURE", value: "pedicure" },
  { label: "HIỆU ỨNG", value: "effect" },
];

export default function ServicePage() {
  const [activeNav, setActiveNav] = useState("Dịch vụ");

  return (
    <main className="relative min-h-screen bg-[url('/assets/background_service.png')] bg-center bg-cover text-white pt-10 md:px-10 lg:px-14">
      {/* Brown overlay */}
      <div className="absolute inset-0 bg-[#7a5117]/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex">
          <nav className="hidden md:flex items-center text-white/70">
            {nav.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <div
                  onClick={() => setActiveNav(item.label)}
                  className={cn(
                    "relative px-4 text-2xl transition hover:text-white cursor-pointer",
                    activeNav === item.label && "text-yellow-500"
                  )}
                >
                  {item.label}

                  {activeNav === item.label && (
                    <span className="absolute left-0 right-0 -bottom-2 mx-auto h-[2px] w-6 bg-yellow-500 rounded-full" />
                  )}
                </div>

                {index !== nav.length - 1 && (
                  <span className="text-white/40 text-2xl">|</span>
                )}
              </div>
            ))}
          </nav>

          <div className="relative w-[260px] ml-auto">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full bg-transparent border-b px-4 py-2 pr-10 text-white placeholder-white/60 focus:outline-none"
            />

            <NextImage
              src="/icon/search.svg"
              alt="search"
              width={24}
              height={24}
              className="absolute right-2 top-2"
            />
          </div>
        </div>

        <div className="py-24">
          {services.map((section, index) => (
            <ServiceSection
              key={section.id}
              title={section.title}
              items={section.items}
              image={section.image}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
