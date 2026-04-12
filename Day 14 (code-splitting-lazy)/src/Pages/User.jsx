import React, { lazy, Suspense } from 'react'
let UserCard = lazy(()=> import("./UserCard"))

const User = () => {
  return (
    <div>
      <h1>this is user page</h1>

      <Suspense fallback={ <h1>Loading</h1>}>
        <UserCard/>
      </Suspense>
    </div>
  )
}

export default User
