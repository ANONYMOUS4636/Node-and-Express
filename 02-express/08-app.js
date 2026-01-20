const express=require('express')
const {products}=require('./data')

const app=express()

//middleware
const logger=(req,res,next)=>{
 const method=req.method
 const url=req.url
 const time=new Date().getFullYear()
 console.log(method,url,time);
 next()
}

app.get('/',logger,(req,res)=>{
 res.send('home')
})

app.listen(5000,()=>{
    console.log('5000');
})