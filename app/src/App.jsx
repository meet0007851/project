import React, {  useState } from 'react';
import Login from './components/auth/Login';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
 
const App = () => {
   const [user,setUser] = useState(null)
   const handleLogin = (email,password) =>{
          if(email == "admin@ab.com" && password == "123")
          {
            console.log("this is admin site")
          }
          else if(email == "user@ab.com" && password == "123")
          {
            console.log("this is user site")
          }
          else{
            alert("invalid credential")
          }
   }
  
  return (
 <>
{!user ? <Login handleLogin={handleLogin}/>: ''}
   {/* <EmployeeDashboard/> */}
  {/* <AdminDashboard/>  */}
 </>
  )
} 

export default App