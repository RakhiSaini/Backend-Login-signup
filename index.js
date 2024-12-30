const express = require("express");
const app = express();
const connection = require('./db/connection')
const userRouter = require('./routes/user.route')
const jwt = require("jsonwebtoken")
app.use(express.json());
const SECRETKEY = "habhai"
app.use('/',userRouter)
app.use((req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).send("invalid user")
    }
    try{
        jwt.verify(token,SECRETKEY);
        next()
    }catch{
        return res.status(401).send("invalid token")
    }
})

app.listen(3000, async ()=>{
    await connection
    console.log("http://localhost:3000");
})