const express = require('express')
const route = express.Router()

// Importing Controllers
const { addBook,
  deleteBook,
  updateBooks,
  getAllBooks } = require('../controllers/booksController')


// Add new book
route.post('/add', addBook)


// get all books
route.get('/all', getAllBooks)


// delete by id
route.delete('/delete/:id', deleteBook)

// Update book by id
route.put('/update/:id',updateBooks)


module.exports = route