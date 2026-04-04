import { createContext } from "react";
import { useState } from "react";

//consumer banadia hai to use karna padega provider ko
export let MyStore = createContext()


//provider banadia hai to use karna padega consumer ko
export let ContextProvider =({children})=>{

    const [count, setCount] = useState(0)


    // provider ke andar value pass karna padega taki consumer usko use kar sake
    return  <MyStore.Provider value={{count , setCount}} >

        {children}


    </MyStore.Provider>
}