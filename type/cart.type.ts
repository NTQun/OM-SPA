export interface CartChildItem {
  price?: number;
  id: number;
  name: string;
  value: string;
  quantity: number;
  image?: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  duration?: number;
  image: string;
  quantity: number;
  children?: CartChildItem[];
}

export interface CartState {
  isOpen: boolean;
  items: CartItem[];
}
