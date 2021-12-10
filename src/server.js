require('dotenv').config()
const express = require('express')
const crypto= require('crypto')



const accountSid=process.env.ACCOUNT_SID
const authToken =process.env.AUTH_TOKEN
const client =require('twilio')(accountSid, authToken)

const JWT_AUTH_TOKEN=process.env.JWT_AUTH_TOKEN

const JWT_REFRESH_TOKEN= process.env.JWT_REFRESH_TOKEN
const smsKey=process.env.SMS_SECRETE_KEY


const app=express();
app.use(express.json())

app.post('/sendOTP',(req,res)=>{
    const phone=req.body.phone;
    const otp= Math.floor(100000, Math.random()*900000 )
    const ttl=2*60*1000
    const expires= Date.now()+ttl
    const data=`${phone}.${otp}.${expires}`
    const hash=crypto.createHmac('Sha256',smsKey).update(data).digest('hex')
    const fullhash=`${hash}.${expires}`


    client.message.create({
        body: `Your One Time Login Password is ${otp}`,
        from: +13099280702,
        to:phone

    }).then((message)=>console.log(message)).catch((err)=>console.log(err))

    res.status(200).send({phone, hash:fullhash})
}); app.listen(4000)


