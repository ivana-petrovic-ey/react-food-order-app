import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
    return (
        <button onClick={props.onClick}>
            <span className="cart-svg">
                <CartIcon />
            </span>
            <span className="cart-text">Your Cart:</span>
            <span className="cart-number">3</span>
        </button>
    );
};

export default HeaderCartButton;