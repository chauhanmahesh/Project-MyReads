import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelves from './Bookshelves'
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {

  state = {
    books: []
  };

  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // };

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

  componentDidMount() {
    // As component is just mounted, let's fetch all the books.
    this.fetchBooks();
  }

  // Let's fetch all books using BooksAPI and update the state.
  fetchBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prevState) => ({
          books: [...prevState.books, ...books]
        }))
      })
  }

  // Let's update book shelf.
  updateBookShelf = (bookId, updatedShelf) => {
    let booksCopy = this.state.books;
    // Let's first find the index of the book which we are trying to update.
    let bookIndex = booksCopy.findIndex((book) => {
      return book.id === bookId;
    });
    // Let's update shelf.
    booksCopy[bookIndex].shelf = updatedShelf;
    // Let's update the state with this new books array (with updated value)
    this.setState(() => ({
      books: booksCopy
    }))
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelves bookshelves={this.bookshelves} books={this.state.books} handleShelfUpdate={this.updateBookShelf}/>
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

export default BooksApp
