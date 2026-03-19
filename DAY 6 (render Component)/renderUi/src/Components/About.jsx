import React from 'react'

const About = ({setVisible}) => {
  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>{
        setVisible(prev => !prev)
      }}>Go to Contact</button>
    </div>
  )
}

export default About
