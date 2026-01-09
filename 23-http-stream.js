const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    // const text=fs.readFileSync('./content/big.txt','utf8') //returns string
    const fileStream=fs.createReadStream('./content/big.txt',{encoding:'utf8'})// return readable stream so the res.end() doesn't work
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000)



//text is string whereas fileStream is readable stream