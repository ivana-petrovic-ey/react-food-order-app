import { useRef, useState } from "react";

import Input from "../UI/Input";

const MealItemform = (props) => {
    const [amountIsValid, SetAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountToNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountToNumber < 1 || enteredAmountToNumber > 5) {
            SetAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountToNumber);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="meal-form">
                <Input
                    ref={amountInputRef}
                    label="Amount"
                    input={{ id: "amount_" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }}
                />
                <button>+ Add</button>
            
            </div>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemform;
