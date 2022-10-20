const express = require('express');
const db = require('../models/db')
const router = express.Router()

router.post('/images', async(req, res)=>{
    try {
        const images = req.body.images
        if(Array.isArray(images) && images.length>0){
             await db.collection("images").insertOne({images:images})
             return res.send({message:"images uploded successfully.."}).statusCode(200)
        }else{
           return res.send({message:"please send multiple images as an array."}).status(404)
        }
        
    } catch (error) {
        return res.send({message:"server error " , error:error}).statusCode(500)
    }
})


module.exports = router