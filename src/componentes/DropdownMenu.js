import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu category-menu-content">
      <Link to="/informe" className="dropdown-item">Informe</Link>
      <Link to="/otra-pagina" className="dropdown-item">Carta</Link>
      <Link to="/otra-pagina" className="dropdown-item">Documento</Link>
      <Link to="/otra-pagina" className="dropdown-item">Cotización</Link>
    </div>
  );
};

export default DropdownMenu;
