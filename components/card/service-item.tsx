import { useAppDispatch } from "@/store/hooks";
import { Button } from "../ui/button";
import { addItem } from "@/store/cart/cartSlice";

type serviceItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration?: number;
  image: string;
};
export default function ServiceItem({
  id,
  name,
  price,
  description,
  duration,
  image,
}: serviceItem) {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    console.log(id, name, price, duration, image);
  };
  return (
    <div className="flex justify-between items-start border-b border-white/10 py-4">
      <div>
        <p className="text-white text-2xl font-medium">{name}</p>

        <p className="text-white/50 text-base mt-1 max-w-[240px]">
          {description}
        </p>

        <p className="text-white/80 text-xl mt-2">
          {price.toLocaleString()} <span className="text-sm px-0">k</span>
        </p>
      </div>

      <Button
        className="text-white/60 hover:text-white text-xl"
        onClick={addToCart}
      >
        +
      </Button>
    </div>
  );
}
