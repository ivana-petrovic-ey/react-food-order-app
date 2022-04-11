// import "./MealItem.css";

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <li className="listitemMeal">
      <div>
        <h3>{props.name}</h3>
        <p className="listitemDescription">{props.description}</p>
        <p className="listitemPrice">{price}</p>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
