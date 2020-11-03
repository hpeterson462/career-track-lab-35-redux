import { getGithub } from '../services/githubApi';

export const SET_USERS = 'SET_USERS';
export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const fetchedUsers = () => dispatch => {
  getGithub()
    .then(users => {
      dispatch(setUsers(users));
    });
};
