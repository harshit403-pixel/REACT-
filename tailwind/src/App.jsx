import React, { useState } from 'react'

const App = () => {
 

  let [count , setCount] =useState({name: "harshit", age:90})
  //use state return karrha tha 2 valuesin aarray toh unko destructure akrdai turnt hi 

  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <h1 className='text-8xl  '>name is {count.name}</h1>

      <h1 className='text-8xl  '>age is {count.age}</h1>

      <button onClick = {()=>{
        setCount({...count , name: "kokeok", age:800 }) 
        // ++pre increment hi lagega bcz click karte hi chlana hai
      }} className='py-2 px-6 cursor-pointer bg-blue-400 text-sm rounded-sm text-white' >Increment count</button>


    </div>
  )
}

export default App

// on click is like addevent listener
// [[btn.addeventlistener(click,]]- [itna part toh onClick likhkr define hogya] [[()=>{}]]- [yeh func] - bas ab uske andar pass kardo)


//  useState(pehli value state banegi jo ki arguments se milegi, second value mai function lega setFunction joki state ki value ko change karega  )

// use state ke do kaam hote hai = return karti hai 2 cheeze state chnage and ui render


//agar do setfunction call karrhe hai toh niiche wal hi priorite hoga jo niiche woh hi baad mai chalega


// setfunction ke kaam = 
// 1 State Update
// 2 our component re render
// 3 Batching :: jitne bhi setfunc honge sbka que banega and last wala chl jaega

//4 point explaination ::::::
// 4 has similar value == toh == no rerender jus like (prev value ==== new value)

// but use state(0) hai and niiche appnnne call kia 

// 0 === 0
// setCount(0) //tab toh ek bhi baar render nahi hoga
 
// 0 === 1 (nahi hai)
// 1 === 1 (hai but yeh value aayi hai kagi se toh reconcilation check krne ke liye react chalata hai jus to chck that value is eqaul or not == just render phase no commit phase )
// when sure toh tab click hona band hojaega render hona bhi 

// setCount (1) // toh 2 baar chalna chaiye but




