import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDentists(data))
      .catch((error) => console.error('Error fetching dentists:', error));
  }, []);

  const addToFavorites = (dentist) => {
    // Implementación básica para agregar al localStorage como favorito
    // Aquí podrías personalizar según tus necesidades
    console.log('Adding to favorites:', dentist);
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(dentist);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <main className="home">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
