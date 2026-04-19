import { createSlice } from "@reduxjs/toolkit";


let counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        defaultValue: 0
    },
    reducers: {
        increment: (state) => {
            state.defaultValue += 1
        },
        decrement: (state) => { state.defaultValue -= 1 },
        incrementByAmount: (state, action) => {
            state.defaultValue += action.payload
        }
    }
})

export default counterSlice.reducer
export let { increment, decrement, incrementByAmount } = counterSlice.actions