import { useContext } from "react";
import CartContext from "../../store/cart-context";

import "./MealItem.css";
import MealItemform from "./MealItemForm";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$ ${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className="listItemMeal">
            <div>
                <h3>{props.name}</h3>
                <p className="listitemDescription">{props.description}</p>
                <p className="listitemPrice">{price}</p>
            </div>
            <MealItemform onAddToCart={addToCartHandler} />
        </li>
    );
};

export default MealItem;
