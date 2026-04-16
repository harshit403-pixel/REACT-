import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name:"counter",
    initialState:{
        count : 12                   //this is the state to changhe for that we make reducers jo ki hold karega actions
    },
    reducers:{
        increment: (state)=>{          // action (state) this is the initial state object state = initial state
            state.count += 1
        },           
        decrement: (state)=>{
            state.count -= 1
        },
        incrementByValue:(state, action)=>{
            state.count += Number(action.payload)

        }
    }

})

export let {increment, decrement, incrementByValue} = counterSlice.actions
export default counterSlice.reducer
