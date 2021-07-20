import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedUsers, setUsers } from '../../actions/userActions';
import User from './User';

const UserList = () => {
  const users = useSelector(state => state.users.list);
  console.log(users, 'ssttttaaattee');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedUsers()
      .then(users => {
        dispatch(setUsers(users));
      }))
  }, []);

  const userElements = users.map(user => (
    <li key={user.login}>
      <User {...user} />
    </li>
  ));

  return (
    <ul>
      {userElements}
    </ul>
  );
};

export default UserList;
