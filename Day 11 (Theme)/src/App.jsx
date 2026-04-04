import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className='h-screen w-screen bg-white'>

      <Navbar />
      <Card />
    </div>
  )
}

export default App
