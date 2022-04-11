import MealItem from "./MealItem";
import "./Meals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = (props) => {
  const mealsList = DUMMY_MEALS.map(el => <MealItem key={el.id} name={el.name} description={el.description} price={el.price}/>);

  return (
    <div className="mealsListContainer">
        <ul>{mealsList}</ul>
    </div>
  );
};

export default Meals;
