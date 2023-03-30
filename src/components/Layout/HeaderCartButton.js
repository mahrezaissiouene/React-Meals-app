import React from "react";
import { useContext , useEffect , useState} from 'react' ;


import CartIcon from "../Carts/CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartcontext from "../../store/cartcontext";


function HeaderCartButton(props) {
  const [btnIshighlighted , setbtnishighlighted ] = useState(false)

 const cartCtx = useContext(cartcontext);



 const numberOfCartItems = cartCtx.items.reduce( (curNumber , item) => { return curNumber + item.amount }, 0 ); 
  
 const m = btnIshighlighted ?  classes.bump : ' ';
 
 const btnClasses = classes.button + ' ' + m  ;

 useEffect( ()=> {
  if ( cartCtx.items.length === 0  ) { return ; }
  setbtnishighlighted(true);

  setTimeout(() => {
    setbtnishighlighted(false)
  }, 300);

  return () => {
    clearTimeout(timer)
  }

 } , [cartCtx] )

  return (
    <button className={ btnClasses } onClick={props.HonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
}

export default HeaderCartButton;
