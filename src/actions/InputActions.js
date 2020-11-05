import { getGithub } from '../services/githubApi';

export const TEXT_SUBMIT = 'TEXT_SUBMIT';
export const textSubmit = text => ({
  type: TEXT_SUBMIT,
  payload: text
});

export const SET_USERS = 'SET_USERS';
export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const fetchedUsers = (users) => dispatch => {
  return getGithub(users)
    .then(userData => {
      dispatch(setUsers(userData));
    });
};
