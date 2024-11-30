"use client"
import { useState } from "react"
import axios from "axios"

const page = () => {
  const[email,setEmail] = useState<string>("") 
   const[password,setPassword] = useState<string>("") 
  const loginHandler = async ()=>{
    try{
      const response = axios.post("/api/users/login",{
        email,password
      })
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex justify-center items-center h-screen ">
        <div className="w-[30%] px-4 flex flex-col justify-center items-center gap-5 rounded-xl shadow-xl border h-80">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border rounded-xl outline-none"/>
            <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 border rounded-xl outline-none"/>
            <button className="bg-green-600 text-white w-full rounded-full py-2" onClick={loginHandler}>Login</button>
            <div className="flex gap-1 text-sm">
              <span className="text-gray-500">Don't Have Account?</span>
              <span className="font-semibold">Register</span>
            </div>
        </div>
    </div>
  )
}

export default page