const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
    res.status(200).send('hello home page');
});

// About Page
app.get('/about', (req, res) => {
    res.status(200).send('about page');
});

// 404 Error Page (Must be the last route)
app.use((req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

// app.use() registers middleware

// Middleware runs:

// for every HTTP method (GET, POST, PUT, DELETE…)

// for every route

// Unless a path is specified, it applies to '*'

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});