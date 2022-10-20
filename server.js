const express = require('express');
const app = express();
const users = require('./controller/users')
const images = require('./controller/images')
const webCam = require('./controller/webCam')
const login = require('./controller/login')
app.use(express.json());
app.use(express.static('images'))

require('dotenv').config()


// apis routes
app.use(users)
app.use(images)
app.use(webCam)
app.use(login)

// express server generated
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}..`)
})

