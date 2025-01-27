import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/login';
  };

  return (
    <div className="navbar">
      <Link to="pages/reservations">Rezerwacje</Link>
      <Link to="/rooms">Pokoje</Link>
      <Link to="/guests">Goscie</Link>
      <Link to="/management">Zarzadzanie</Link>
      <button className="button" style={{ marginLeft: 'auto' }} onClick={handleLogout}>
        Wyloguj
      </button>
    </div>
  );
}

export default Navbar;
