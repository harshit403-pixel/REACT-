import React from 'react'
import Navbar from './Components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='h-screen w-screen'>
     <Navbar />
     <AppRoutes/>
    </div>
  )
}

export default App
