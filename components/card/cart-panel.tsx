"use client";

import { useDispatch, useSelector } from "react-redux";
import { closeCart, openBooking } from "@/store/ui/uiSlice";
import { RootState } from "@/store";
import CartItem from "@/components/card/cart-item";
import { useMemo } from "react";
import SidePanel from "@/components/ui/side-panel";

export default function CartPanel() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.cartOpen);
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }, [items]);

  const onClose = () => {
    dispatch(closeCart());
  };
  return (
    <>
      <SidePanel
        open={isOpen}
        onClose={onClose}
        title="Giỏ Hàng"
        footer={
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Tổng thanh toán</span>
              <span className="text-[#E53935] font-semibold">
                {totalPrice.toLocaleString()} đ
              </span>
            </div>

            <button
              className="w-full bg-[#824C08] text-white py-4 flex justify-between px-6"
              onClick={() => {
                dispatch(closeCart());

                setTimeout(() => {
                  dispatch(openBooking());
                }, 300); // bằng duration animation
              }}
            >
              Tiếp Tục
              <span>→</span>
            </button>
          </div>
        }
      >
        <div className="p-6">
          {items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </SidePanel>
    </>
  );
}
