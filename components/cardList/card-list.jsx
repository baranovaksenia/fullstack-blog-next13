import React from 'react'
import styles from './card-list.module.css'
import Pagination from '../pagination/pagination'
const CardList = () => {
  return (
	<div className={styles.container}>
    <Pagination/>
  </div>
  )
}

export default CardList