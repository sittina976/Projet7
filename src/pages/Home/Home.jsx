

import Card from "../../components/Card/card";
import { getCards } from "../../utils/fonction/fonctions";
import { useState, useEffect } from "react";
import "../../assets/style.css";
import "./Home.css"

function Home() {
  console.log("5555");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const cards = await getCards();
      setCards(cards);
    }
    fetchCards();
  }, []);

  console.log(setCards);
  return (
    <div className="page-home contained">
      <div className="section1">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={require("../../assets/Background.png")} alt="" />
      </div>

      <div className="items">
      {cards.map((card) => {
          return [<Card key={card.id} card={card} />]
        })}
      </div>
    </div>
  );
}

export default Home;
