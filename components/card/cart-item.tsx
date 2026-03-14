import { useAppDispatch } from "@/store/hooks";
import NextImage from "next/image";
import {
  removeItem,
  increaseChild,
  decreaseChild,
} from "@/store/cart/cartSlice";

export default function CartItem({ item }: any) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 py-5 border-b border-[#d9d2c7]">
      <NextImage
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="w-[80px] h-[80px] object-cover rounded flex-shrink-0"
      />

      <div className="flex-1">
        {/* title */}
        <div className="flex justify-between">
          <h3 className="font-semibold text-[#2c2c2c]">{item.name}</h3>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="text-gray-400 text-lg"
          >
            ×
          </button>
        </div>

        <div className="flex items-center justify-between mt-1">
          <p className="text-[#6c6c6c] text-sm">
            {item.price.toLocaleString()} đ
          </p>

          {item.duration && (
            <div className="text-xs text-gray-500 flex items-center gap-1">
              ⏱ {item.duration} phút
            </div>
          )}
        </div>
        {item.children?.map((child: any) => (
          <div key={child.id} className="flex items-center gap-3 mt-4">
            <NextImage
              src={child.image}
              alt={child.name}
              width={40}
              height={40}
              className="rounded"
            />

            <span className="flex-1 text-sm text-[#444]">
              {child.name}: <b>{child.value}</b>
            </span>

            <div className="flex items-center border border-[#bfb7ab] rounded-full px-3 py-1 gap-4">
              <button
                onClick={() =>
                  dispatch(
                    decreaseChild({
                      parentId: item.id,
                      childId: child.id,
                    })
                  )
                }
                className="text-lg text-gray-500"
              >
                −
              </button>

              <span className="text-sm text-black">{child.quantity}</span>

              <button
                onClick={() =>
                  dispatch(
                    increaseChild({
                      parentId: item.id,
                      childId: child.id,
                    })
                  )
                }
                className="text-lg text-gray-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
