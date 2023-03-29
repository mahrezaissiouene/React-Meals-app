import React , {useContext} from "react";
import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import cartcontext from "../../../store/cartcontext";


function MealsItem(props) {
  const cartCtx = useContext(cartcontext);
  const price = props.price.toFixed(2);

  const addTocartHandler = amount =>{
   
    cartCtx.addItem({
      id : props.id , 
      name : props.name ,
      amount : amount ,
      price : props.price
    });
    console.log(props.id);

  }

  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={classes.description}> {props.description} </div>
        <div className={classes.price}> ${price} </div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addTocartHandler} />
      </div>
    </li>
  );
}

export default MealsItem;
