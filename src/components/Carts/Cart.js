import React, { useContext, useState } from "react";
import cartcontext from "../../store/cartcontext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(cartcontext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasitems = cartCtx.items.length > 0;

  const cartitemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartitemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartitemRemoveHandler.bind(null, item.id)}
          onAdd={cartitemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasitems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = (userData) => {
    fetch("https://react-meals-6a3c5-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
  };

  return (
    <Modal onhidecart={props.onhidecart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span>$ {totalAmount}</span>
      </div>

      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
