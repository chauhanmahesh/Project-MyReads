import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class Bookshelves extends Component {

  getBooksForShelf(shelfId) {
    // Let's return books which belongs to that shelf.
    return this.props.books.filter((book) => book.shelf === shelfId)
  }

  render() {
    // Let's first get all the books and bookshelves
    const { bookshelves, handleShelfUpdate } = this.props;
    // Right now we have an array of bookshelves and array of books but those needs to be mapped together so that
    // we can display shelf with proper books in it (which belongs to that particular shelf. So let's categorise them.
    return (
      bookshelves.map((bookshelf) => (
        <Bookshelf key={bookshelf.id} bookshelf={bookshelf} books={this.getBooksForShelf(bookshelf.id)} handleShelfUpdate={handleShelfUpdate}/>
      ))
    )
  }

}

// Defining propTypes.
Bookshelves.propTypes = {
  bookshelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired

};

export default Bookshelves