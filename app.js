const express = require('express')
const app = express()

const popularController = require('./controllers/popular.controller');

app.use(express.json())
app.use('/popular' , popularController);


module.exports = app