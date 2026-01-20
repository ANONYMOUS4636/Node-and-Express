const express=require('express')
const {products}=require('./data')

const app=express()

app.get('/',(req,res)=>{
 const method=req.method
 const url=req.url
 const time=new Date().getFullYear()
 console.log(method,url,time);

 res.send('home')
})

app.listen(5000,()=>{
    console.log('5000');
})