import React from "react";
import "../css/RecuperarPage.css";
import socialIcon from "../components/Logosinfondo.png";

const RecuperarPage = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="icon-container">
          <img
            src={socialIcon}
            alt="Ícono de RedSocial"
            className="social-icon"
          />
        </div>
        <div className="icon-container">
          {/* Título */}
          <h2>EchoVerse</h2>
          {/* Lista de opciones */}
        </div>
        <div className="icon-container">
          {/* Título */}
          <h2>Recuperar Contraseña</h2>
          {/* Lista de opciones */}
        </div>
        <input type="text" placeholder="Correo" name="EMAIL" />
        <button type="submit">Recuperar</button>
      </form>
    </div>
  );
};

export default RecuperarPage;
