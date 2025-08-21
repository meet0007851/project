import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
    const authData = useContext(AuthContext)

    // useEffect(()=>{
    //     if(authData){
    //         const loggedInUser = localStorage.getItem("loggedInUser")
    //       if(loggedInUser){
    //         setUser(loggedInUser.role)
    //       }
    //       }
    // },[authData])
    
  const handleLogin = (email, password) => {
    if (email == "admin@ab.com" && password == "123") {
      setUser({role : 'admin'});
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))
    } else if (authData) {
      const employee = authData.employee.find((e) => email == e.email && e.password == password)
      if(employee){ 
      setUser({role : 'employee'});
      }
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee'}))
    
    } else {
      alert("invalid credential");
    }
  };


  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default App;
