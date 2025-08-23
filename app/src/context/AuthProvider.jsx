import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null); 

  useEffect(() =>{
    setLocalStorage()
    const  {employees, admin} = getLocalStorage();
    setUserData({employees,admin})
    
  },[])

  return (
    <AuthContext.Provider value={userData}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
}
export default AuthProvider;
