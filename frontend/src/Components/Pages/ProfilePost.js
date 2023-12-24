import React from 'react'
import ProfilePostUnique from './ProfilePostUnique'

const ProfilePost = (props) => {

    const abc= props.postData.map((item, index) => 
    <ProfilePostUnique item={item}/>
)    

  return (
    <div style={{width:'52vw',marginLeft:'30vw',height:'400px',borderTop:'1px solid gray',paddingTop:'30px',display:'flex',gap:'28px',flexDirection:'row',flexWrap:'wrap'}} >

        {abc}

    </div>
  )
}

export default ProfilePost