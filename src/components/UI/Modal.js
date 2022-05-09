import "./Modal.css";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className="modalOverlay">
            <div className="content">{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            <Backdrop onClose={props.onClose}/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    );
};

export default Modal;
