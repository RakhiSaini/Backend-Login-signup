const {Router} = require("express");
const userRouter = Router();
const {login,signup} = require('../controller/user.auth')

userRouter.get("/login", login)
userRouter.post("/signup", signup)



module.exports = userRouter;