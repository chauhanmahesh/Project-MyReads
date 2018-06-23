import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  constructor(props) {
    super(props);
    // Just to make sure that proper search results will be displayed and also to avoid making
    // calls for each character user types, let's have some timeout. So the idea is to search after some delay so that
    // user can types what they want to type and then only we will make search request. Let's initialise the timeout to
    // be 0 now.
    this.timeout = 0;
  }

  state = {
    searchQuery: '',
    searchResults: []
  };

  /**
   * @description Updates the search query based on what user types.
   * @param {string} query
   * @param {boolean} withDelay - whether we want to delay the search API call or not. If yes, we will wait for 300ms
   *   before making search API call. This is to optimize the app performance and to avoid excess API calls.
   */
  updateSearchQuery = (query, withDelay) => {
    // Now let's update the query state.
    this.setState(() => ({
      searchQuery: query.trim()
    }));

    // If its there, lets clear the timeout first.
    if (this.timeout) clearTimeout(this.timeout);
    // Let's set the timeout for 300 ms
    this.timeout = setTimeout(() => {
      this.searchBooks(query)
    }, withDelay ? 300 : 0);
  };

  /**
   * @description Search books which matches the query using BooksAPI.search() API.
   * @param {string} query
   */
  searchBooks = (query) => {
    // Let's search books only if query is not empty. We know if we will search empty string, the result will be
    // empty or error, so let's not even bother to call.
    query !== '' ?
      BooksAPI.search(query)
        .then((books) => {
          this.updateSearchResults(books)
        })
      : this.updateSearchResults([])
  };

  /**
   * @description Updates search results.
   * @param {array} books - searched books.
   */
  updateSearchResults = (books) => {
    const { shelfBooks } = this.props;
    // Now there is a chance that when we searched, there might be some error or may be there is no result. So let's
    // see did we get what we expected or not.
    // We were expecting an array to be returned from the API call.
    let searchedResult = books !== undefined && Array.isArray(books) ? books : [];

    // When we get results from search API, there is no shelf information in that. We don't know actually that books
    // which came in result belongs to which shelf. But as we already have books in our shelves, we can basically match
    // with that. If there is any book in search result which we also have in our shelves then we can set right shelf
    // information else it will be in 'none'.

    // So let's go through each search result and update shelf in it.
    searchedResult.forEach((searchBook) => {
      let bookIndex = shelfBooks.findIndex((book) => {
        return book.id === searchBook.id;
      });
      searchBook.shelf = bookIndex >= 0 ? shelfBooks[bookIndex].shelf : 'none'
    });

    // Let's update the state with results.
    this.setState(() => ({
      searchResults: searchedResult
    }))
  };

  /**
   * @description Clears the search query in one go.
   */
  clearSearch = () => {
    // Let's clear the search query. Also we don't want to wait for the search to clear. So let's not delay in that
    // case.
    this.updateSearchQuery('', false)
  };

  render() {
    const { searchQuery, searchResults } = this.state;
    const { handleShelfUpdate } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* If user wants to go back to previous screen. */}
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={searchQuery}
                   onChange={(event) => this.updateSearchQuery(event.target.value, true)}/>
          </div>
          {
            // To clear the search query, let's render a clear search button.
            searchQuery !== '' && (
              <button onClick={() => this.clearSearch()}
                      className='clear-search'/>
            )
          }
        </div>
        {/* Let's render search results (books). */}
        <div className="search-books-results">
          <Books books={searchResults} handleShelfUpdate={handleShelfUpdate}/>
        </div>
      </div>
    )
  }

}

SearchBooks.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default SearchBooks;