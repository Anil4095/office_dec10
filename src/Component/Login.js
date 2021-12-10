import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import'../App.css'

const Login = () => {
    const [conOtp, setConOtp]=useState()
    const [newOtp, setNewOtp]=useState()


    const otpChange=(e)=>{
       setConOtp(e.target.value)
    }

    const otp= async ()=>{
        let res= await fetch("https://deals24.live/Dealsjson/userlogin_verifyOTP")
        let inpOtp= await res.json()
        console.log(inpOtp)
        setNewOtp(inpOtp)
    }
   useEffect(()=>{
       otp()
   },[])

    const verifyOtp=()=>{
       if (newOtp<"4"){
           return console.log("login ")
        }else{
            return console.log("Invalid OTP")
        }
    }
    return (
        <div className="container" style={{justifyContent:"center", display:"flex"}}>
            <h1>Your Otp is:- {conOtp}</h1>
            <div className="inp-div">
             <input className="inp-div" placeholder="OTP" onChange={otpChange}  />
             </div >
             <div  className="btn-div">
             <Link className="btn"  to="/confirm" value={conOtp} onClick={verifyOtp}>Verify</Link>
             </div>
        </div>
    )
}

export default Login
