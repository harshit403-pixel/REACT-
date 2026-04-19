import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/CounterSlice'

const App = () => {
  
  let dispatch = useDispatch()
  let {defaultValue} = useSelector((store)=> store.count)


  return (
    <div>
      <h1>{defaultValue}</h1>
      <button
      onClick={()=>{dispatch(increment())} }
      >Increment</button>
      <button
      onClick={()=>{dispatch(decrement())} }
      >Decrement</button>
      <button
      onClick={()=>{dispatch(incrementByAmount(5))}}
      >
      Increment By 5
      </button>
    </div>
  )
}

export default App
