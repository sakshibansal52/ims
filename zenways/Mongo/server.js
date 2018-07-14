const express = require('express')

const app =  express()

const mongoose = require('mongoose')

const config = require('./config.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())




mongoose.connect(config.MONGO , (err , data)=>{
    if (!data){
        console.log("Dtaabase Connects")
    }
})


// app.post('./abc', (req , res)=>{
//     res.json({
//         success : true ,
//         body : req.body
//     })
// })



// app.listen(config,PORT , (err , data)=>{
//     if(!err){
//         console.log("Server running on Port"+ config.PORT)
//     }
// })