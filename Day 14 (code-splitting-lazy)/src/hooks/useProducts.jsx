import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/ProductsApi"

export let useProducts = ()=>{
return  useQuery({
        queryKey:['products'],
        queryFn: fetchProducts ,
        staleTime: Infinity

    })
}