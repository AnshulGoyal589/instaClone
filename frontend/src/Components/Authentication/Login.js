import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; // Adjust the path based on your file structure

const Login = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ 
    username: '',
    password: '', 
    emailId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const formLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/login', formData);
      props.setUserDetails(response.data.user);
      navigate('/');
      console.log('Login successful:', response.data.user);
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : 'Unknown error');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />

        <label htmlFor="emailId">Email ID</label>
        <input type="text" id="emailId" name="emailId" value={formData.emailId} onChange={handleInputChange} />

        <div style={{marginTop:'20px',marginBottom:'10px'}} >New to INSTA? <Link to="/register" style={{textDecoration:'none',color:'blue'}} >SIGN UP</Link></div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
