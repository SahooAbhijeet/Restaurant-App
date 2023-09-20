import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import authSlice from "./Slices/AuthSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth: authSlice,
    },
    devTools: true
});

export default store;