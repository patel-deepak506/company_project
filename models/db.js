const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/newDatabase")
const db = mongoose.connection
db.once('open', ()=>{console.log('mognodb connected successfully..')})

module.exports = db