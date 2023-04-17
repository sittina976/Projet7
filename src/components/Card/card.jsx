import { Link } from "react-router-dom"

function Card({ card }) {
  return (
    <Link to={`/card/${card.id}`}>
      <img  className="image" src={card.cover} alt="" /> 
      <h2 className="title">{card.title}</h2>
    </Link>
  )
}

export default Card