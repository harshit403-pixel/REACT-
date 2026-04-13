import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/AppRoutes.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  
    <AuthContextProvider>
        <ToastContainer />
        <AppRoutes/>
    </AuthContextProvider>

)
