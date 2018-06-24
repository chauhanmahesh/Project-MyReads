import React from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'


const Bookshelves = (props) => {

  // Let's first get all the books and bookshelves
  const { bookshelves, handleShelfUpdate } = props;

  /**
   * @description Filters the books for the required shelf.
   * @param {string} shelfId
   */
  const getBooksForShelf = (shelfId) => {
    // Let's return books which belongs to that shelf.
    return props.books.filter((book) => book.shelf === shelfId)
  };

  return (
    // Right now we have an array of bookshelves and array of books but those needs to be mapped together so that
    // we can display shelf with proper books in it (which belongs to that particular shelf. So let's categorise them.
    bookshelves.map((bookshelf) => (
      <Bookshelf key={bookshelf.id} bookshelf={bookshelf} books={getBooksForShelf(bookshelf.id)}
                 handleShelfUpdate={handleShelfUpdate}/>
    ))
  )

};

// Defining propTypes.
Bookshelves.propTypes = {
  bookshelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default Bookshelves