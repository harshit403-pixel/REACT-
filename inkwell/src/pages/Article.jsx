import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { PostContext } from "../context/BlogPost";

const CreatePost = () => {


      let {posts, setPosts}  = useContext(PostContext)
      let user = JSON.parse(localStorage.getItem("user"))


    let navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

const onSubmit = (data) => {
  const newPost = {
    id: Date.now().toString(),

    title: data.title,
    content: data.content,
    excerpt: data.excerpt,

    authorId: "author-1",
    authorName: user.name || "Unknown Author",

    published: true,

    tags: data.tags
      ? data.tags.split(",").map(tag => tag.trim())
      : [],

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

    setPosts(prevPosts => [newPost, ...prevPosts]);
    localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));
        navigate("/dashboard")


  reset();
};

  return (
    <div className=" p-6 cursor-pointer w-full h-full font-second justify-center items-center text-white pt-25">
        <p
        onClick={()=> navigate("/dashboard")}
        className="text-white/60 max-w-[65%] mx-auto flex items-center mb-5 hover:text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2 h-4 w-4" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Back to Dashboard </p>
        <div className="max-w-[65%] mx-auto bg-[#0c1013] border border-white/20 rounded-xl p-6">
                  <h1 className="text-2xl font-bold mb-6">Create New Article</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

  
        <div>
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter a compelling title..."
            {...register("title", { required: "Title is required" })}
            className="w-full mt-2 p-2 rounded bg-[#12161a] border border-white/20"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

    
        <div>
          <label className="text-sm font-medium">Excerpt</label>
          <textarea
            rows={2}
            placeholder="Write a brief summary..."
            {...register("excerpt", { required: "Excerpt is required" })}
            className="w-full mt-2 p-2 rounded bg-[#12161a] border border-white/20"
          />
          {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt.message}</p>}
        </div>

        
        <div>
          <label className="text-sm font-medium">Content</label>
          <textarea
            rows={10}
            placeholder="Write your article..."
            {...register("content", { required: "Content is required" })}
            className="w-full mt-2 p-2 rounded bg-[#12161a] border border-white/20"
          />
          {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
        </div>

           <div>
          <label className="text-sm font-medium">Tags</label>
          <input
            type="text"
            placeholder="react, javascript..."
            {...register("tags")}
            className="w-full mt-2 p-2 rounded bg-[#12161a] border border-white/20"
          />
        </div>

     
        <div className="flex gap-4 justify-end mt-4">
          <button
            type="button"
            className="px-4 py-2 border border-white/20 rounded"
          >
            Save Draft
          </button>

          <button
            type="submit"
            disabled={!isValid}
            className="px-4 py-2 bg-[#008c75] rounded disabled:opacity-50"
          >
            Publish
          </button>
        </div>

      </form>
        </div>
    </div>
  );
};

export default CreatePost;