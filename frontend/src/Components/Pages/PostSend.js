import React from 'react';
import axios from 'axios';
import './PostSend.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const PostSend = (props) => {
  const navigate=useNavigate();
  const postHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', e.target.content.value);
    formData.append('sender', props.userData.username);
    formData.append('pic', e.target.pic.files[0]); // Append the file
    formData.append('id', uuid()); // Append the file

    try {
      const response = await axios.post('http://localhost:8000/auth/send', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      navigate('/');
      console.log('Post made successfully:', response.data);
    } catch (error) {
      console.error('Error during making POST:', error.response.data);
    }
  };

  return (
    <form onSubmit={postHandle} className="post-send-form" encType="multipart/form-data">

            <h1>MAKE THE POST</h1>
      
            <label htmlFor="pic" className="label-style">POST IMAGE</label><br />
            <input type="file" id="pic" name="pic" className="input-style" /><br /><br />


            <label htmlFor="content" className="label-style">Content</label><br />
            <textarea cols={80} rows={10} type="text" id="content" name="content" className="input-style" /><br /><br />

      <button type="submit" className="button-style">MAKE THE POST</button>
    </form>
  );
};

export default PostSend;
