const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send("sample express GET end point")
})

app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
})