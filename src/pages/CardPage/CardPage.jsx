import { useState, useEffect } from "react";
import { getCard } from "../../utils/fonction/fonctions";
import { useParams } from "react-router-dom";
import Article from "../../components/Article/article";
import "./CardPage.css";
import Caroussel from "../../components/Caroussel/Caroussel";

function CardPage() {
  const [card, setCard] = useState(null);
  const [slides, setSlides] = useState([]);
  const { cardId } = useParams();

  useEffect(() => {
    async function fetchCard(id) {
      const card = await getCard(id);
      if (card){
        setCard(card);
        setSlides(card.pictures);
      } 
    }

    fetchCard(cardId);

  }, []);



  return card ? (
    <div className="page-card contained">
      <Caroussel slides={slides} />
      <div className="page-card-second">
        <div className="flex top-row">
          <div>
            <h1>{card.title}</h1>
            <div className="location">{card.location}</div>
          </div>
          <div className="tags flex">
            {card.tags.map(function (tag) {
              return (
                <div className="tag" key={tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex ais middle-row">
          <div className="host-avatar flex ais jcc mlauto">
            <div className="name">{card.host.name}</div>
            <img src={card.host.picture} alt={card.host.name} />
          </div>
          <div className="stars flex mlauto">
            {Array(parseInt(card.rating))
              .fill()
              .map(function (v, i) {
                return <div className="star red" key={i}></div>;
              })}
            {5 - parseInt(card.rating) > 0
              ? Array(5 - parseInt(card.rating))
                  .fill()
                  .map(function (v, i) {
                    return <div className="star gray" key={i}></div>;
                  })
              : ""}
          </div>
        </div>
      </div>

      <div className=" card-description flex jcsb">
        <Article
          className="half"
          title="Description"
          content={card.description}
          direction="up"
        />
        <Article
          className="half"
          title="Equipements"
          content={card.equipments}
          direction="up"
        />
      </div>
    </div>
  ) : (
    <div className="bad-id">Cette page n'existe pas!</div>
  );
}
export default CardPage;
