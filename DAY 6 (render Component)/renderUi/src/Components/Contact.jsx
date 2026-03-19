import React from 'react'

const Contact = ({setVisible}) => {
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={()=>{
        setVisible(prev => !prev)
      }}>Go to About</button>
    </div>
  )
}

export default Contact
