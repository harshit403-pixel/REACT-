import React, { useCallback, useState } from 'react'
import About from './pages/About'

const App = () => {

  console.log("app rendring")

  const [count, setCount] = useState(0)

  // let greet = ()=>{
  //    console.log("hellooo bhayapoopp")   // this function will change its address wityh every rerender on app so about will also rerender

  // }

 // so we use calllabck

  let greet = useCallback(()=>{
    console.log("hellooo bhayapoopp")

  },[])

  // const [users, setUsers] = useState({
  //   name: "frhamn",
  //   id: 1,
  // })


  let heavyCalc = (()=>{         // this is useMemo and heavycalc will have 10 without even calling the func will not change its address with
    return 10 ;                // noe iske andar kuch bhuat hi jyada heavy ho and woh baar baar calculate ho it is not o so use useMemo 
  },[])


  return (
    <div>

      <h1 className='text-3xl'>
        {count}
      </h1>

      <button
      onClick={()=> setCount(count + 1) }
      className='bg-blue-700 px-5 py-2 mr-10' >
        click here
      </button>
      {/* <button
      onClick={()=> setUsers({...users , name:"polo"}) }
      className='bg-blue-700 px-5 py-2' >
        click here to change name
      </button> */}


      

      <About greet={greet} />
    </div>
  )
}

export default App
