import React from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

const Bookshelves = (props) => {

  const { bookshelves, books } = props;

  return (
    bookshelves.map((bookshelf) => (
      <Bookshelf key={bookshelf.id} bookshelf={bookshelf} books={books}/>
    ))
  )

};

Bookshelves.PropTypes = {
  bookshelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelves