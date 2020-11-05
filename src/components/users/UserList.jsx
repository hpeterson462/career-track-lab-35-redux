import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedUsers } from '../../actions/InputActions';

const UserList = () => {
  const text = useSelector(state => state.text.text);
  const users = useSelector(state => state.users.users);
  const repos = useSelector(state => state.users.repos);
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
