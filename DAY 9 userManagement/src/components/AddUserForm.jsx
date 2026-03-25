import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = ({setUsers , setToggle}) => {
  
   let {register , handleSubmit , reset , formState:{errors} } = useForm()
   let handleSubmitForm = (data)=>{
    setUsers((prev)=> [...prev , data])   // app.jsx se state aayi usse purana data bhi lia and new jo RHF se aya use bhej dia 
    setToggle((prev) => !prev)
    reset()
   }
  
    return (

    

    <div className='h-fit  py-5 items-center w-[30%] gap-4  border-white/70 border-2 rounded-xl flex flex-col bg-gray-800 text-white shadow-black shadow-2xl '>
      <h1 className='font-semibold text-3xl self-center'>Add a User</h1>

      <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className='flex flex-col w-[80%] gap-3' action="">
        <input
        name='name'
        {...register ("name", {required:"Employee name required"})} // requiered is avalidition fill nahi karoghe toh error upr formState mai jaega wahah ka msg apan iske niihce hi print krwadenge
        className='border outline-0 py-1  pl-2 rounded ' type="text" placeholder='Enter Your Name' />
        
        {/* agar errors.name exist karta hi oth mesage ko display krdena agar naih toh yeh false rahgea */}
        { errors.name && <p className='text-red-500'> {errors.name.message} </p> }


        <input
        {...register ("image", {required:"Image is required"})}
        name='image'
        className='border outline-0 py-1  pl-2  rounded ' type="url" placeholder='Enter Image URL' />
        { errors.image && <p className='text-red-500'> {errors.image.message} </p> }


        <input
        {...register ("email", {required:"Email is required"})}
        name='email'
        className='border outline-0 py-1  pl-2  rounded ' type="email" placeholder='Employee Email' />
        { errors.email && <p className='text-red-500'> {errors.email.message} </p> }




        <input
        {...register ("mobile", {required:"Mobile no. is required", 
            minLength:{
                value:10,
                message:"min 10 digits required"
            },
            maxLength:{
                value:10,
                message:"max 10 digits allowed"
            }
        })}
        name='mobile'
        className='border  outline-0 py-1 pl-2  rounded ' type="number" placeholder='Employee Mobile' />
              { errors.mobile && <p className='text-red-500'> {errors.mobile.message} </p>}


        <input
        {...register ("id", {required:"employee id is required"})}
        name='id'
        className='border  outline-0 py-1 pl-2  rounded ' type="text" placeholder='Employee ID' />
         { errors.id && <p className='text-red-500'> {errors.id.message} </p>}

        <input
        {...register ("designation", {required:"Designation is required"})}
        name='designation'
        className='border  outline-0 py-1 pl-2  rounded ' type="text" placeholder='Employee Designation' />
           { errors.designation && <p className='text-red-500'> {errors.designation.message} </p>}

        <div className='flex gap-5'>
                    <div className='flex gap-2 items-center'>
            <p>Manager</p>
            <input
            {...register("role", {required:"emp. role is required"} )}
            type="radio" value="manager" />
            { errors.role && <p className='text-red-500'> {errors.role.message} </p>}
        </div>
        <div className='flex gap-2 items-center'>
            <p>Employee</p>
            <input
            {...register("role")}
            type="radio" value="employee" />
        </div>

        </div>

        <div>
            <button className='px-4 py-2 bg-green-600 font-semibold rounded'>ADD USER</button>
        </div>




      </form>

    </div>
  )
}

export default AddUserForm

