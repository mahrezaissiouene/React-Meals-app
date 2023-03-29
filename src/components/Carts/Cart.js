import React, { useContext } from "react";
import cartcontext from "../../store/cartcontext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartcontext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasitems = cartCtx.items.length > 0;

  const cartitemRemoveHandler = (id) => {};

  const cartitemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartitemRemoveHandler.bind(null , item.id) }
          onAdd={cartitemAddHandler.bind(null , item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onhidecart={props.onhidecart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span>$ {totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onhidecart}>
          Close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
