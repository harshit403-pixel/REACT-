import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PostContext } from '../context/BlogPost'
import ArticleDetailUI from './ArticleDetailUI'

const ArticleDetails = () => {
    let {posts} = useContext(PostContext)
    let {id} = useParams()
    let navigate = useNavigate()





  return (
    <div className='w-full h-full flex flex-col   pt-25'>
       <div className='max-w-[60%] min-w-[60%] mx-auto flex flex-col gap-5 '>
        <p
        onClick={()=> navigate("/")}
        className="text-white/60 max-w-[65%]  flex items-center mb-5 cursor-pointer hover:text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2 h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Back to Home </p>

        {
                posts.map((posts)=>{
        if(posts.id === id){
            return <ArticleDetailUI post={posts} key={posts.id} />
        }
    })
        }
       </div>

    </div>
  )
}

export default ArticleDetails
