import React from 'react'
import PropTypes from "prop-types";

const Book = (props) => {

  const { book } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={book.cover}>

          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    </li>
  )

};

Book.PropTypes = {
  book: PropTypes.object.isRequired
};

export default Book