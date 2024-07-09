import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: ''
  });
  const [currentUser, setCurrentUser] = useState({
    userId: null,
    userName: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    fetchData(); // Call fetchData function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/all/User');
      setUsers(response.data); // Assuming response.data is an array of user objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/Delete/user${userId}`);
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      if (editMode) {
        await axios.put(`http://localhost:8080/Update/user${currentUser.userId}`, currentUser);
      } else {
        await axios.post('http://localhost:8080/add/user', newUser);
      }
      setShowAddModal(false); // Close modal after adding user
      setEditMode(false);
      setNewUser({ // Reset newUser state after adding user
        userName: '',
        email: '',
        address: '',
        phoneNumber: '',
        password: ''
      });
      setCurrentUser({
        userId: null,
        userName: '',
        email: '',
        address: '',
        phoneNumber: '',
        password: ''
      });
      fetchData(); // Refresh data after adding user
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };

  const handleEditUser = (user) => {
    setCurrentUser({
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      password: user.password
    });
    setEditMode(true);
    setShowAddModal(true); // Open modal for editing
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editMode) {
      setCurrentUser(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setNewUser(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="container mt-5">
          <h1 className="text-center mb-4">User List</h1>
          <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Add User</button>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.password}</td>
                  <td>
                    <button onClick={() => handleEditUser(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.userId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      <div className={`modal ${showAddModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showAddModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editMode ? 'Edit User' : 'Add User'}</h5>
              <button type="button" className="close" aria-label="Close" onClick={() => {
                setShowAddModal(false);
                setEditMode(false);
                setCurrentUser({
                  userId: null,
                  userName: '',
                  email: '',
                  address: '',
                  phoneNumber: '',
                  password: ''
                });
              }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="userName" value={editMode ? currentUser.userName : newUser.userName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" name="email" value={editMode ? currentUser.email : newUser.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" name="address" value={editMode ? currentUser.address : newUser.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" value={editMode ? currentUser.phoneNumber : newUser.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" value={editMode ? currentUser.password : newUser.password} onChange={handleChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleAddUser}>{editMode ? 'Update' : 'Add'}</button>
              <button type="button" className="btn btn-secondary" onClick={() => {
                setShowAddModal(false);
                setEditMode(false);
                setCurrentUser({
                  userId: null,
                  userName: '',
                  email: '',
                  address: '',
                  phoneNumber: '',
                  password: ''
                });
              }}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
