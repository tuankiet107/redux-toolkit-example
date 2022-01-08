import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './components/UsersList/UsersList';
import UsersSelected from './components/UsersSelected/UsersSelected';
import { useSelector } from 'react-redux';

function App() {
  const num = useSelector((state) => state.users.length);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Users List</Link>
          </li>
          <li>
            <Link to="/users-selected">Users Selected</Link>
            <span>{num}</span>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<UsersList />} />

        <Route path="/users-selected" element={<UsersSelected />} />
      </Routes>
    </Router>
  );
}

export default App;
