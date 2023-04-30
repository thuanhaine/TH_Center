import React from "react";
import "./Cards.scss";
import { CardsData } from "./CardsData";
import Card from "../card/Card";

function Cards() {
  return (
    <div className="cards">
      {CardsData.map((card, id) => {
        return (
          <div className="container" key={id}>
            <Card data={card} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
