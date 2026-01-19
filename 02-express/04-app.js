// sending specific property of the json

const express=require('express')
const {products}=require('./data')

const app=express()

app.get('/api/products',(req,res)=>{
 const newProduct=products.map((products)=>{
    const {id,name,image}=products;
    return {id,name,image}
 })

 res.json(newProduct)
})
app.get('/api/products/1',(req,res)=>{
 const singleProduct=products.find((product)=>product.id === 1)

// const singleProduct = products.find((product) => {
//   return product.id === 1;
// });


 res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('5000');
})



// Arrow functions only return implicitly when there are NO {} braces.
// If you use {}, you must write return explicitly.