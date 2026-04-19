import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQauntity, removeFromCart } from "../features/cartSlice";
import { useLocation } from "react-router";

const ProductCard = ({ product, quantity }) => {

  let {pathname} = useLocation() 

  let dispatch = useDispatch()
  
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-white p-4 hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="w-full h-60 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        
        {/* Category */}
        <p className="text-sm text-gray-500 capitalize">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-medium">
            ⭐ {product.rating.rate}
          </span>
          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>
{pathname === "/cart" ? 
  <p>Cart Qty: {quantity}</p> 
  : 
  ""
}

        
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          {pathname === "/cart"?
        <button
          onClick={()=> dispatch(removeFromCart(product.id))}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Remove from cart
          </button> :
          quantity? 
          <div className="flex items-center gap-2">
  <button
  onClick={()=> dispatch(decrementQauntity(product))}
   className="px-3 py-1 bg-gray-300">-</button>
  <span>{quantity}</span>
  <button
  onClick={()=> dispatch(addToCart(product))}
  className="px-3 py-1 bg-gray-300">+</button>
</div>:   <button
          onClick={()=> dispatch(addToCart(product))}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Add to card
          </button>
        }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;