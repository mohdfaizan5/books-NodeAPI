require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Importing the Books model
const bookModel = require('./models/booksModel')

// Env Variables
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

// Allowing json 
app.use(express.json())


// Home page
app.get('/', (request, response) => {
  response.send("Welcome to the largest collection of book data")
})

// Add new book
app.post('/add', async(req, res) => {
  try{

    const addedBook = await bookModel.create(req.body)
    res.status(200).json(addedBook)
  }
  catch(error){
    console.log(error.message)
    res.status(500).json(error.message)
  }
})


// get all books
app.get('/all', async(req, res)=>{

  try{

    const allBooks = await bookModel.find()
    res.status(200).json(allBooks)
  }catch(error){
    console.log(error.message)
    res.status(500).json(error.message)
  }
    
})


// delete by id
app.delete('/delete/:id', async(req, res)=>{
  try{
    const {id} = req.params
    const deletedBook = await bookModel.findByIdAndDelete(id)
    res.status(200).json(deletedBook)
  }
  catch(error){
    res.status(500).json(error.message)
  }
})


app.put('/update/:id', async(req, res)=>{
  try{
    const {id} = req.params
    const updatedProduct = await bookModel.findByIdAndUpdate(id, req.body)
    res.status(200).json(updatedProduct)
  }
  catch(error){
    console.log(error.message)
    res.status(200).json(error.message)
  }
})


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