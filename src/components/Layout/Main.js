import React from "react";
import "./Main.css";
import Meals from "../Meals/Meals";
import Image1 from "../../assets/bg1.jpg";

function Main(props) {
    return (
        <main>
            <section className="meals bg-image1" style={{ backgroundImage: `url(${Image1})` }}>
                <article className="mealsInfo">
                    <div className="container">
                        <h2>Delicious Food, delivered to you!</h2>
                        <p>Choose your favorite meal from your broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                        <p>All our meals are cooked with high-quality ingredients, just-in-time and by experienced chefs!</p>
                    </div>
                </article>
                <Meals />
            </section>
        </main>
    );
}

export default Main;
