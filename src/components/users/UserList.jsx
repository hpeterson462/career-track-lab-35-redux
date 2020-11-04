import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedUsers } from '../../actions/InputActions';
import User from './User';

const UserList = () => {
  const text = useSelector(state => state.text.text);
  const users = useSelector(state => state.users.users);
  // console.log(state.users, 'sstttaaatee');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedUsers(text));
  }, []);

  return (
    <div>
      <p>
        {JSON.stringify(users)}
      </p>
    </div>
  );
};

export default UserList;
