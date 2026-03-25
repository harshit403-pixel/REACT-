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
  } 




  const [playerData, setPlayerData] = useState([
  {
    "id": 1,
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png",
    "name": "Virat Kohli",
    "position": "batter",
    "team": "RCB",
    "matches": 237,
    "runs": 7263,
    "titles": 0
  },
  {
    "id": 2,
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png",
    "name": "Rohit Sharma",
    "position": "Batter",
    "team": "MI",
    "matches": 243,
    "runs": 6211,
    "titles": 5
  },
  {
    "id": 3,
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png",
    "name": "MS Dhoni",
    "position": "WicketKeeper",
    "team": "CSK",
    "matches": 250,
    "runs": 5082,
    "titles": 5
  },
  {
    "id": 4,
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
    "name": "Jasprit Bumrah",
    "position": "Bowler",
    "team": "MI",
    "matches": 133,
    "runs": 56,
    "titles": 5
  },
  {
    "id": 5,
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2025/12.png",
    "name": "KL Rahul",
    "position": "WicketKeeper",
    "team": "LSG",
    "matches": 118,
    "runs": 4163,
    "titles": 0
  }
])

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