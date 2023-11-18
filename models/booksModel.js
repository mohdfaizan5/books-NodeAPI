const mongoose = require('mongoose')

const booksModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true
    },
    description: String,

  }
)

const Book = mongoose.model('Product', booksModel)

module.exports = Book;