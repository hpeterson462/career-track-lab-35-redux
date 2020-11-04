import reducer from './UserReducer';
import { setUsers } from '../actions/userActions';

describe('user reducer', () => {
  it('handles the SET_USERS action', () => {
    const state = {
      user: [],
      error: null
    };

    const action = setUsers([
      { login: 'hpeterson462' },
      { name: 'Heather Peterson' },
      { followers_url: 'https://api.github.com/users/hpeterson462/followers' },
      { following_url: 'https://api.github.com/users/hpeterson462/following{/other_user}' },
      { html_url: 'https://github.com/hpeterson462' },
      { repos_url: 'https://api.github.com/users/hpeterson462/repos' }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: [{ login: 'hpeterson462' },
      { name: 'Heather Peterson' },
      { followers_url: 'https://api.github.com/users/hpeterson462/followers' },
      { following_url: 'https://api.github.com/users/hpeterson462/following{/other_user}' },
      { html_url: 'https://github.com/hpeterson462' },
      { repos_url: 'https://api.github.com/users/hpeterson462/repos' }
      ],
      error: null
    });
  });
});
