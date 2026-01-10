const http=require("http")

const server=http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('welcome to the home page')
    }
    else if(req.url === '/about'){
        res.end('welcome to the about page')
    }
    
    else{
    res.end(`
        <h1>Oops!</h1>
        <p> the page you are looing for is not available </p>
        <a href="/">Home</a>
        `);}
})

server.listen(5000);



// What does req.write() do?
// 👉 req.write() sends data in chunks.
// Used to send partial data (body of request)
// Can be called multiple times
// Does NOT finish the request



// What does req.end() mean?
// 👉 req.end() signals that you have finished sending data.
// It ends the writable stream
// Tells Node.js: “No more data will be sent”
// Actually flushes the request and sends it to the server
// Must be called, otherwise the request will never complete