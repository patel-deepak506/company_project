const express = require('express');
const {ObjectId} = require('mongodb');
const auth = require('../middleware/auth')
const db = require('../models/db')
const router = express.Router()


router.post('/post' , async (req, res)=>{
    try {  
        const body = req.body
        await db.collection('users').insert(body)
        res.send({message:"use added  successfully"}).statusCode(200)
    } catch (error) {
        res.send({message:"getting error.." , err:error}).statusCode(500)
    }
})

router.delete('/delete' ,auth.adminAuth,async (req, res)=>{
    try {
        const id = ObjectId(req.body.id)

        await db.collection("users").deleteOne({_id:id})
        res.send({message:"user deleted successfully" }).statusCode(200)    
    } catch (error) {
        res.send({message:"user not deleted getting error" , error:error})
    }

})

module.exports = router