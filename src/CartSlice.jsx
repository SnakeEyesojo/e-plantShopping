import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Lista de productos en el carrito
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.name === action.payload.name);
      if (itemIndex >= 0) {
        // Si el producto ya está en el carrito, aumentar cantidad
        state.items[itemIndex].quantity += 1;
      } else {
        // Si es un nuevo producto, agregarlo con cantidad 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
