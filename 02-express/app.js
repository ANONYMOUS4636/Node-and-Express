const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
    res.json(products)
})


app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.status(200).json(newProduct)
})

app.get('/api/products/query', (req, res) => {
    const { search, limit } = req.query;
    let datab = [...products]
    if (search) {
        datab = datab.filter((n) => n.name.startsWith(search))
    }
    if (limit) {
        datab = datab.slice(0, Number(limit))
    }

    res.status(200).json(datab)
})

app.listen(5000, () => {
    console.log('5000');
})