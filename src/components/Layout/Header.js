import React from "react";
import HeaderCartButton from "../Cart/HeaderCartButton";
import "./Header.css";


const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className="nav">
                    <h1>Food Ordering App</h1>
                    <HeaderCartButton onClick={props.onShowCart}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
