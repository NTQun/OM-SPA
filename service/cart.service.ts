import { cartItems } from "@/data/cart.data";

export const getCartItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartItems);
    }, 500);
  });
};
