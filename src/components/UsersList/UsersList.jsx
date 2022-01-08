import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';

const UsersList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const fetchData = async (page) => {
    const res = await fetch('https://gorest.co.in/public/v1/comments?page=' + page);
    return res.json();
  };
  const { data, status } = useQuery(['users', page], () => fetchData(page));

  const handleSubmit = (user) => {
    const action = addUser(user);
    dispatch(action);
  };

  let result;
  if (status === 'loading') {
    result = <div className="loading">Loading ...</div>;
  }
  if (status === 'error') {
    result = <div>Error fetching data</div>;
  }
  if (status === 'success') {
    result = (
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user) => {
            const userExist = users.find((item) => item.id === user.id);
            if (!userExist) {
              return (
                <tr key={user.id} className="user-list-item">
                  <td style={{ width: '400px' }}>
                    <div className="user-email">{user.email}</div>
                  </td>
                  <td style={{ width: '300px' }}>
                    <div className="user-name">{user.name}</div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button onClick={() => handleSubmit(user)}>Add</button>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={user.id} className="user-list-item">
                  <td style={{ width: '400px' }}>
                    <div className="user-email">{user.email}</div>
                  </td>
                  <td style={{ width: '300px' }}>
                    <div className="user-name">{user.name}</div>
                  </td>
                  <td style={{ textAlign: 'center' }}>Added</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div className="users-list">
      <h2>Users List</h2>

      <div className="pagination">
        <button onClick={() => setPage(1)}>Page 1</button>
        <button onClick={() => setPage(2)}>Page 2</button>
        <button onClick={() => setPage(3)}>Page 3</button>
      </div>
      {result}
    </div>
  );
};

export default UsersList;
