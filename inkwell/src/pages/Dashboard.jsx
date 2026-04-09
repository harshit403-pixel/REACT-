import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { PostContext } from '../context/BlogPost'
import ArticlePost from './ArticlePost'

const Dashboard = () => {
    let navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("newUser"))
    let { posts } = useContext(PostContext)
   
    console.log(posts)
  return (
    <div className='font-second w-full h-full flex justify-center pt-30 '>
      <div className='min-w-[65%] flex flex-col gap-5' >
        <div className='flex justify-between items-center  '>
        <div>
            <h1 className='text-white  text-[24px] font-bold'>Dashboard</h1>
        <p className='text-white/60 '>Manage your Articles,{user?.name} </p>
        </div>
        <button
        onClick={()=> navigate("/new-article")}
        className='bg-[#008c75] cursor-pointer hover:bg-[#006f5a]  rounded px-3 py-1.5'>
          +   New Article
        </button>
        

      </div>

      <div className='flex w-full justify-between gap-5 '>
        <div className='border h-[120px] flex-1 p-3  flex flex-col gap-2 justify-center rounded-xl  border-white/20 bg-[#0a0e11] '> 
        <p className='text-white/60 '>Total Articles</p>
        <h1 className='text-white font-bold text-xl'>0</h1>
          </div>
        <div className='border h-[120px] flex-1 p-3  flex flex-col gap-2 justify-center rounded-xl  border-white/20 bg-[#0a0e11] '> 
        <p className='text-white/60 '>Published</p>
        <h1 className='text-green-500 font-bold text-xl'>0</h1>
          </div>
        <div className='border h-[120px] flex-1 p-3  flex flex-col gap-2 justify-center rounded-xl  border-white/20 bg-[#0a0e11] '> 
        <p className='text-white/60 '>Drafts</p>
        <h1 className='text-white font-bold text-xl'>0</h1>
          </div>
      </div>

      <div className='flex  flex-col gap-5'>
        
      {
        posts.map((post)=>{
            return (
                <ArticlePost key={post.id} post={post} />
            )
        })
      }

      </div>
      </div>
    </div>
  )
}

export default Dashboard
