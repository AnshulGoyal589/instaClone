import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import axios from 'axios'
import ProfilePost from './ProfilePost';

const images = require.context('../../profileimages', false, /\.(jpg|jpeg|png)$/);
const imagePaths = images.keys().reduce((acc, imagePath) => {
  acc[imagePath] = images(imagePath);
  return acc;
}, {});


const Profile = (props) => {

  let [postData,setPostData]=useState([]);
  let [followers,setFollowers]=useState(props.userData.followers.length);

  useEffect(()=>{


    const abc=async()=>{

      const postTemp={
        sender:props.userData.username
      }    
  
      console.log("ALPHA TEMP:   ",props.userData);
  
      try {
        const response = await axios.post('http://localhost:8000/auth/postShow', postTemp);
        setPostData(response.data);
          console.log('Profile post fething successfull:', response.data);
        } catch (error) {
          console.error('Error during fetching user posts:', error.response ? error.response.data : 'Unknown error');
        }
  
    }
  
    abc();


  },[])

  const follow=async()=>{

    const followTemp={
      sender:props.userData.username
    }    

    // console.log("POST TEMP:   ",postTemp);

    try {
      const response = await axios.post('http://localhost:8000/auth/followShow', followTemp);
      setFollowers(response.data);
        console.log('Followed successfull:', response.data);
      } catch (error) {
        console.error('Error during following:', error.response ? error.response.data : 'Unknown error');
      }

    

  }


  return (
    <div style={{backgroundColor:'black'}} >

        <img src={imagePaths[`./post${props.userData.username}.jpeg`]} alt="Profile Image" className={styles.image} />
        <div className={styles.username}>
            <div  >{props.userData.username}</div>
            <button onClick={follow} style={{backgroundColor:'#363636',color:'white',padding:'7px 20px',borderRadius:'8px',fontSize:'17px',justifyContent:'center',alignItems:'center',border:'none'}} >Follow</button>
        </div>
        <div className={styles.username2} >
            <span  >{postData.length} posts </span>
            <span  >{props.userData.following.length} following </span>
            <span  >{followers} followers</span>
        </div>
        <div className={styles.username3} style={{fontWeight:'1000'}}  >{props.userData.firstName} {props.userData.lastName}</div>
        <div  className={styles.username3}  >{props.userData.desc}</div>
        <ProfilePost postData={postData} />
        
 
    </div>
  )
}

export default Profile