import React from 'react'


const images = require.context('../../images', false, /\.(jpg|jpeg|png)$/);
const imagePaths = images.keys().reduce((acc, imagePath) => {
  acc[imagePath] = images(imagePath);
  return acc;
}, {});


const ProfilePostUnique = (props) => {
  return (
        
    
    <img src={imagePaths[`./${props.item.profilePic}`]} alt="Profile Image" style={{height:'160px',width:'130px',border:'2px solid white'}}  />

  )
}

export default ProfilePostUnique