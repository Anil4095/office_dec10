import React,{useEffect, useState} from 'react'
import {  Link } from 'react-router-dom'
import '../App.css'

const Mobile = () => {
    const [number, setNumber]=useState([])
    const [login, setLogin]= useState()

     const getData= async ()=>{
         let newData={};
         let res = await fetch("https://deals24.live/Dealsjson/userlogin")
         newData=await res.json()
         console.log(newData)
         setLogin(newData)
         
     }
     useEffect(()=>{
         getData()
     },[])

     const handleClick=()=>{
        if(login){
            return console.log("OTP Send")
        }else{
            return console.log("Enter Mobile Number")
        }
     }




    const handleChange=(e)=>{
        setNumber(e.target.value)
    }
    return (
        <div className="container" style={{justifyContent:"center", display:"flex"}}>
            <h1>Mobile:--{number} </h1>
            <div  className="inp-div">
            <input className="inp-div" type="text"  placeholder="Phone Number"  value={number} onChange={handleChange} />
           </div>
           <div className="btn-div">
            <Link className="btn" to="/login" onClick={handleClick} >Login</Link>
            </div>
        
        </div>
    )
}

export default Mobile
