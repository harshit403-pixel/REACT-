import React from 'react'

const About = ({}) => {
  console.log("about rendering")
  
    return (
    <div>
      {/* <h1>this is about --- {users.name} </h1> */}
      <h1>this is about count ---  </h1>
    </div>
  )
}

export default React.memo(About)
