import React from 'react'
import ReviewCard from './ReviewCard'
import styles from './ReviewContainer.module.css'
import { Link } from 'react-router-dom'

const ReviewContainer = (props) => {


   const abc= props.reviewData.map((item, index) => 
    <ReviewCard item={item}  />
  )
    
  return (
    <div className={styles.container } >
      <div style={{display:'flex',gap:'40px',paddingLeft:'70px'}}>
      <h1  >Comments</h1>
      <button onClick={props.remove} style={{backgroundColor:'red',color:'white',fontSize:'23px',display:'inline-block',position:'relative',height:'30px'}} >x</button>
      </div>
        {abc}
    </div>
  )
}

export default ReviewContainer