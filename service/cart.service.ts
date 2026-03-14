import { cartItems } from "@/data/cart.data";
import { CartResponse } from "../type/cart.type";

export const cartService = {
  getCartItems(): Promise<CartResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cartItems);
      }, 500);
    });
  },
};
