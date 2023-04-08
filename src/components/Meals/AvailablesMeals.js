import classes from "./AvailablesMeals.module.css";
import MealsItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailablesMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchmeals = async () => {
      const response = await fetch(
        "https://react-meals-6a3c5-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].name,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    setisLoading(false);

    fetchmeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loadingmeals}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealslist = meals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};
export default AvailablesMeals;
