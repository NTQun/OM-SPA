"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { setCartFromApi } from "@/store/cart/cartSlice";
import { cartService } from "@/service/cart.service";
import CartPanel from "../card/cart-panel";
import { openCart } from "@/store/ui/uiSlice";
import BookingPanel from "../ui/booking-panel";
const nav = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Giới thiệu" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Dịch vụ");
  const [countCart, setCountCart] = useState(0);
  const dispatch = useAppDispatch();
  const getCart = async () => {
    const data = await cartService.getCartItems();
    setCountCart(data.length);
    dispatch(setCartFromApi(data));
  };

  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition  bg-[url('/assets/background_main.png')] bg-center bg-cover pt-5 md:px-10 lg:px-14",
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="absolute inset-0 bg-black/10 " />
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div className="justify-self-start text-white/70 text-sm tracking-[0.2em] uppercase">
            English
          </div>
          <div>
            {" "}
            <a
              href="#"
              className="flex items-center gap-[10px] justify-self-center"
            >
              <NextImage
                src="/assets/logo.png"
                alt="The OM Lounge"
                width={206}
                height={206}
                className="h-25 w-auto"
                priority
              />

              <div className="flex flex-col leading-none">
                <span className="text-white text-[24px] md:text-[34px]">
                  The OM
                </span>
                <span className="text-white tracking-[0.3em] text-[12px] md:text-[16px]">
                  LOUNGE
                </span>
              </div>
            </a>
          </div>

          <div className="justify-self-end b">
            <Button
              className="flex items-center gap-2 px-4 h-9 bg-[#824C08]"
              onClick={() => dispatch(openCart())}
            >
              <NextImage
                src="/icon/shopping_cart.svg"
                alt="shopping cart"
                width={20}
                height={20}
              />

              <span className=" uppercase tracking-[0.2em] text-white">
                Giỏ hàng
              </span>

              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black text-[10px] font-semibold">
                {countCart}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className=" border-white/10 pt-12">
        <div className="mx-auto flex h-12 w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={cn(
                  "relative transition hover:text-white mx-2 text-2xl",
                  activeNav === item.label && "text-yellow-500"
                )}
              >
                {item.label}

                {activeNav === item.label && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-6 rounded-full " />
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="sm:h-20 md:h-40 lg:h-100"></div>
      <div className="flex items-center justify-center gap-2 py-4">
        <h1 className="text-6xl font-bold antialiased">DỊCH VỤ</h1>
      </div>
      <CartPanel />
      <BookingPanel />
    </header>
  );
}
