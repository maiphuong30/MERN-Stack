import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt,FaKey } from 'react-icons/fa';
import './dangnhap.css';
async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
  return(
    <div class="d-flex justify-content-center h-100 mt-4">
            <div class="card">
        <div class="card-header">
            <h3>Sign In</h3>
        </div>
        <div class="card-body">
            <form onSubmit={handleSubmit}>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><FaUserAlt size={30}/></span>
                    </div>
                    <input type="text" class="form-control" placeholder="username"
                    name="username"
                    onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><FaKey size={30}/></span>
                    </div>
                    <input type="password" class="form-control" placeholder="password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div class="row align-items-center remember">
                    <input type="checkbox"/>Remember Me
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" class="btn btn-warning float-right login_btn" />
                </div>
            </form>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-center links">
                Don't have an account?<a href="register">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
            </div>
        </div>
    </div>
</div>
  )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
