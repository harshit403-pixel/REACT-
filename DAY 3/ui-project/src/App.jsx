import React from 'react'
import Component from "./Components/Component";
import Products from "./products/product"
 
const App = () => {
  return (
    <div className='main'>
      <h1>
       OUR PRODUCTS
      </h1>

      <div className="products">
              <Component product = {Products} />

      </div>



    </div>
  )
}

export default App 