import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ text }) => (
  <section>{text}</section>
);

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
