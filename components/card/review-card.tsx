import Image from "next/image";

export default function ReviewCard({ item }: any) {
    return (
        <div className="text-white max-w-[320px]">

            <div className="relative mb-6">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={320}
                    height={400}
                    className="object-cover w-full h-[400px]"
                />

                <span className="absolute bottom-3 right-4 text-yellow-300 text-5xl">
                    ”
                </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
                <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                />

                <h4 className="font-semibold text-lg">{item.name}</h4>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
                {item.content}
            </p>

            <button className="text-white/70 text-sm underline mt-2">
                Xem thêm
            </button>

        </div>
    );
}