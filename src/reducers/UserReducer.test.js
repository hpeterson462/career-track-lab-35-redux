import reducer from './UserReducer';
import { setUsers } from '../actions/InputActions';

describe('user reducer', () => {
  it('handles the SET_USERS action', () => {
    const state = {
      users: {},
      error: null
    };

    const action = setUsers({
      login: 'hpeterson462',
      name: 'Heather Peterson',
      followers_url: 'https://api.github.com/users/hpeterson462/followers',
      following_url: 'https://api.github.com/users/hpeterson462/following{/other_user}',
      html_url: 'https://github.com/hpeterson462'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      users: {
        login: 'hpeterson462',
        name: 'Heather Peterson',
        followers_url: 'https://api.github.com/users/hpeterson462/followers',
        following_url: 'https://api.github.com/users/hpeterson462/following{/other_user}',
        html_url: 'https://github.com/hpeterson462',
      },
      error: null
    });
  });
});
