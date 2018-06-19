import React from 'react'
import Book from './Book'
import PropTypes from "prop-types";

const Books = (props) => {

  const { books } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.map((book) => (
            <Book key={book.id} book={book}/>
          ))
        }
      </ol>
    </div>
  )

};

Books.PropTypes = {
  books: PropTypes.array.isRequired
};

export default Books