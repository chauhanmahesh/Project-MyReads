import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelves from './Bookshelves'
import SearchBooks from "./SearchBooks";
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  };

  bookshelves = [
    {
      id: 'currentlyReading',
      title: 'Currently Reading',
      emptyMessage: 'OMG, you are not reading anything. Let\'s start reading something and indulge yourself in the world of books.'
    },
    {
      id: 'wantToRead',
      title: 'Want to Read',
      emptyMessage: 'Oh no no, nothing to read next. Let\'s search and add something to your list.'
    },
    {
      id: 'read',
      title: 'Read',
      emptyMessage: 'Looks like you haven\'t finished anything yet. Complete something so that you can move to next adventure.'
    }
  ];

  /**
   * @description Lifecycle events just called after component is inserted into DOM. We will fetch books in this event
   * to display in the shelves.
   */
  componentDidMount() {
    // As component is just mounted, let's fetch all the books.
    this.fetchBooks();
  }

  /**
   * @description Fetch books to be displayed in shelves. Uses BooksAPI.getAll() API.
   */
  fetchBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prevState) => ({
          books: [...prevState.books, ...books]
        }))
      })
  }

  /**
   * @description Updates the shelf of the book.
   * @param {Object} bookUpdated - Book whose shelf is updated.
   * @param {string} updatedShelf - Updated shelf of the book.
   */
  updateBookShelf = (bookUpdated, updatedShelf) => {
    let booksCopy = this.state.books;
    // Let's first find the index of the book which we are trying to update. If this doesn't exist in the book already,
    // then let's add it (This will be the case if we are moving from "none" to any other shelf (Only in case of
    // search)).
    let bookIndex = booksCopy.findIndex((book) => {
      return book.id === bookUpdated.id;
    });

    bookUpdated.shelf = updatedShelf;
    // If book is already present in the state, then let's just update the shelf else add this book to array.
    bookIndex >= 0 ? booksCopy[bookIndex].shelf = updatedShelf : booksCopy.push(bookUpdated);

    // Let's update the state with this new books array (with updated value)
    this.setState(() => ({
      books: booksCopy
    }))
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {/* Lets render different components based on path. If path matches '/' which is root page then let's show list of bookshelves. */}
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelves bookshelves={this.bookshelves} books={books}
                           handleShelfUpdate={this.updateBookShelf}/>
            </div>
            <div className="open-search">
              <Link to='/search' className="open-search">Add a book</Link>
            </div>
          </div>
        )}/>
        {/* Lets render different components based on path. If path matches '/search' then lets render search page. */}
        <Route path='/search' render={({ history }) => (
          <SearchBooks onCreateContact={() => {
            history.push('/')
          }} shelfBooks={books} handleShelfUpdate={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }

}

export default BooksApp
