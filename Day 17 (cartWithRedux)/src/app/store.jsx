import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice"
export let Store = configureStore({
    reducer:{
        cart : cartReducer
    }
})