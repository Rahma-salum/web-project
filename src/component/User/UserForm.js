import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [user, setUser] = useState({
    userName: '',
    address: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/add/user', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('User added successfully:', response.data);
    } catch (error) {
      console.error('There was an error adding the user:', error);
    }
  };

  return (
    <div className="container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <h4>User Name</h4>
            <input type="text" name="userName" placeholder="User name" value={user.userName} onChange={handleChange} />
          </div>

          <div className="col-8">
            <h4>Address</h4>
            <input type="text" name="address" placeholder="Address" value={user.address} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <h4>Email</h4>
            <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
          </div>

          <div className="col-8">
            <h4>Phone Number</h4>
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <br />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
