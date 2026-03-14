import Image from "next/image";
import { testimonials } from "@/data/testimanial.data";
import ReviewCard from "../card/review-card";

export default function TestimonialSection() {
  return (
    <section className="relative py-28 text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/background_testimonial.png"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#7a5117]/70"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <p className="text-center tracking-[4px] text-sm mb-3">NHẬN XÉT TỪ</p>

        <h2 className="text-center text-5xl font-light mb-16">Khách Hàng</h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {testimonials.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          <span className="w-2 h-2 bg-white/40 rounded-full"></span>
          <span className="w-3 h-3 border border-white rounded-full"></span>
          <span className="w-2 h-2 bg-white/40 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
