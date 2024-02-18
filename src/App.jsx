import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const API_URL = 'https://602e7c2c4410730017c50b9d.mockapi.io/users';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      {loading && <CircularProgress />}
      {!loading && error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <div className="user-list">
            <UserList users={users} handleUserClick={handleUserClick} />
          </div>
          <div className="user-details">
            <UserDetails selectedUser={selectedUser} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
