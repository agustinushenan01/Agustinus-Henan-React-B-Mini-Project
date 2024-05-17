import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import authReducer from './authReducer'; // Pastikan path-nya benar

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // Tambahkan reducer untuk otentikasi di sini
  },
});

export default store;
