      import React from 'react';

      function UserList({ users, handleUserClick }) {
        return (
          <div className="user-list">
            <div className="list-heading">
            </div>
            {users.map(user => (
              <div key={user.id} className="user-item" onClick={() => handleUserClick(user)}>
                <div className="avatar">
                  <img src={user.avatar} alt="No Image Fetched" />
                </div>
                <div className="user-details">
                  <h3>{user.profile.firstName} {user.profile.lastName}</h3>
                  <p className="job-title">{user.jobTitle}</p>
                </div>
              </div>
            ))}
          </div>
        );
      }

      export default UserList;
