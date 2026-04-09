import { createRoot } from 'react-dom/client'
import './index.css'
import MainRoute from './routes/MainRoute.jsx'
import { ContextProvider } from './context/BlogPost.jsx'
import { UserProvider } from './context/BlogUser.jsx'

createRoot(document.getElementById('root')).render(

   <UserProvider>
   <ContextProvider>
      <MainRoute/>
   </ContextProvider>
   </UserProvider>

)
