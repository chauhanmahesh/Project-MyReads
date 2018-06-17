import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

const bookshelves = [
  {
    title: "Currently Reading",
  },
  {
    title: "Want to Read",
  },
  {
    title: "Read",
  }
];

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: {
      width: 128,
      height: 193,
      backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
    }
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    cover: {
      width: 128,
      height: 188,
      backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
    }
  }
];

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelves bookshelves={bookshelves}/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }

}

const Bookshelves = (props) => {

  const { bookshelves } = props;

  return (
    bookshelves.map((bookshelf) => (
      <Bookshelf bookshelf={bookshelf}/>
    ))
  )

};

const Bookshelf = (props) => {

  const { bookshelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelf.title}</h2>
      <Books books={books}/>
    </div>
  )

};

const Books = (props) => {

  const { books } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.map((book) => (
            <Book book={book}/>
          ))
        }
      </ol>
    </div>
  )

};

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

export default BooksApp
