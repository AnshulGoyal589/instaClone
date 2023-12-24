import React from 'react'
import styles from './ReviewCard.module.css'

const ReviewCard = (props) => {
  return (
    <div className={styles.review} >
        
        <div className={styles.owner} >{props.item.text}</div>
        <div className={styles.text} >~{props.item.owner}</div>
        
    </div>
  )
}

export default ReviewCard