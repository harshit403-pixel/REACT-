import React from 'react'
import Navbar from './components/navbar'
import UserCard from './components/UserCard'
import AddUserForm from './components/AddUserForm'
import { useState } from 'react'

const App = () => {

  const [visible, setToggle] = useState(false)
  const [users, setUsers] = useState([])

  console.log(users)


  return (
    <div className='h-screen p-4'>
      <Navbar setToggle={setToggle} visible={visible}  />

{
visible ?
    (<div className='mt-5 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-3' >
      {
        users.map((elem)=>{

        return <UserCard key={elem.id} user={elem}  />
        })
      } 
       </div>
       ) :   (
        <div className='flex justify-center items-center h-[90%] w-full'>
  <AddUserForm setUsers={setUsers} setToggle={setToggle} />
</div>
       )
}




    
    </div>
  
  )
}

export default App
