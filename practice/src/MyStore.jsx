import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice"

export let store = configureStore({
    reducer:{
        count:counterReducer
    }
})