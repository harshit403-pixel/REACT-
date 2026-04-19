import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const CartProducts = ({product}) => {

    let {cartItems} = useSelector((store)=> store.cart)
    console.log(cartItems.length)

    if(cartItems.length < 1 ) return <h1 className='text-8xl' >No Items here</h1>
    else{
  return (
    <div className='grid grid-cols-4'>  
    
         {cartItems.map((elem)=>{
            return <ProductCard key={elem.id} product={elem} quantity={elem.quantity} />

    })}
    </div>
 
  )}
}

export default CartProducts
