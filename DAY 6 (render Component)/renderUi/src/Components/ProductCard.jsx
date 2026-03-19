import React from 'react'

const ProductCard = ({product, deleteProduct}) => {

  return (

    <div className='bg-white w-55 h-90 border-2 rounded-xl flex flex-col p-3 gap-4 shrink-0'> 
      <div className='w-full h-[60%] rounded-xl overflow-hidden'>
        <img className='w-full h-full object-cover' src={product.image} alt="" />
      </div>
      <div className='text-sm flex flex-col gap-1'>
        <p>{product.title}</p> 
        <p className='text-2xl font-bold text-green-700'>$ {product.price}</p>
        <p>Category - {product.category}</p>
      </div>
      <button onClick={()=>{
            deleteProduct(product.id)
      }} className='bg-red-700 py-2 text-white rounded-xl cursor-pointer active:scale-98'>Remove</button>
    </div>
  )
}

export default ProductCard
