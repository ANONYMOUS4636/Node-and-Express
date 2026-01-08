const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("home page")
    }

    else if(req.url === "/about"){
        //blocking code
        for(let i=0;i<100;i++){
            for(let j=0;j<100;j++){
                console.log(`${i} and ${j}`);
                
            }
        }
        res.end("about page")
    }
})

server.listen(3000,()=>{
    console.log("server is listening at port 5000");
    
})