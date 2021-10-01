const mongoose = require('mongoose')
const morgan = require('morgan')
const express = require('express')
const htmlroute =  require('./routes/html') 
const port = 3000
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan("dev"))
app.use(htmlroute)
app.use(express.static)

mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
app.listen(port, () => {
    console.log("Running the port local 3000")
 })
