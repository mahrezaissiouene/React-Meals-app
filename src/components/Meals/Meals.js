import React, { Fragment } from "react";
import MealsSummury from "./MealsSummury";
import AvailablesMeals from "./AvailablesMeals";

function Meals() {
  return (
    <Fragment>
      <MealsSummury />
      <AvailablesMeals />
    </Fragment>
  );
}

export default Meals;
