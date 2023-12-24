import React from 'react'
import styles from './PostCard.module.css'
import { AiFillHeart,AiOutlineComment } from 'react-icons/ai';
import axios from 'axios'
import { useState } from 'react';

const images = require.context('../../images', false, /\.(jpg|jpeg|png)$/);
const imagePaths = images.keys().reduce((acc, imagePath) => {
  acc[imagePath] = images(imagePath);
  return acc;
}, {});
const profileimages = require.context('../../profileimages', false, /\.(jpg|jpeg|png)$/);
const profileimagePaths = profileimages.keys().reduce((acc, imagePath) => {
  acc[imagePath] = profileimages(imagePath);
  return acc;
}, {});


const PostCard = (props) => {

  const array=props.item.likeslist;
  const isPresent=array.includes(props.item.sender);

  const dynamicStyles = {
    color: isPresent ? 'red' : 'white' ,
    fontSize:'30px'
    
  }; 
  const updateLikes=async()=>{    
    
    const formData = new FormData();
    formData.append('sender', props.item.sender.toString());
    formData.append('profilePic', props.item.profilePic.toString());
    
    // Convert FormData to a plain JavaScript object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    
    try {
      // Convert the formDataObject to JSON
      const formDataJSON = JSON.stringify(formDataObject);
    
      const response = await axios.post('http://localhost:8000/auth/updateLikes', formDataJSON, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      props.fetchData();
      console.log('Like success:', response.data);
    } catch (error) {
      console.error('Like fail:', error.response.data);
    }
  }
  const updateLikesn=async()=>{    
    
    const formData = new FormData();
    formData.append('sender', props.item.sender.toString());
    formData.append('profilePic', props.item.profilePic.toString());
    
    // Convert FormData to a plain JavaScript object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    
    try {
      // Convert the formDataObject to JSON
      const formDataJSON = JSON.stringify(formDataObject);
    
      const response = await axios.post('http://localhost:8000/auth/updateLikesn', formDataJSON, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      props.fetchData();
    
      console.log('Like success:', response.data);
    } catch (error) {
      console.error('Like fail:', error.response.data);
    }
  }
  const clickHandler=(e)=>{



    e.target.style.color = e.target.style.color === 'red' ? 'white' : 'red';
    if (e.target.style.color === 'red') {
      updateLikes(); 
    }else{
      updateLikesn(); 
    }

  }
  const commentHandler=async(e)=>{


      e.preventDefault();
      const input = e.target[0].value; 
      e.target[0].value="";
      const index=props.userData.length-1;
      const reviewData={
        text:input,
        owner:props.userData.username,
        id:props.item.id
      }

      try {
        const response = await axios.post('http://localhost:8000/auth/review', reviewData);
        console.log('Review successful:', response.data.user);
      } catch (error) {
        console.error('Error during review submission:', error.response ? error.response.data : 'Unknown error');
      }

  }




  return (
    <div className={styles.card} >

      <div hidden>{props.item.id}</div>


      <div className={styles.info} > 

        
      <img src={profileimagePaths[`./post${props.item.sender}.jpeg`]} alt="Profile Image" className={styles.profileimage} />
        <div className={styles.sender} >{props.item.sender}</div>

      </div>

        
        <br/>
        <img src={imagePaths[`./${props.item.profilePic}`]} alt="Profile Image" className={styles.image} />
        <div  style={{textAlign:'start',width:'450px',marginTop:'10px'}}>
            <AiFillHeart onClick={clickHandler} style={dynamicStyles}/>
            <div onClick={props.specificComment} style={{display:'inline-block'}} ><AiOutlineComment style={{fontSize:'30px',marginLeft:'10px'}} /></div>
        </div>
        <div className={styles.content} >{props.item.content}</div>

        <form onSubmit={commentHandler} >

            <input type="text" placeholder='Add a comment...' style={{backgroundColor:'black',marginTop:'20px',width:'380px',height:'35px',color:'white'}}  />
            <button style={{height:'43px',backgroundColor:'green',color:'white'}} >SEND</button>

        </form>
        




    </div>

  )
}

export default PostCard