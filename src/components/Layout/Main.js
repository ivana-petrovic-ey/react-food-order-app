import React from "react";
import "./Main.css";
import Meals from "../Meals/Meals";
import Image1 from "../../assets/bg1.jpg";

function Main(props) {
  return (
    <main>
        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div> 
        <section className="meals">
            <div className="container">
                <div className="mealsInfo">
                    <h2>Delicious Food, delivered to you!</h2>
                    <p>
                        Choose your favorite meal from your broad selection of available meals
                        and enjoy a delicious lunch or dinner at home.
                    </p>
                    <p>
                        All our meals are cooked with high-quality ingredients, just-in-time and
                        by experienced chefs!
                    </p>
                </div>
                <Meals/>
            </div>
        </section>
    </main>
  );
}

export default Main;