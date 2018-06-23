import React, { Component } from 'react'
import Books from './Books'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

  render() {
    const { bookshelf, books, handleShelfUpdate } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelf.title}</h2>
        {
          books.length === 0 ? (
            <div className="empty-shelf-message">
              {bookshelf.emptyMessage}
            </div>
          ) : (
            <div className="bookshelf-books">
              <Books books={books} handleShelfUpdate={handleShelfUpdate}/>
            </div>
          )
        }
      </div>
    )
  }

}

// Defining propTypes.
Bookshelf.propTypes = {
  bookshelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default Bookshelf