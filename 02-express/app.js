const express=require('express')
const path=require('path')

const app=express()

//setup static or middleware
app.use(express.static('./public'))


//we can use this otherwise the above one where we can dump all the static assets in public and the server will automatically serve the  index.html as root
// app.get('/',(req,res) => {
//     res.sendFile(path.resolve(__dirname,'./nav-bar/index.html'))
// })

app.use((req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000,() => {
  console.log('app listening at port 5000');
}
)