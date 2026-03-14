import { cartItems } from "@/data/cart.data";
import { CartChildItem } from "@/type/cart.type";
interface CartResponse {
  id: number;
  name: string;
  price: number;
  duration?: number;
  image: string;
  quantity: number;
  children?: CartChildItem[];
}
export const cartService = {
  getCartItems(): Promise<CartResponse[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cartItems);
      }, 500);
    });
  },
};
