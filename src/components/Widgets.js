// Widgets.js
import React from "react";
import "./Widgets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

const Widgets = () => {

  return (
    <div className="widgets">
      <div class="widgets__input">
        <span class="material-icons widgets__searchIcon"><FontAwesomeIcon icon={faSearch} /> </span>
        <input type="text" placeholder="Buscar" />
      </div>

      <div class="widgets__widgetContainer">
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  );

};

export default Widgets;
