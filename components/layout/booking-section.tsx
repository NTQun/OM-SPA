import Image from "next/image";

export default function BookingSection() {
  return (
    <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/assets/background_testimonial.png"
        alt="booking"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#7a5117]/80"></div>

      <div className="relative z-10 max-w-[700px] px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Đặt lịch hẹn chữa lành
        </h2>

        <p className="text-white/80 text-sm md:text-base mb-8">
          Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ
          những điều nhỏ nhất và lan tỏa đến cả tâm hồn.
        </p>

        <button className="bg-white text-[#7a5117] px-6 py-2 text-sm font-medium hover:bg-white/90 transition">
          TRẢI NGHIỆM NGAY
        </button>
      </div>
    </section>
  );
}
