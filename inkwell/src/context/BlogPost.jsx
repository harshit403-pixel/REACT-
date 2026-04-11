import { createContext, useState } from "react";

export const PostContext = createContext();

export const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  const [editPost, setEditPost] = useState(null)

  return (
    <PostContext.Provider value={{ posts, setPosts , editPost, setEditPost }}>
      {children}
    </PostContext.Provider>
  );
};