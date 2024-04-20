// App.js
import React from "react";
import Sidebar2 from "../components/Sidebar2";
import TweetBox2 from "../components/TweetBox2";
import Widgets from "../components/Widgets";
import "../css/PageInicio.css"; // Asegúrate de importar tus estilos CSS aquí
import Post from "../components/Post";

const PageInicio = () => {
  return (
    <div className="app">
      <Sidebar2 />
      <div className="container">
        <div className="tweet-box-container">
          <TweetBox2 /> {/* Coloca el TweetBox en el centro */}
        </div>
        <div className="post-container">
          <Post /> {/* Coloca los posts a la izquierda */}
        </div>
      </div>
      <div className="widgets-container">
        <Widgets /> {/* Coloca los widgets a la derecha */}
      </div>
    </div>
  );
};

export default PageInicio;
