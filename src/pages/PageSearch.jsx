// App.js
import React from "react";
import Widgets from "../components/Widgets";
import Sidebar2 from "../components/Sidebar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../css/PageSearch.css"; // Asegúrate de importar tus estilos CSS aquí

const PageSearch = () => {
  return (
    <div className="app">
      <Sidebar2 />
      <div className="container">
        <div className="pagesearch-container">
          <div class="Search__input">
            <span class="material-icons Search__searchIcon">
              <FontAwesomeIcon icon={faSearch} />{" "}
            </span>
            <input
              type="text"
              className="Search_containe"
              placeholder="Buscar en RedSocial"
            />
          </div>
        </div>
      </div>
      <div className="widgets-container">
        <Widgets /> {/* Coloca los widgets a la derecha */}
      </div>
    </div>
  );
};

export default PageSearch;
