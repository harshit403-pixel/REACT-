import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

let dispatch = useDispatch()

export let useProduct = (product)=>{
    dispatch(addToCart(product))
}