import React, { useContext } from 'react'
import { PostContext } from '../context/BlogPost'
import Posts from './Posts'

const Home = () => {

  let {posts}  = useContext(PostContext)
  console.log(posts)
  return (
    <div className='w-full  pb-20 flex justify-center pt-23 '>
      <div className='min-w-[65%] flex flex-col gap-15'>
             <div className='flex flex-col justify-center items-center gap-4'>
      <h1 className='text-white font-bold text-5xl font-second' >Welcome to <span className='text-[#008c75]'>Inkwell</span></h1>
      <p className='text-white/60 font-second text-lg w-[70%] text-center  '>Discover thoughtful articles on technology, programming, and software engineering from passionate writers.</p>
     </div>

     <div className='flex justify-between'>
      <h1 className='text-xl font-bold text-white font-second'>latest Articles</h1>
      <p className='text-sm  text-white/50 font-second'>3 articles</p>
     </div>

     <div className='font-second flex gap-5 flex-wrap  '>


      {posts.map((user) => (<Posts key={user.id} user={user} />))}



     </div>
      </div>
     


    </div>
  )
}

export default Home
