import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoritesCount(favorites.length);
    };

  
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    getFavorites(); 

    
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    document.body.classList.toggle('dark');
  };

  return (
    <nav>
       <div className="nav-title">
       <Link to="/">
          <img src="/DH.ico" alt="Logo" className="nav-icon" />
        </Link>
        <p>DH ODONTO</p>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favorites </Link>
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
