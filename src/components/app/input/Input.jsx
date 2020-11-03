import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text }) => (
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
  text: PropTypes.string.isRequired
};

export default Input;
