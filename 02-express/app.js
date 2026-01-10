const http=require('http')

const server=http.createServer((req,res)=>{

    console.log(req.url);
    
    
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hello there</h1> \n <h2>Welcome to home page</h2>')
    res.end()
    console.log('user');
})

server.listen(5000)