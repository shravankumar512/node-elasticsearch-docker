const express = require('express');
const bodyParser = require('body-parser')
const esclient = require('./connection');
const routers = require('./routes');

const app = express()
const port = 3000;

app.use(express.json())
app.use(routers)

app.get('/', (req, res) => {
    res.send("sample express GET end point")
})

const checkStatus = async () => {
    try {
        console.log('checking esclient connection...')
        await esclient.ping()
        console.log('esclient connection successful')
    } catch (error) {
        console.log(error.message)
    }
}

app.listen(port, async () => {
    // await checkStatus()
    console.log(`server start at http://localhost:${port}`)
})