import React from 'react';

function UserDetails({ selectedUser }) {
  if (!selectedUser) {
    return null; 
  }
  

  return (
    <div className="user-details-popup">
      <div className="user-details-content">
         <p className="user-info">Id: {selectedUser.id}</p>
        <img src={selectedUser.avatar} alt="No Image Fetched" />
        <p className="name-d">{selectedUser.profile.firstName} <span className="last-name">{selectedUser.profile.lastName}</span></p>
        <p className="job-title">{selectedUser.jobTitle}</p>
       
        <p className="user-info">Username: {selectedUser.profile.username}</p>
        <p className="user-info">Email: {selectedUser.profile.email}</p>
        <p className="user-info">Bio: {selectedUser.Bio}</p>
      </div>
    </div>
  );
}

export default UserDetails;
