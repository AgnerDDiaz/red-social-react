import React, { useState, useRef } from 'react';
import axios from 'axios';
import './TweetBox2.css';
import FotoPerfil from './team-3.jpg';
import imageIcon from './imagen.png'; // Importar el ícono de imagen

function TweetBox2() {

  const [foto, setFoto] = useState(null);

  const textareaRef = useRef(null);

  const handleFotoChange = (event) => {
    setFoto(event.target.files[0]);
    fileToBase64(foto)
  };

  const handleSubmitTweet = async (event) => {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;

    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('foto', foto);

      const response = await axios.post('http://localhost:44350/postear', formData);

      setFoto(null);

      console.log('Tweet publicado:', response.data);
    } catch (error) {
      console.error('Error al enviar el tweet:', error);
    }
  };

  function fileToBase64(file, callback) {
    const reader = new FileReader();
  
    reader.onload = function(event) {
      callback(event.target.result);
    };
  
    reader.onerror = function(event) {
      console.error("Error al leer el archivo:", event.target.error);
    };
  
    reader.readAsDataURL(file);
  }

  return (
    <div className="feed">
      <div className="tweetBox">
        <form onSubmit={handleSubmitTweet}>
          <div className="tweetbox__input">
            <img src={FotoPerfil} alt="" />
            <input type="text" id="titulo" placeholder="¿Qué estás pensando?" />
          </div>

          <div className="flex-container">
            <div className="image-upload-container">
              <label htmlFor="foto" className="image-upload-label">
                <img src={imageIcon} alt="Cargar imagen" className="image-icon" />
              </label>
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleFotoChange}
                style={{ display: 'none' }} // Ocultar el input de archivo
              />
            </div>
            {foto && (
              <div className="image-preview">
                <img src={URL.createObjectURL(foto)} alt="Previsualización" width="150" />
              </div>
            )}
            <button type="submit" className="tweetBox__tweetButton">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox2;
