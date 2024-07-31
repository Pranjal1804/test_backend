const express = require("express")
const app=express()
const port =4000
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/test',(req,res)=>{
    res.send("Page1")
})
app.listen(process.env.PORT,()=>{
    console.log(`This app is listening in port${port}`)
})