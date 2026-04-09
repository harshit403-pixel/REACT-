import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [newUser, setNewUser] = useState(localStorage.getItem("newUser") ? JSON.parse(localStorage.getItem("newUser")) : null);
  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null); 

  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser, setNewUser, newUser }}>
      {children}
    </UserContext.Provider>
  );
};