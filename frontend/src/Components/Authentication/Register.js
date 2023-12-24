import React from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import './register.css'; // Import the CSS for the registration component

const Register = () => {
  const navigate = useNavigate();
  const registerHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', e.target.username.value);
    formData.append('password', e.target.password.value);
    formData.append('emailId', e.target.emailId.value);
    formData.append('pic', e.target.pic.files[0]); 
    formData.append('firstName', e.target.firstName.value); 
    formData.append('lastName', e.target.lastName.value );
    formData.append('desc', e.target.desc.value); 

    try { 
      const response = await axios.post('http://localhost:8000/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error during registration:', error.response.data);
    }

    navigate('/login');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={registerHandle} encType="multipart/form-data">

       
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="lastName" style={{marginLeft:'220px'}} >Last Name</label><br/>
        <input type="text" id="firstName" name="firstName" style={{width:"250px"}} />

        <input type="text" id="lastName" name="lastName" style={{width:"250px",marginLeft:'27px'}} /><br /><br />
       

        <label htmlFor="username">Username</label><br />
        <input type="text" id="username" name="username" /><br /><br />

        <label htmlFor="desc">Desc</label><br />
        <input type="text" id="desc" name="desc" /><br /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password" /><br /><br />

        <label htmlFor="emailId">Email ID</label><br />
        <input type="text" id="emailId" name="emailId" /><br /><br />

        <label htmlFor="pic">Profile Photo</label><br />
        <input type="file" id="pic" name="pic" /><br /><br />
        
        <div style={{marginTop:'20px',marginBottom:'10px'}} >Already have an account? <Link to="/login" style={{textDecoration:'none',color:'blue'}}  >SIGN IN</Link></div>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Register;
