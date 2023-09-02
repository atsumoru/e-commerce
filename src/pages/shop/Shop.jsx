import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import styles from './Shop.module.css'

export const Shop = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.shopTitle}>
            <h1>My Shop </h1>
        </div>
        <div className={styles.products}>
            {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
        </div>
        <footer>All rights reserved &copy;</footer>
    </div>
  )
}
