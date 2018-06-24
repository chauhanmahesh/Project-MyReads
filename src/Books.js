import React from 'react'
import Book from './Book'
import PropTypes from "prop-types";

const Books = (props) => {

  const { books, handleShelfUpdate } = props;
  return (
    <ol className="books-grid">
      {
        books.map((book) => (
          <Book key={book.id} book={book} handleShelfUpdate={handleShelfUpdate}/>
        ))
      }
    </ol>
  )

};

// Defining propTypes.
Books.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default Books