require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Env Variables
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

// Allowing json 
app.use(express.json())

// Importing routes
const booksRoute = require('./routes/booksRoutes')


// Routes
// Home page
app.get('/', (request, response) => {
  response.send("Welcome to the largest collection of book data")
})

// API
app.use('/api', booksRoute)

// Database connect and PORT
mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB connected && Server up ^_^")
    })
  })
  .catch(error => {
    console.log(error)
  })