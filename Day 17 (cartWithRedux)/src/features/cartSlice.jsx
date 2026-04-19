import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {

            let {id } = action.payload

            let isExist = state.cartItems.find((elem)=> elem.id === id )

            if(isExist){
                isExist.quantity +=1
            }
            else{
                state.cartItems.push({...action.payload, quantity:1} )

            }


        },
        decrementQauntity:(state,action)=>{
            let item = state.cartItems.find((elem)=> elem.id === action.payload.id)

            if(item.quantity > 1 ){
                item.quantity -= 1
            }
            else{
                 state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            )
            }
        },


        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
    }
})


export default cartSlice.reducer

export let { addToCart, removeFromCart, decrementQauntity } = cartSlice.actions