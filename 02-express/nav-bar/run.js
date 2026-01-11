const http=require('http')
const fs=require('fs')
const homePage=fs.readFileSync('./nav-bar/index.html')
const homestyles=fs.readFileSync('./nav-bar/styles.css')
const homelogo=fs.readFileSync('./nav-bar/logo.svg')
const homelogic=fs.readFileSync('./nav-bar/browser-app.js')
const server=http.createServer((req,res)=>{
    const url=req.url;
    console.log(req.url);
    
    if(req.url === '/'){

        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }

    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homelogo)
        res.end()
    }

    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homelogic)
        res.end()
    }

    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homestyles)
        res.end()
    }

    else{
        res.writeHead(404, {'content-type':'text/plain'})
        res.end('404 page not found')
    }
    console.log('user');
})

server.listen(5000)