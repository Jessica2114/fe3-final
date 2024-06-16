import React from "react";
import Card from "../Components/Card";

const Favs = () => {
  
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];



  return (
    <div>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
