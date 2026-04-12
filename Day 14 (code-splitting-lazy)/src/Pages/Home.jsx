import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { fetchProducts } from '../api/ProductsApi'
import { useProducts } from '../hooks/UseProducts'




const Home = () => {


let {data} = useProducts()
   

  return (
    <div>
      thsi is i home page
    </div>
  )
}

export default Home
