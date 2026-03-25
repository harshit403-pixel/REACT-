import React from 'react'
import { useState } from 'react'

const Optimized = () => {


    // FORM HANDLING METHOD 3 :::::::::::::::: in new folder Optimised.jsx
    let [formValues, setFormValues] = useState({
        name: "",
        password: "",
        email: "",
        mobile: ""
    })

    let [arr, setArr] = useState([])


    let handle = (e) => {
        let { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    let handleSubmit = (e) => {
        
            e.preventDefault()
            setArr([...arr, formValues])
            console.log("array -->",arr)
            setFormValues({
                name: "",
                password: "",
                email: "",
                mobile: ""
            })
            console.log("form values -->",formValues)
        
    }

    return (
        <div className='h-screen flex flex-col bg-black/90 gap-5 justify-center items-center'>
            <h1 className='text-white text-3xl font-bold'>APP</h1>

            <form
                onSubmit={handleSubmit}
                className=' text-white border-2 flex flex-col gap-2 border-gray-500 p-5 rounded-2xl w-[25%]' action="">
                <div className='flex flex-col gap-4'>
                    <label className=' text-xl font-semibold' htmlFor="">Name</label>
                    <input
                        value={formValues.name}
                        name='name'
                        onChange={handle}
                        className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='John Doe' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' text-xl font-semibold' htmlFor="">Password</label>
                    <input
                        value={formValues.password}
                        name='password'
                        onChange={(e) => { setFormValues({ ...formValues, password: e.target.value }) }}
                        className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='1234565' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' text-xl font-semibold' htmlFor="">Email</label>
                    <input
                        value={formValues.email}
                        name='email'
                        onChange={(e) => { setFormValues({ ...formValues, email: e.target.value }) }}
                        className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='John@email.com' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' text-xl font-semibold' htmlFor="">Number</label>
                    <input
                        value={formValues.mobile}
                        name='mobile'
                        onChange={(e) => { setFormValues({ ...formValues, mobile: e.target.value }) }}
                        className='bg-gray-300 p-2 rounded text-black' type="text" placeholder='898023632' />
                </div>
                <button className='bg-blue-600 p-2 rounded text-white font-semibold'>Submit</button>
            </form>

        </div>
    )
}

export default Optimized
