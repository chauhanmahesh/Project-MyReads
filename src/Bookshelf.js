import React from 'react'
import Books from './Books'
import PropTypes from 'prop-types'

const Bookshelf = (props) => {

  const { bookshelf, books } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelf.title}</h2>
      <Books books={books}/>
    </div>
  )

};

Bookshelf.PropTypes = {
  bookshelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf