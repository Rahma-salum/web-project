import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: ''
  });
  const [editUser, setEditUser] = useState({
    userId: '',
    userName: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/all/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/delete/user/${userId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post('http://localhost:8080/add/user', newUser);
      setShowAddModal(false);
      setNewUser({
        userName: '',
        email: '',
        address: '',
        phoneNumber: '',
        password: ''
      });
      fetchData();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditUser = async () => {
    try {
      await axios.put(`http://localhost:8080/update/user/${editUser.userId}`, editUser);
      setShowEditModal(false);
      setEditUser({
        userId: '',
        userName: '',
        email: '',
        address: '',
        phoneNumber: '',
        password: ''
      });
      alert("User updated successfully");
      fetchData();
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  const handleChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditUser(prevState => ({
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

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
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
                  <td>{formatPhoneNumber(user.phoneNumber)}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => { setEditUser(user); setShowEditModal(true); }}>Edit</button>
                    <button className="btn btn-danger ml-2" onClick={() => deleteUser(user.userId)}>Delete</button>
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
              <h5 className="modal-title">Add User</h5>
              <button type="button" className="close" aria-label="Close" onClick={() => setShowAddModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="userName" value={newUser.userName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" name="address" value={newUser.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" value={newUser.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" value={newUser.password} onChange={handleChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleAddUser}>Add</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      <div className={`modal ${showEditModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showEditModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit User</h5>
              <button type="button" className="close" aria-label="Close" onClick={() => setShowEditModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="userName" value={editUser.userName} onChange={(e) => handleChange(e, true)} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" name="email" value={editUser.email} onChange={(e) => handleChange(e, true)} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" name="address" value={editUser.address} onChange={(e) => handleChange(e, true)} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" value={editUser.phoneNumber} onChange={(e) => handleChange(e, true)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" value={editUser.password} onChange={(e) => handleChange(e, true)} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleEditUser}>Save</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
