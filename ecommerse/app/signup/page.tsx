"use client"
import { useState } from "react"

const page = () => {
   const[Email,setEmail] = useState<string>("") 
   const[Password,setPassword] = useState<string>("") 
   const[confirmPassword,setConfirmPassword] = useState<string>("") 
  return (
    <div className="flex justify-center items-center h-screen ">
        <div className="w-[30%] px-4 flex flex-col justify-center items-center gap-5 rounded-xl shadow-xl border h-96">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <input type="text" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 border rounded-xl outline-none"/>
            <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 border rounded-xl outline-none"/>
            <input type="password" placeholder="Confirm Password"  onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full p-2 border rounded-xl outline-none"/>
            <button className="bg-green-600 text-white w-full rounded-full py-2">Create Account</button>
            <div className="flex gap-1 text-sm">
              <span className="text-gray-500">Already Have Account</span>
              <span className="font-semibold">Login</span>
            </div>
        </div>
    </div>
  )
}

export default page