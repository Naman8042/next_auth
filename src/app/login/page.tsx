"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const page = () => {
    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    const[buttonDisabled,setButtonDisabled] = useState(true)

    const[loading,setLoading] = useState(false)
    const onLogin = async()=>{
      try{
        setLoading(true)
        const response = await axios.post("/api/users/login",user)
        console.log("Login Successfully",response.data)

        toast.success("Signup Successfully")
      }
      catch(err:any){
        console.log(err.message)
      }
    }
    useEffect(()=>{
      if( user.password.length>0 && user.email.length>0){
        setButtonDisabled(false)
      }
    },[user])
    return (
   <div className='py-2 flex min-h-screen flex-col items-center justify-center'>
    <h1>{loading?"Processing":"Signup"}</h1>
    <hr/>
    
    <label htmlFor='email'>Email</label>
    <input
    id='email'
    className='text-black'
    value={user.email}
    onChange={(e)=>setUser({...user,email:e.target.value})}
    type='text'/>
    <label htmlFor='password'>Password</label>
    <input
    id='password'
    className='text-black'
    value={user.password}
    onChange={(e)=>setUser({...user,password:e.target.value})}
    type='password'/>

     <button onClick={onLogin}>
      {buttonDisabled?"No Login":"Login"}
     </button>

   </div>
  )
}

export default page
