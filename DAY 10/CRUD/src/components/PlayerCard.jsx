import React from 'react'

const PlayerCard = ({playerData , handleDelete, setEditUser , setToggle}) => {
   
   
  return (

            <div className='pt-5 px-2  ' >
    <div className=' rounded-xl bg-red-600 h-100 w-70 shadow-xl border-white border-2 overflow-hidden '>

        <div className='h-[65%] relative '>
            <img 
            className='h-full w-full object-cover object-top scale-100 brightness-0 blur-xl '
            src={playerData.image} alt="" />
            <img 
            className='h-full w-full object-cover object-top absolute top-0 '
            src={playerData.image} alt="" />

            <div className='h-15 absolute top-56 w-full bg-red-600 blur-md '>
</div> 
        </div>
        <div className=' relative ml-5 flex justify-between pr-6  ' >
            <div><h1 className='font-semibold whitespace-nowrap text-2xl text-yellow-200'>
               {playerData.name}<span className='text-[14px] text-white/90 '>({playerData.position})</span></h1>
            <h1 className='font-semibold text-white'>{playerData.team}</h1>
            <h1 className='font-semibold text-white'>Matches - {playerData.matches}</h1>
            <h1 className='font-semibold text-white'>Runs - {playerData.runs}</h1></div>
            <div className=' mt-13 bg-yellow-300 text-red-800 p-1 rounded    flex flex-col justify-center items-center leading-none '>
                <h1 className='font-semibold '>Titles</h1>
                <h1 className='font-bold text-2xl'>{playerData.titles}</h1>
            </div>
        </div>
        <div className='  mb-2  flex gap-2 w-full ml-4.5 '>
            <button
                 onClick={()=>{
                setToggle(false)
               setEditUser(playerData)
            }}
            className='bg-yellow-300 text-gray border font-semibold cursor-pointer active:scale-97  rounded px-2 '>Edit</button>
            <button
            onClick={()=>{

       

                handleDelete(playerData.id)
            }}
            className='bg-white text-red-600 font-semibold border rounded cursor-pointer active:scale-97 px-2 '>Remove</button>
        </div>
        

      
    </div>
    </div>
  )
}

export default PlayerCard
