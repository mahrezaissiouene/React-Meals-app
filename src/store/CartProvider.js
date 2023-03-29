import React from 'react'
import Cartcontext from './cartcontext';

function CartProvider(props) {

  const addItemTocartHandler = item => {
  };

  const removeItemFromcartHandler = id => { };


  const cartcontext = {
    items: [],
    totalAmount: 0,
    addItem: addItemTocartHandler,
    removeItem: removeItemFromcartHandler
  };

  return (
    <Cartcontext.Provider value={cartcontext} >

      {props.children}

    </Cartcontext.Provider>
  );
}

export default CartProvider