import React from 'react'
import PostCard from './PostCard'
import styles from './PostContainer.module.css'


const PostContainer = (props) => {

    const abc= props.homeData.map((item, index) => 
        <PostCard item={item} imageUrl={item.profilePic} userData={props.userData} fetchData={props.fetchData2} specificComment={props.specificComment}/>
    )    




  return (
    <div className={styles.container} >

           {abc}
    </div>
  )
}

export default PostContainer