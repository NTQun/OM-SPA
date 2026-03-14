import { CartChildItem, CartItem } from "@/type/cart.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const exist = state.items.find((i) => i.id === action.payload.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          children: [],
          quantity: 1,
        });
      }
    },

    addChildItem: (
      state,
      action: PayloadAction<{
        parentId: number;
        child: CartChildItem;
      }>
    ) => {
      const parent = state.items.find((i) => i.id === action.payload.parentId);

      if (!parent) return;

      const existChild = parent.children?.find(
        (c) => c.id === action.payload.child.id
      );

      if (existChild) {
        existChild.quantity += 1;
      } else {
        parent.children?.push({
          ...action.payload.child,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    removeChildItem: (
      state,
      action: PayloadAction<{
        parentId: number;
        childId: number;
      }>
    ) => {
      const parent = state.items.find((i) => i.id === action.payload.parentId);

      if (!parent) return;

      parent.children =
        parent.children?.filter((c) => c.id !== action.payload.childId) || [];
    },

    increase: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity++;
    },

    decrease: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },

    increaseChild: (
      state,
      action: PayloadAction<{ parentId: number; childId: number }>
    ) => {
      const parent = state.items.find((i) => i.id === action.payload.parentId);

      const child = parent?.children?.find(
        (c) => c.id === action.payload.childId
      );

      if (child) child.quantity++;
    },

    decreaseChild: (
      state,
      action: PayloadAction<{ parentId: number; childId: number }>
    ) => {
      const parent = state.items.find((i) => i.id === action.payload.parentId);

      const child = parent?.children?.find(
        (c) => c.id === action.payload.childId
      );

      if (child && child.quantity > 1) child.quantity--;
    },

    clearCart: (state) => {
      state.items = [];
    },

    setCartFromApi: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  addItem,
  addChildItem,
  removeItem,
  removeChildItem,
  increase,
  decrease,
  increaseChild,
  decreaseChild,
  clearCart,
  setCartFromApi,
} = cartSlice.actions;

export default cartSlice.reducer;
