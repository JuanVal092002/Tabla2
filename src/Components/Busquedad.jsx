import React from 'react';
import '../App.css'

const Busqueda = ({ handleSearch }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Buscar..."
      onChange={handleSearch}
    />
  );
};

export default Busqueda;
