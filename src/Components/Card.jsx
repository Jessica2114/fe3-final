import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, addToFavorites }) => {

  const addFav = () => {
    addToFavorites({ id, name, username });
    
    alert(`¡${name} ha sido añadido a favoritos con éxito!`);
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" className="dentist-image" />
      <Link to={`/dentist/${id}`} className="detail-link">
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">
      <img src="/favicon.png" alt="Add to favorites" className="favIcon" />
      </button>
    </div>
  );
};

export default Card;
