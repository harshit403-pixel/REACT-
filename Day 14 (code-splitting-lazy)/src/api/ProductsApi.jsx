import axios from "axios"

 export   let fetchProducts  = async()=>{
        let res = await axios.get('https://dummyjson.com/products')
        console.log(res.data.products)
        return res
    }