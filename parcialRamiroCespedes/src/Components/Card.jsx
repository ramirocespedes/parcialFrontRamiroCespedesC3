import React from 'react'
import styles from '../App.module.css';

export const Card = ({name, color}) => {
 

 
    return (
    <div className={styles.cardContainer}>

      <h2 className={styles.cardTitle}>Detalle</h2>
      <p className={styles.cardContent}>Hola {name}!</p>
      <p className={styles.cardContent}>Tu color favorito es: {color}</p>

    </div>
  )
}
