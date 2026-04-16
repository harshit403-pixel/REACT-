import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './features/counterSlice'

const App = () => {
  const [number, setNumber] = useState(0)
  let dispatch = useDispatch()
  let {count} = useSelector((store)=> store.count)
  console.log(count)
    return (
    <div>
      <h1>count is -- {count}</h1>
      <input onChange={(e)=>setNumber(e.target.value)} className='bg-gray-200 ml-10' type="text" placeholder='Enter you Number' />
      <button
      onClick={()=>{
        dispatch(incrementByValue(number))
      }}
      className='bg-blue-600 text-white '>Add in state</button>
      
      <button  className='bg-gray-200 ml-10'
      onClick={()=>{
        dispatch(increment())
      }}
      >increment</button>
      <button className='bg-gray-200 ml-10'
      onClick={()=>{
        dispatch(decrement())
      }}
      >decrement</button>
    </div>
  )
}

export default App
