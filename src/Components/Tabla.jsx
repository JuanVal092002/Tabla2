import React, { useState, useEffect } from 'react';
import '../App.css'

const Tabla = ({ names, descriptions }) => {
  const initialUsers = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length],
    description: descriptions[i % descriptions.length]
  }));

  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const [recordsToShow, setRecordsToShow] = useState(5);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setRecordsToShow(value);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchText) || user.description.toLowerCase().includes(searchText)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    setFilteredUsers(users.slice(0, recordsToShow));
  }, [recordsToShow, users]);

  return (
    <div className="table-container">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar..."
        onChange={handleSearch}
      />

      <select className="select-records" onChange={handleChange}>
        <option value="5">Mostrar 5 registros</option>
        <option value="10">Mostrar 10 registros</option>
        <option value="15">Mostrar 15 registros</option>
        <option value="20">Mostrar 20 registros</option>
      </select>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="records-info">{`${filteredUsers.length} de ${users.length} registros`}</p>
    </div>
  );
};

export default Tabla;
