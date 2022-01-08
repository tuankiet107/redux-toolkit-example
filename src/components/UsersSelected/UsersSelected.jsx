import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/userSlice';

const UsersSelected = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleSubmit = (user) => {
    const action = removeUser(user);
    dispatch(action);
  };

  let result;
  if (!users.length) {
    result = <div className="empty">Empty</div>;
  }
  if (users.length) {
    result = (
      <table>
        <thead>
          <tr>
            <td>#</td>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="user-list-item">
              <td>{index + 1}</td>
              <td style={{ width: '400px' }}>
                <div className="user-email">{user.email}</div>
              </td>
              <td style={{ width: '300px' }}>
                <div className="user-name">{user.name}</div>
              </td>
              <td style={{ textAlign: 'center' }}>
                <button onClick={() => handleSubmit(user)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="users-list-selected">
      <h2>Users Selected</h2>
      {result}
    </div>
  );
};

export default UsersSelected;
