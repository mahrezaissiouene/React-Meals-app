import React from 'react'
import CartContext from './Cart-context'

const CartProvider = () => {

  const addItemTocartHandler = item => {

  };

  const removeItemFromcartHandler = id => {};


  const CartContext = {
    items : [] ,
    totalAmount : 0 ,
    addItem :addItemTocartHandler  ,
    removeItem : removeItemFromcartHandler 
  };

  return (
    <CartContext.Provider>

     {props.children}

    </CartContext.Provider>
  )
}

export default CartProvider