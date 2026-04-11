import React from 'react'
import { useNavigate } from 'react-router'

const Posts = ({post}) => {

    console.log(post.id)

    let navigate = useNavigate()
  return (
    <div>
            <div
            onClick={()=> navigate(`/article/detail/${post.id}`)}
            className='h-[320px] w-[300px] cursor-pointer group transition duration-300 hover:border-[#008c75] p-7 flex flex-col gap-10 border border-white/20 rounded-xl bg-[#0a0e11] '>


<div className='flex flex-col gap-2'>

      <div className='flex flex-wrap gap-1'>
        {post.tags.map((tag) => (
          <p className='bg-white/7 text-white p-0.5 px-1 text-nowrap text-[11px] rounded-sm' key={tag}>
            {tag}
          </p>
        ))}
      </div>

        <h1 className='text-xl font-bold transition duration-300 group-hover:text-[#008c75] text-white'>  {post.title}</h1>
</div>
     
      
      <p className='text-sm text-white/50'> {post.excerpt}</p>

      <div className='flex gap-2 ' >
      <div className='text-white/70 flex gap-1 items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-post h-4 w-4" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <h1 className='text-white/70 text-[12px] '> {post.authorName}</h1>
      </div>
      <div className='text-white/70 flex gap-1 items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
        <h1 className='text-white/70 text-[12px] '> {new Date(post.createdAt).toLocaleDateString()}</h1>
      </div>

      </div>



      </div>
    </div>
  )
}

export default Posts
