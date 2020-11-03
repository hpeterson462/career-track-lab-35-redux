import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, onSubmit }) => (
  <>
    <label htmlFor="text" placeholder="Enter username">Search:</label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      onSubmit={onSubmit}
    />
  </>
);

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Input;
