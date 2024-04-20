// Sidebar.js
import React from 'react';
import './Sidebar2.css'; // Importa los estilos CSS del sideb
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos de FontAwesome
import socialIcon from './Logosinfondo.png';
import { Link } from 'react-router-dom';

function Sidebar2({ changeScreen }) {
  return (

    <div className='body'>
      <div className="sidebar">
        {/* Imagen arriba del título */}
        <div className="icon-container">
          <img src={socialIcon} alt="Ícono de RedSocial" className="social-icon" />
        </div>
        <div className="icon-container">
        {/* Título */}
        <h2>EchoVerse</h2>
        {/* Lista de opciones */}
        </div>
        <i class="fab fa-twitter"></i>
        <Link to="/PageInicio" className="link-no-underline">
        <div class="sidebarOption">
          <span class="material-icons"><FontAwesomeIcon icon={faHome} className="icon" /> {/* Ícono de Inicio */}</span>
          <h2>Inicio</h2>
        </div>
        </Link>

        <Link to="/PageSearch" className="link-no-underline">
        <div class="sidebarOption">
          <span class="material-icons"><FontAwesomeIcon icon={faSearch} className="icon" /> {/* Ícono de Buscar */}</span>
          <h2>Buscar</h2>
        </div>
        </Link>

        <Link to="/PageSearch" className="link-no-underline">
        <div class="sidebarOption">
          <span class="material-icons"><FontAwesomeIcon icon={faUser} className="icon" /> {/* Ícono de Perfil */}</span>
          <h2>Perfil</h2>
        </div>
        </Link>

        <div className="icon-container">
        {/* Título */}
        <h2></h2>
        {/* Lista de opciones */}
        </div>

        <Link to="/PageInicio" className="link-no-underline">
        <div class="sidebarOption2">
          <span class="material-icons2"><FontAwesomeIcon icon={faPaperPlane} className="icon" /></span>
          <h2>Post</h2>
        </div>
        </Link>

      </div>
    </div>
  );
}

export default Sidebar2;
