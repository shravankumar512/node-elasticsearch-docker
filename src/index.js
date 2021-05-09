const express = require('express');
const esclient = require('./connection');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send("sample express GET end point")
})

const checkStatus = async () => {
    try {
        await esclient.ping()
        console.log('esclient connection successful')
    } catch (error) {
        console.log(error.message)
    }
}

app.listen(port, () => {
    checkStatus()
    console.log(`server start at http://localhost:${port}`)
})