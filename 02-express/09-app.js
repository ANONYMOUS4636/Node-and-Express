const express=require('express')
const {products}=require('./data')
const logger=require('./logger')

const app=express()

app.use(logger)
// in app.use() order matters
//we can also pass the other arguments in app.use() such as  app.use('./api',logger) it means it will apply to products as well as items it will also apply to all further routes such as api/home/products

app.get('/',(req,res)=>{
 res.send('home')
})
app.get('/about',(req,res)=>{
 res.send('about')
})
app.get('/api/products',(req,res)=>{
 res.send('products')
})
app.get('/api/items',(req,res)=>{
 res.send('items')
})

app.listen(5000,()=>{
    console.log('5000');
})