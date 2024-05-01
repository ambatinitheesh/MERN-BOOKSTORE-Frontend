import React, { useState } from 'react'
import '../CSS/Loginsign.css'
export const LoginSignup = () => {
  const [state,setState]= useState("Login");
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async()=>{
   console.log("Login Function Executed",formData)
   let responseData;
   await fetch('https://mern-bookstore-xi.vercel.app/login',{
     method:'POST',
     headers:{
       Accept:'application/form-data',
       'Content-Type':'application/json',
     },
     body:JSON.stringify(formData),
   }).then((response)=>response.json()).then((data)=>responseData=data)

   if(responseData.success)
   {
     localStorage.setItem('auth-token',responseData.token);
     window.location.replace("/");
   }
   else{
     alert(responseData.errors)
   }
  }
const signup = async()=>{
    console.log("Signup Executed",formData)
    let responseData;
    await fetch('https://mern-bookstore-xi.vercel.app/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success)
    {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
  <div className='loginsignup'>
<div className='loginsignup-container'>
  <h1>{state}</h1>
  <div className='loginsignup-fields'>
   {state==="Sign Up"? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
    <input type="email" name="email" value={formData.email}onChange={changeHandler} placeholder='Email Address'/>
    <input type='password' name="password" value={formData.password} onChange={changeHandler}placeholder='Password'/>
  </div>
  <button onClick={()=>{state==="Login"?login():signup()}}> Continue </button>
  {state==="Sign Up"?<p className='loginsignup-login'> Already have an account?<span onClick={()=>{setState("Login")}}>Login Here</span></p>
  :<p className='loginsignup-login'>Create an Account?<span onClick={()=>{setState("Sign Up")}} >Click Here</span></p>}

  
     </div>
    </div>
  )
}
