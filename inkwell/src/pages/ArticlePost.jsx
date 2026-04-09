import React, { useState } from 'react'

const ArticlePost = ({ post }) => {
     const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div>
       <div className='w-full border rounded-xl bg-[#0a0e11] border-white/20 h-[200px] flex justify-between px-10 items-center'>

       <div className='flex flex-col gap-1'>
                <h1 className='text-white font-bold'>{post.title}</h1>
        <p className='text-white/60 '>{post.excerpt}</p>
        <p className='text-white/60  '>{post.createdAt}</p>
       </div>

       <div
       onClick={()=> setMenuClicked((prev)=> !prev)}
       className='relative cursor-pointer text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>


        <div className={`absolute top-5 right-0 w-[120px] bg-[#0a0e11] border border-white/20 rounded-lg p-2 flex flex-col gap-2 transition-all duration-300 ease-out ${menuClicked ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
          <p className='text-white flex items-center  cursor-pointer hover:bg-[#033830] p-1 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" lucide lucide-eye mr-2 h-4 w-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
            View</p>
          <p className='text-white flex items-center  cursor-pointer hover:bg-[#033830] p-1 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" lucide lucide-pencil mr-2 h-4 w-4" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
            Edit</p>
          <p className='text-white flex items-center  cursor-pointer hover:bg-[#033830] p-1 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" lucide lucide-trash2 lucide-trash-2 mr-2 h-4 w-4" aria-hidden="true"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete</p>
        </div>

       </div>

       </div>
    </div>
  )
}

export default ArticlePost
