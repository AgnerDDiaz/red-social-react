// TweetViewer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado en tu proyecto
import TweetBox from './TweetBox'; // Importa el componente TweetBox

function TweetViewer() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Función para obtener los tweets de la base de datos
    const fetchTweets = async () => {
      try {
        // Realizar una solicitud GET a tu backend para obtener los tweets
        const response = await axios.get('http://localhost:3001/tweets');
        // Actualizar el estado con los tweets obtenidos
        setTweets(response.data);
      } catch (error) {
        console.error('Error al obtener los tweets:', error);
      }
    };

    // Llamar a la función para obtener los tweets cuando el componente se monte
    fetchTweets();
  }, []); // El segundo parámetro [] asegura que este efecto se ejecute solo una vez, cuando el componente se monta

  return (
    <div className="container">
      <div className="tweet-box-container">
        <TweetBox /> {/* TweetBox en la parte superior */}
      </div>
      <div className="tweet-box-container">
        <div className="tweet-box">
          <h2>Visualizador de Tweets</h2>
          {/* Mapear los tweets y mostrarlos */}
          {tweets.map(tweet => (
            <div className="tweet" key={tweet.ID_POST}>
              <div className="tweet-content">
                <h3>{tweet.TITULO}</h3>
                <p>Fecha de publicación: {tweet.FECHA_PUBLICACION}</p>
                {/* Añadir más detalles del tweet según sea necesario */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TweetViewer;
