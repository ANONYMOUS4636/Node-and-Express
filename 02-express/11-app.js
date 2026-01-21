const express=require('express')
const app=express()
const morgan=require('morgan')

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('home')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/contcts',(req,res)=>{
    res.send('contacts')
})

app.listen(5000,()=>console.log('5000'))