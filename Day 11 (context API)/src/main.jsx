import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(

    // context provider ko wrap karna padega app ke around taki app ke andar context ka data use kar sake
    // yeh hai HOFC (High Order Function Component) jisme humne context provider banaya hai aur uske andar app ko wrap kiya hai taki app ke andar context ka data use kar sake
    // abhhi tak kuch subscribe nahi hua hai woh jaakr karna pdega
    
    <ContextProvider>               
        <App />       
    </ContextProvider>

)
