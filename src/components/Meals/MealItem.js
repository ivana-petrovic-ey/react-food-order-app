import "./MealItem.css";
import MealItemform from "./MealItemForm";

const MealItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`;

    return (
        <li className="listItemMeal">
            <div>
                <h3>{props.name}</h3>
                <p className="listitemDescription">{props.description}</p>
                <p className="listitemPrice">{price}</p>
            </div>
            <div>
                <MealItemform/>
            </div>
        </li>
    );
};

export default MealItem;
