app.get('/api/people',(req,res)=>{
    res.json({success:true,
        data:data.people})
})