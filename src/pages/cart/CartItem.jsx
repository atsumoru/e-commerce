import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';
import styles from './CartItem.module.css'

export default function CartItem(props) {
    const {id, productName, productImage, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className={styles.cartItem}>
            <img src={productImage}/>
            <div className={styles.desc}>
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price} </p>
                <div className={styles.countHandler}>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={e => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
  )

}
