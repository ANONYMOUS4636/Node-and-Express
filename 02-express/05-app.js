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
app.get('/api/products/:productId',(req,res)=>{
    const productId=req.params.productId
  const singleProduct=products.find((product)=>product.id===Number(productId))

  if(!singleProduct){
    res.status(404).send('product not found')
  }

 res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviews',(req,res)=>{
    console.log(req.params);
    res.send("hello there")
})

app.listen(5000,()=>{
    console.log('5000');
})





// products → an array
// .find() → loops over the array one element at a time
// product → each individual element inside the products array
// So product is just a variable name representing one item in the array.

// product is an object
// Because products is an array of objects.