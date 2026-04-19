import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/AxiosInstace'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {

    const [products, setProducts] = useState([])
    let {cartItems}= useSelector((store)=> store.cart)
    useEffect(()=>{
        (
            async()=>{
                try {
                    let res = await axiosInstance.get('/products')
                    setProducts(res.data)
                   
                } catch (error) {
                    console.log("error in api ")
                }
            }
        )()
    },[])

  return (
    <div className='grid grid-cols-4 gap-3 '>
      {
        products.map((elem)=>{

            let cartItem = cartItems.find((val)=> val.id === elem.id )


            return <ProductCard key={elem.id} product={elem} quantity={cartItem?.quantity} />
        })
      }
    </div>
  )
}

export default Shop
