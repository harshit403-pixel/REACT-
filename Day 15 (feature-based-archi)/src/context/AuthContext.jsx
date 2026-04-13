import { createContext, useEffect, useState } from "react";
import { storage } from "../shared/utils/LocalStorage";


export let Auth = createContext()

export let AuthContextProvider = ({children})=>{

    const [registeredAdmins, setRegisteredAdmins] = useState([])
    const [loggedInAdmins, setLoggedInAdmins] = useState(null)

    console.log("reg adminss ---> ", registeredAdmins)
    console.log("loggedin adminss ---> ", loggedInAdmins)

    useEffect(()=>{
    
        let data = storage.get("reg admins")

        
        setRegisteredAdmins(data? data : [] )

        let ldata = storage.get("log admins")
        setLoggedInAdmins(ldata)
    },[])

    return <Auth.Provider value={{setLoggedInAdmins,setRegisteredAdmins, loggedInAdmins, registeredAdmins }} >
        {children}

    </Auth.Provider>

}
