import React from 'react'
import PropTypes from "prop-types";

const Author = (props) => {

  // Let's get the authorName from passed props.
  const { authorName } = props;

  return (
    <div>
      {/* Rendering book author name */}
      {authorName}
    </div>
  )

};

// Defining propTypes.
Author.propTypes = {
  authorName: PropTypes.string.isRequired
};

export default Author