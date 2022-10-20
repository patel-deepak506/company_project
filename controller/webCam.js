const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const nodeWebCam = require('node-webcam')

const options = {
    width:1250,
    height:700,
    quality: 100,
    delay: 1,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location"
}

// create instance using the above options
var webcam = nodeWebCam.create(options);

var captureShot = (amount , i, name)=>{
    return new Promise(resolve=>{
        const pathLocation = path.join(__dirname, `/${name}`)
        if(!fs.existsSync(pathLocation)) {
            fs.mkdirSync(pathLocation);
        }


        webcam.capture(pathLocation+`/${name}${i}.${options.output}`, (err, data) => {
            if(!err) {
                console.log('Image created')
            }
            i++;
            if(i <= amount) {
                captureShot(amount, i, name);
            }
            resolve('/path/to/image.jpg')
        }); 
    })

}

router.get('/captureImage' , (req, res)=>{
    captureShot(5 , 1, "images").then(result=>{
        res.send(`<img src="${result}"/>`)
    })
})

module.exports = router