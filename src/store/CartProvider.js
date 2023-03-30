import React, { useReducer } from "react";
import Cartcontext from "./cartcontext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

{
  /* reducer function */
}
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log('existingCartItemIndex  = ' + existingCartItemIndex);
    const existingCartItem = state.items[existingCartItemIndex];
    console.log('existingCartItem  = ' + existingCartItem);
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
      {
        /* state represente cartState , action.item grab the sent item , concat create a new array with adding the new item */
      }
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAcion] = useReducer(
    cartReducer,
    defaultCartState
  );
  {
    /* reducer function , initial value */
  }

  const addItemTocartHandler = (item) => {
    dispatchCartAcion({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromcartHandler = (id) => {
    dispatchCartAcion({ type: "REMOVE_ITEM", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemTocartHandler,
    removeItem: removeItemFromcartHandler,
  };

  return (
    <Cartcontext.Provider value={cartcontext}>
      {props.children}
    </Cartcontext.Provider>
  );
}

export default CartProvider;
