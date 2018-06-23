import React, { Component } from 'react'
import PropTypes from "prop-types";

class BookShelfChanger extends Component {

  state = {
    currentShelf: ''
  };

  constructor(props) {
    super(props);
    // Let's check the current shelf and set accordingly.
    this.state = {
      currentShelf: props.currentShelf
    }
  }

  handleShelfChange = (event) => {
    event.preventDefault();
    // Let's update the shelf so that we can show correctly in the BookShelfChanger that which shelf is currently selected.
    this.setState({ currentShelf: event.target.value });
    // Now let's tell book to update its shelf so that it will get moved to right place.
    this.props.onShelfChange(event.target.value)
  };

  render() {
    return (
      // Let's render Shelf changer.
      <div className="book-shelf-changer">
        <select onChange={this.handleShelfChange} value={this.state.currentShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

// Defining propTypes.
BookShelfChanger.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
};

export default BookShelfChanger