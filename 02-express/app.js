const express=require('express')
const app=express()
const data=require('./data')

app.use(express.json())
app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    app.send('./method-public/index.html')
})

app.get('/api/people',(req,res)=>{
    res.json({success:true,
        data:data.people})
})

app.post('/api/people',(req,res)=>{
    const {name}=req.body
    console.log(req.body,name);
    if(!name){
        res.status(404).json({success:'failed',
            msg:'enter valid credentials'
        })
    }
    else{
        res.status(201).json({success:'true',
            person:name
        })
    }
})

app.post('/api/postman/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({
            success:'false',
            msg:'enter a valid name'
        })
    }
    else{
        res.status(201).json({success:'true',
            data:[...data.people,name]
        })
    }
})

app.post('/login',(req,res)=>{
    const {name}=req.body;
    console.log(name);
    if(name) return res.send(`hello ${name}`)
    else return res.status(401).send('<h1> Send Credentials</h1>')
    
})

app.listen(5000,()=>console.log('5000'))