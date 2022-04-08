import React from "react";
import "./Main.css";
import Image1 from "../../assets/bg1.jpg";

function Main(props) {
  return (
    <main>
      <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}>
       
      </div>
    </main>
  );
}

export default Main;