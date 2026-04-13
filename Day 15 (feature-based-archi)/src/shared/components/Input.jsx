import React from 'react'

const Input = ({ error,register,name,rules ,labelImg,label, ...props}) => {
  return (
    <div className="mb-4">
            <label className="text-xs font-medium text-gray-500 uppercase">
              {label}
            </label>
            <div className="mt-1 flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <span className="mr-2  text-gray-400">{labelImg}</span>
              <input

              
              {...props}
              {...register( name , rules)}
                className="bg-transparent outline-none w-full text-sm text-gray-700"
              />
            </div>
             {error &&  <p className='text-red-600'>{error.message}</p>}
          
          </div>
  )
}

export default Input
