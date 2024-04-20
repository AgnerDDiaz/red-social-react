// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Importa los estilos CSS del sidebar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos de FontAwesome
import socialIcon from './Logosinfondo.png';
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <img src={socialIcon} alt="Ícono de RedSocial" className="social-icon" />
      </div>
      {/* Título */}
      <h2>RedSocial</h2>
      {/* Lista de opciones */}
      <ul>
        <li>
          <Link to="/PageInicio">
            {" "}
            <FontAwesomeIcon icon={faHome} className="icon" /> {/* Ícono de Inicio */}
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/PageSearch">
            <FontAwesomeIcon icon={faSearch} className="icon" /> {/* Ícono de Buscar */}
              Buscar
          </Link>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUser} className="icon" /> {/* Ícono de Perfil */}
            Perfil
          </a>
        </li>
      </ul>
      {/* Botón de cerrar sesión */}
      <button className="logout-button">Cerrar Sesión</button>
    </div>
  );
}

export default Sidebar;
