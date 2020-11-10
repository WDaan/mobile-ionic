const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

const Gpio = require('./services/Gpio')

app.get('/', (req, res) => {
    res.json(Gpio.getIoConfig())
})

app.get('/status', (req, res) => {
    res.json(Gpio.getIOStates())
})

app.post('/', (req, res) => {
    const { pin, mode } = req.body
    Gpio.addIo(pin, mode)
    res.send('ok')
})

app.post('/:pin', (req, res) => {
    const pin = parseInt(req.params.pin, 10)
    const state = parseInt(req.body.status)
    Gpio.writeOutput(pin, state)
    res.send('ok')
})

app.delete('/:pin', (req, res) => {
    const pin = parseInt(req.params.pin, 10)
    Gpio.deleteIo(pin)
    res.send('ok')
})

module.exports = app
