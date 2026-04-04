import React from 'react'
import { useContext } from 'react'  
import { MyStore } from '../context/MyContext'

const Dashboard = () => {

    // as you can see mnaine yeh values ise prop drill nahi kri kahi se bhi but i can use these4 anywhere under my app bc woh provider se wrapped hai  
    let {count, setCount} = useContext(MyStore)
    
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1 className='text-9xl'>{count}</h1>
      <button
      onClick={()=>{
        setCount(count + 1 )
      }}
      className='bg-blue-500 text-white px-4 py-2 rounded active:scale-95 cursor-pointer'  >Increment</button>
    </div>
  )
}

export default Dashboard
