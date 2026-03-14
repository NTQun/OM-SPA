import NextImage from "next/image";
import ServiceItem from "../card/service-item";
export default function ServiceSection({ title, items, image, reverse }: any) {
  return (
    <section className="py-20">
      <div className="w-full px-4 grid md:grid-cols-2 gap-16 items-start">
        {!reverse && (
          <NextImage
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[420px] object-cover"
          />
        )}

        <div className="h-[420px] flex flex-col">
          <h2 className="md:text-2xl lg:text-4xl mb-6 text-white font-light">
            {title}
          </h2>

          <div className="flex-1 overflow-y-auto pr-3 hide-scrollbar">
            {items.map((item: any, i: number) => (
              <ServiceItem
                key={i}
                id={item.id}
                image={item.image}
                duration={item.duration}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {reverse && (
          <NextImage
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[420px] object-cover"
          />
        )}
      </div>
    </section>
  );
}
