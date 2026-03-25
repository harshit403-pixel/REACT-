import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import PlayerCard from './components/PlayerCard'
import AddPLayer from './components/AddPLayer'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  let handleDelete = (id)=>{
    let newArr = playerData.filter( elem => elem.id !== id )
    setPlayerData(newArr)
    localStorage.setItem("players",JSON.stringify(newArr))
  } 




  const [playerData, setPlayerData] = useState( 
    JSON.parse(localStorage.getItem("players")) ||
    []
  )
  
  const [toggle, setToggle] = useState(true)

  const [editUser, setEditUser] = useState(null)

// useEffect(()=>{
//     let fetchData = async()=>{
//     let res = await axios.get("https://dummyjson.com/users")
//     setUser(res)
//   }
//   fetchData()
// },[])
// console.log(user)


// useEffect(()=>{

//   (async()=>{
//     let res = await axios.get("https://dummyjson.com/users")
//     setUser(res.data.users)
    
//   })()

// },[])

  return (

    <div className='h-screen w-screen overflow-x-hidden bg-black'>
      <Navbar setToggle={setToggle} toggle={toggle} />
{
  toggle ?
  
  <div className=' flex flex-wrap pl-6   '> 

    {
      playerData.map((elem)=>{
        return <PlayerCard key={elem.id} playerData={elem}  handleDelete={handleDelete} setEditUser={setEditUser} setToggle={setToggle} />
      })
    }


   </div> 
   
   
   : <AddPLayer setPlayerData={setPlayerData} setToggle={setToggle} playerData ={playerData} editUser={editUser} setEditUser={setEditUser} />
}



      
    </div>
  )
}

export default App