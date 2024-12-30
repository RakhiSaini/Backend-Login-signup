const jwt = require("jsonwebtoken")
const userModel = require('../models/user.model')
const SECRETKEY= "habhai"
// singup
const signup = async (req,res)=>{
    const {name,email,password,} = req.body;
    const user = await userModel.insertMany({name,email,password});
    return res.send("User created")
} //login
const login= async (req , res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({ email : email })
    if(!user && password !== userModel.password  ){
        return res.status(401).send("Invalid Credentials")
    }
    const token = jwt.sign({
        id : user._id,
    },SECRETKEY, {expiresIn: "2 hours"})
    return res.send({msg : user,
        token:token
    })
}
module.exports = {login, signup};