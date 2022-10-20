const Jwt = require('jsonwebtoken');
require('dotenv').config()

const adminAuth = async (req, res,next)=>{
     const token = req.headers?.authorization || req.cookies ||   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlZXBha0BnbWFpbC5jb20iLCJwYXNzd29yZCI6ImRlZXBhazIzMjMiLCJsb2dpblR5cGUiOjIsImlhdCI6MTY2NjI0MTk1OX0.PvghEjqa82_6r28P9_9CBtxrXYYZZm4ELJKv8Jv1_Lg"
    var decoded =  Jwt.verify(token,process.env.SECRET_KEY);
    if (decoded.loginType === 1){
        next()
    }else{
        res.send("you don't have access delete this post");
    };
}

const employeeAuth = (req, res,next)=>{
    const token = req.headers?.authorization || req.cookies;
   const  decoded = Jwt.verify(token,process.env.SECRET_KEY);
   if (decoded.loginType === 2){
       next()
   }else{
       res.send("There are no employee token please provide valid token");
   };
}

module.exports = {adminAuth , employeeAuth}