import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  let {count } = useSelector((state) => state.count)
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App
