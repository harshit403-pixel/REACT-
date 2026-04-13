import React from 'react'

const Button = ({text}) => {
  return (
    <div>
                    
                    <button
                        type="submit"
                        className="w-full mb-5 cursor-pointer bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                    >
                        {text}
                    </button>
      
    </div>
  )
}

export default Button
