import React from 'react'
import PropTypes from "prop-types"
import Author from './Author'
import BookShelfChanger from "./BookShelfChanger"
import * as BooksAPI from "./BooksAPI"

class Book extends React.PureComponent {

  /**
   * @description Prepares the Book object with the properties which we need to render it on screen.
   * @returns {Object} book object which needs to be rendered.
   */
  getBookDetails() {
    // Let's return the book with the properties which we need to render it.
    let { book } = this.props;
    // To prepare the cover, let's get the images first.
    let { imageLinks } = book;
    // Let's get the thumbnail from image links.
    const { thumbnail, smallThumbnail } = imageLinks !== undefined ? imageLinks : {};
    // Let' decide which thumbnail to show. We will use normal thumbnail but if its not there then let's just use smallThumbnail.
    let bookThumbnail = thumbnail !== '' ? thumbnail : smallThumbnail;
    // Let's prepare book cover.
    let bookCover = {
      width: 128,
      height: 193,
      backgroundImage: `url(${bookThumbnail})`
    };
    return {
      title: book.title,
      authors: book.authors !== undefined ? book.authors : [],
      cover: bookCover,
      shelf: book.shelf
    }
  }

  /**
   * @description Handle the shelf change for the book.
   * @param {string} updatedShelf - The updated shelf of the book.
   */
  handleShelfChange = (updatedShelf) => {
    const { handleShelfUpdate, book } = this.props;
    // Before notifying this change to App.js, let's update this bookshelf change to BE.
    BooksAPI.update(book, updatedShelf)
      .then(() => {
        handleShelfUpdate(book, updatedShelf)
      });
  };

  render() {
    // Let's get the book details to display.
    const bookDetails = this.getBookDetails();
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {/* Rendering book cover. */}
            <div className="book-cover" style={bookDetails.cover}>
            </div>
            {/* Rendering book shelf changer. */}
            <BookShelfChanger currentShelf={bookDetails.shelf} onShelfChange={this.handleShelfChange}/>
          </div>
          {/* Rendering book title */}
          <div className="book-title">{bookDetails.title}</div>
          {/* Rendering book authors. As there could be multiple authors, let's iterate through each author. */}
          <div className="book-authors">{
            bookDetails.authors.map((author) => (
              /* Rendering single author. */
              <Author key={author} authorName={author}/>
            ))
          }</div>
        </div>
      </li>
    )
  }

}

// Defining propTypes.
Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book