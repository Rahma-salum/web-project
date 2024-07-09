import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="background">
      <div className="container">
        <div className="center">
          <h1>Login</h1>
          <form>
            <div className="txt_field">
              <input type="text" name="text" required />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="password" name="password" required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forget Password?</div>
            <Link to='/dash'>
              <input name="submit" type="Submit" value="Login" />
            </Link>
            <div className="signup_link">
              <Link to='admin-dash'>Admin</Link>
              Not a Member? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
