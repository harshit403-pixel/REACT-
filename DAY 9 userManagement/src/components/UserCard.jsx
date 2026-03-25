import React from 'react'

const UserCard = ({user}) => {
  return (
    //main card
    <div className=' rounded-xl bg-gray-100  border-2 gap-3 flex flex-col items-center h-fit pt-3 pb-4 px-4 '>
      <div className='w-50 h-50 rounded-full overflow-hidden'>
        <img
        className='h-full w-full object-cover object-top'
        src={user.image} alt="" />
      </div>
      <div className='flex flex-col gap-1 mr-10'>
        <p className='font-semibold text-xl text-green-600'>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
        <p>{user.id}</p>
        <p>{user.designation}</p>
      </div>

      <div className='flex gap-2'>
        <button className=' active:scale-95 cursor-pointer py-1 px-4 border-black border-2   rounded text-blaxk font-semibold  bg-amber-200 '>Update</button>
        <button className=' active:scale-95 cursor-pointer py-1 px-4 border-black border-2   rounded text-white font-semibold  bg-red-500 '>Remove</button>
      </div>
    </div>
  )
}

export default UserCard
