import React from 'react'
import CartIcon from '../Carts/CartIcon'
import classes from './HeaderCartButton.module.css';


function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.HonClick} >
        <span className={classes.icon}>  <CartIcon />  </span>
        <span>Your Cart</span>
        <span className={classes.badge} > 3 </span>

    </button>
  )
}


export default HeaderCartButton
