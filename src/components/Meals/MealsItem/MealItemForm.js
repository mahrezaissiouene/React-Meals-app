import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

 {/* in this component we get the number of item and the amount */}

const MealItemForm = (props) => {
  const [AmountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {   
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    {
      /* entredamount is a string so we need to format it to a number by this way  */
    }

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);  {/* here we pass the data */}
  };
  return (
    <form className={classes.form}  onSubmit={submitHandler} >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!AmountIsValid && <p>Please enter a valid amount (1-5) </p>}
      {/* if amount is false show this message */}
    </form>
  );
};

export default MealItemForm;
