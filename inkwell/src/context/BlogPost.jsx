import { createContext, useState } from "react";

export const PostContext = createContext();

export const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};