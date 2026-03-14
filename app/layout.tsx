import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { ToastProvider } from "@/hook/toast";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "./globals.css";
import TestimonialSection from "@/components/layout/testimonial-section";
import BookingSection from "@/components/layout/booking-section";
import Providers from "./provider";
import BookingSuccess from "@/components/card/booking-success";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: "OM Spa",
    template: "%s · OM Spa",
  },
  description:
    "Premium spa experience: services, pricing, reviews, and online booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          <ToastProvider>
            <Header />
            {children}
            <TestimonialSection />
            <BookingSection />
            <BookingSuccess />
            <Footer />
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
