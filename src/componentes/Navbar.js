import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from '../Firebase';
import './styles.css';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaUser } from 'react-icons/fa'; // Importamos los iconos necesarios
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [menuCategoriasAbierto, setMenuCategoriasAbierto] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        setUsuarioAutenticado(true);
      } else {
        setUsuarioAutenticado(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const cerrarSesion = () => {
    auth.signOut()
      .then(() => {
        setUsuarioAutenticado(false);
        navigate('/login');
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  const toggleMenuCategorias = () => {
    setMenuCategoriasAbierto(!menuCategoriasAbierto);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/Logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-menu">
        {usuarioAutenticado ? (
          <>
            <li className="nav-item">
              <NavLink to="/home" activeClassName="active" className="nav-link" exact>
                <FaHome className="nav-icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" className="nav-link">
                <FaInfoCircle className="nav-icon" />
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link" onClick={toggleMenuCategorias}>
                <span>Categorías</span>
              </div>
              {menuCategoriasAbierto && <DropdownMenu />}
            </li>
            <li className="nav-item">
              <NavLink to="/project" activeClassName="active" className="nav-link">
                <FaProjectDiagram className="nav-icon" />
                <span>Project</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="logout-button" onClick={cerrarSesion}>
                <FaUser className="nav-icon" />
                <span>Cerrar Sesión</span>
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink to="/login" activeClassName="active" className="nav-link">
                <FaUser className="nav-icon" />
                <span>Iniciar Sesión</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registro" activeClassName="active" className="nav-link">
                <FaUser className="nav-icon" />
                <span>Registrarse</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
