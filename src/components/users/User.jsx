import React from 'react';
import PropTypes from 'prop-types';

const User = ({
  login,
  name,
  followers_url,
  following_url,
  html_url,
  repos_url
}) => (
    <>
      <p>{login}</p>
      <p>{name}</p>
      <p>{followers_url}</p>
      <p>{following_url}</p>
      <p>{html_url}</p>
      <p>{repos_url}</p>
    </>
  );

User.propTypes = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers_url: PropTypes.string.isRequired,
  following_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired
};

export default User;
