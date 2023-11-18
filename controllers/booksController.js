// Importing the Books model
const bookModel = require('../models/booksModel')


const addBook = async (req, res) => {
  try {

    const addedBook = await bookModel.create(req.body)
    res.status(200).json(addedBook)
  }
  catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }
}

// get all books
const getAllBooks = async (req, res) => {

  try {

    const allBooks = await bookModel.find()
    res.status(200).json(allBooks)
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }

}

// Update book with Id
const updateBooks = async (req, res) => {
  try {
    const { id } = req.params
    const updatedProduct = await bookModel.findByIdAndUpdate(id, req.body)
    res.status(200).json(updatedProduct)
  }
  catch (error) {
    console.log(error.message)
    res.status(200).json(error.message)
  }
}

// delete by ID
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const deletedBook = await bookModel.findByIdAndDelete(id)
    res.status(200).json(deletedBook)
  }
  catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {
  addBook,
  deleteBook,
  updateBooks,
  getAllBooks
}