import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context';
import { PRODUCTS } from '../../products'
import CartItem from './CartItem';
import styles from './Cart.module.css'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className={styles.cart}>
      <div>
        <h1>You cart items</h1>
      </div>
      <div className={styles.cartItems}>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product}/> 
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
       ) : (<h1>Your cart is empty</h1>
      )}
    </div>
  )
}
