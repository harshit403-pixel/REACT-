import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './Routes/AppRoute.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


let queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
 


  //ab pure app mai jitne bhi apis call honge data aayega sabki khabar is client ko hogi 

  <QueryClientProvider client={queryClient} >            
    <AppRoute/>
    </QueryClientProvider>

)
