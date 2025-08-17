import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault()
            console.log("email is",email + "password is" ,password);
            setEmail("");
            setPassword("")
    }
    return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-300 via-emerald-200 to-emerald-400">

      <div className="backdrop-blur-xl bg-white/20 shadow-2xl rounded-2xl p-10 w-96 border border-white/30">
        
        <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-lg py-3">
          Welcome Back
        </h1>

         
        <form className="flex flex-col space-y-5" onSubmit={(e) =>{submitHandler(e)}}>
          <input
            className="bg-white/80 outline-none border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all font-medium text-lg py-2 px-5 rounded-full placeholder:text-gray-500"
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Enter your email"
          />
          <input
            className="bg-white/80 outline-none border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all font-medium text-lg py-2 px-5 rounded-full placeholder:text-gray-500"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Enter password"
          />

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg py-2 px-8 w-full rounded-full shadow-lg transition-transform hover:scale-[1.02]">
            Log in
          </button>
        </form>
      </div>
    </div>

    // <div className="flex h-screen w-screen items-center justify-center">
    //   <div className="border-2 rounded-xl border-emerald-600 p-20">
    //     <form className="flex flex-col items-center justify-center">
    //       <input
    //         className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
    //         type="email"
    //         placeholder="Enter your email"
    //       />
    //       <input
    //         className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
    //         type="password"
    //         placeholder="Enter password"
    //       />
    //       <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
    //         Log in
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;
