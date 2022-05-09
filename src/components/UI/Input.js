import React from "react";


const Input = React.forwardRef((props, ref) => {
    return (
        <>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} type="text" />
        </>
    );
});

export default Input;
