
const Input = (props) => {
    return (
        <>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} type="text" />
        </>
    );
};

export default Input;
