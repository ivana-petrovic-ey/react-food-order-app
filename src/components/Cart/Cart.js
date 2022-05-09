import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = (
        <ul>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount:</span>
                <span>$ 35.62</span>
            </div>
            <div className="actions">
                <button onClick={props.onClose}>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
