const express = require('express');
const JWT = require('jsonwebtoken')
const db = require('../models/db')
require('dotenv').config()
const router = express.Router()


router.post('/adminLogin' ,async (req, res)=>{
    try {  
        const body = req.body 
        if(body.loginType!==1){
            res.send({message:"loginType value  should be 1 for admin "})
        }
        await db.collection('employeeAdmin').insert(body)
        const token = JWT.sign({email:body.email , password:body.password , loginType:body.loginType} , process.env.SECRET_KEY)
        res.send({message:"admin added  successfully" , token:token}).statusCode(200)
    } catch (error) {
        res.send({message:"getting error.." , err:error}).statusCode(500)
    }
})

router.post('/employeeLogin' ,async (req, res)=>{
    try {  
        const body = req.body 
        if(body.loginType!==2){
            res.send({message:"loginType value  should be 2 for employee "})
        }
        await db.collection('employeeAdmin').insert(body)
        const token = JWT.sign({email:body.email , password:body.password , loginType:body.loginType} , process.env.SECRET_KEY)
        res.send({message:"employee added  successfully" , token:token}).statusCode(200)
    } catch (error) {
        res.send({message:"getting error.." , err:error}).statusCode(500)
    }
})

module.exports = router