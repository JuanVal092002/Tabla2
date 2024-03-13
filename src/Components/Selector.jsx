import React from 'react';
import '../App.css'

const Selector = ({ handleChange }) => {
  return (
    <select className="select-records" onChange={handleChange}>
      <option value="5">Mostrar 5 registros</option>
      <option value="10">Mostrar 10 registros</option>
      <option value="15">Mostrar 15 registros</option>
      <option value="20">Mostrar 20 registros</option>
    </select>
  );
};

export default Selector;
