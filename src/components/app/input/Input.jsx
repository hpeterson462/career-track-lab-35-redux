import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="text">Search:</label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      placeholder="Enter username"
      onChange={handleChange}
    />
    <button>Submit</button>
  </form>
);

Input.propTypes = {
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
