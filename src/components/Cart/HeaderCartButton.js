import { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    return (
        <button onClick={props.onClick}>
            <span className="cart-svg">
                <CartIcon />
            </span>
            <span className="cart-text">Your Cart:</span>
            <span className="cart-number">{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;