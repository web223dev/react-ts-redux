import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// let name = 'Max';
// type N = typeof name;

export type AppDispatch = typeof store.dispatch;
