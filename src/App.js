import { useState } from "react";

import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} />
            <Main />
        </>
    );
}

export default App;
