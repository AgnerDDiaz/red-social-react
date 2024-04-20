import React, { useState, useRef } from 'react';
import axios from 'axios';
import './TweetBox.css'; // Importar los estilos CSS
import imageIcon from './imagen.png'; // Importar el ícono de imagen


function TweetBox() {
  const [titulo, setTitulo] = useState('');
  const [comentario, setComentario] = useState('');
  const [foto, setFoto] = useState(null); // Para la imagen
  const [idPerfil, setIdPerfil] = useState(1); // ID del perfil (puedes obtenerlo de la autenticación)

  const textareaRef = useRef(null); // Referencia al textarea

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
    // Ajustar el desplazamiento hacia abajo del textarea
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  };

  const handleFotoChange = (event) => {
    // Manejar la selección de la imagen
    setFoto(event.target.files[0]);
  };

  const handleSubmitTweet = async (event) => {
    event.preventDefault();

    try {
      // Crear un objeto FormData para enviar el título y la imagen al backend
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('comentario', comentario);
      formData.append('foto', foto);
      formData.append('1', idPerfil);

      // Enviar la solicitud POST al backend
      await axios.post('http://localhost:3001/tweets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Especificar el tipo de contenido
        },
      });

      // Limpiar los campos después de enviar el tweet
      setTitulo('');
      setComentario('');
      setFoto(null);

      // Manejar cualquier lógica adicional después de enviar el tweet (por ejemplo, actualizar la lista de tweets)
    } catch (error) {
      console.error('Error al enviar el tweet:', error);
      // Manejar el error (mostrar un mensaje de error al usuario, etc.)
    }
  };

  return (
    <div className='tweet-box-container'>
        <div className="tweet-box">
        <h2>Crear Nuevo Tweet</h2>
        <form onSubmit={handleSubmitTweet}>
            <div>
            <input
                type="text"
                id="titulo"
                value={titulo}
                onChange={handleTituloChange}
                placeholder="Titulo"
                maxLength={70}
            />
            </div>
            <textarea
            ref={textareaRef} // Asignar la referencia al textarea
            value={comentario}
            onChange={handleComentarioChange}
            placeholder="maximo de 280 letras."
            maxLength={280}
            />
            <div className="flex-container"> {/* Contenedor para la imagen y el botón */}
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
                    {foto && (
                    <div className="image-preview">
                        <img src={URL.createObjectURL(foto)} alt="Previsualización" width="150" />
                    </div>
                    )}

                </div>
                <button type="submit">Post</button> {/* Botón de enviar */}
            </div>
        </form>
        </div>
    </div>
  );
}

export default TweetBox;
