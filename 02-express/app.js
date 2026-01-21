const express=require('express')
const app=express()
const data=require('./data')

app.use(express.static('./method-public'))

app.use(express.urlencoded({extended:false}))

// app.get('/',(req,res)=>{
//     res.send('home')
// })
app.get('/api/people',(req,res)=>{
    res.json({success:true,
        data:data.people})
})

app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name) return res.send(`hello ${name}`)
    else return res.status(401).send('<h1> Send Credentials</h1>')
    
})

app.listen(5000,()=>console.log('5000'))