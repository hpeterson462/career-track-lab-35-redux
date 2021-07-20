import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, handleSubmit }) => (
  <>
    <label htmlFor="text">Search:</label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      placeholder="Enter username"
    />
    <button onClick={handleSubmit}>Submit</button>
  </>
);

// Input.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default Input;
