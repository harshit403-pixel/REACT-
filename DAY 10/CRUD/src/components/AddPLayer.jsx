import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const AddPLayer = ({setPlayerData, setToggle , editUser , setEditUser, playerData}) => {
    let { register, handleSubmit, reset, formState: { errors , isValid } } = useForm(
        {
            defaultValues:editUser,
            mode:"onChange"
        }
    )


    let handleSubmitPlayer = (data) => {
        
        if(editUser){
            setPlayerData((prev)=>{
                let updatedPlayers = prev.map((val)=>{
                    return val.id=== editUser.id?{...val,...data}:val;
                })

                localStorage.setItem("players", JSON.stringify(updatedPlayers))
                return updatedPlayers
            })
            
            setEditUser(null)
        }
        
        else{
            
            let arr = [...playerData , {...data , id: nanoid()}]

            setPlayerData(arr)
           
             localStorage.setItem("players", JSON.stringify(arr))

        }
                                    setToggle((prev)=> !prev)
                            reset()
                        } 

    return (
        <div className='h-[65%] w-full mt-22 flex justify-center items-center ' >
            <div className='bg-red-700 w-[60%] lg:w-[30%]  rounded-xl flex flex-col items-center shadow-2xl  '>
                <h1 className='text-white text-2xl mb-5 mt-2 '>Enter Player Details</h1>
                <form
                    onSubmit={
                        handleSubmit(handleSubmitPlayer)
                    }
                    className='flex flex-col w-full p-2 pb-2 gap-2 text-white  ' action="">
                        <input type="url" placeholder='image url (png)'
                        {...register("image" , {required:"Image required"})}
                         className='outline-0 border-2 border-white py-1 px-2 rounded placeholder:text-white/80 ' />
                        <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.image && errors.image.message}</p>
                    <input
                        {...register("name", { required: "Name Required" })}
                        className='outline-0 border-2 border-white py-1 px-2 rounded placeholder:text-white/80 '
                        type="text" name="name" placeholder='Enter Player Name' />
                    <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.name && errors.name.message}</p>
<div className='flex gap-4 items-center'>
  
  <label className='flex items-center gap-1'>
    <input
      type='radio'
      value="batter"
      {...register("position", { required: "position required" })}
    />
    Batter
  </label>

  <label className='flex items-center gap-1'>
    <input
      type='radio'
      value="bowler"
      {...register("position", { required: "position required" })}
    />
    Bowler
  </label>

  <label className='flex items-center gap-1'>
    <input
      type='radio'
      value="wicketkeeper"
      {...register("position", { required: "position required" })}
    />
    WK
  </label>

</div>
                        



                    <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.position && errors.position.message}</p>
                    <input
                        {...register("team", { required: "Team name is required" })}
                        className='outline-0 border-2 border-white py-1 px-2 rounded placeholder:text-white/80 '
                        type="text" name="team" placeholder='Enter Player Team' />
                    <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.team && errors.team.message}</p>



                    <input
                        {...register("matches", { required: "Matches Played !!!", min: { value: 1, message: "Min Experience is 1 match" }, max: { value: 278, message: "Thala played most matches 278" } })}
                        className='outline-0 border-2 border-white py-1 px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded placeholder:text-white/80 '
                        type="number" name="matches" placeholder='Enter Played Matches' />
                    <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.matches && errors.matches.message}</p>




                    <input
                        {...register("runs", {required:"scored some ??"})}
                        className='outline-0 border-2 border-white py-1 px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded placeholder:text-white/80 '
                        type="number" name="runs" placeholder='Enter Player Runs' />
                          <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.runs && errors.runs.message}</p>


                    <input
                        {...register("titles", {required:"ok write 0 if none"})}
                        className='outline-0 border-2 border-white py-1 px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded placeholder:text-white/80 '
                        type="number" name="titles" placeholder='Enter Player Titles' />
                          <p className='bg-white/95 px-4 w-fit rounded text-red-600'>{errors.titles && errors.titles.message}</p>

                    <button
    

                        className={` ${!isValid? "bg-white/80": "bg-white"} font-semibold  text-red-600 px-3 py-1 rounded-md hover:text-white hover:bg-red-950 transition-all ease-in cursor-pointer active:scale-98`}
                    >Add Player</button>
                </form>

            </div>
        </div>
    )
}

export default AddPLayer
