import React, { useEffect, useState } from "react";
import FotoPerfil from "./team-3.jpg";
import imageIcon from "./imagen.png"; // Importar el ícono de imagen
import "./TweetBox2.css";

function TweetBox2() {
  const [post, setPost] = useState("");
  const [foto, setFoto] = useState("");
  const [user, setUser] = useState("");

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  }
  async function handleFotoChange(e) {
    const base64 = await fileToBase64(e.target.files[0]);
    setFoto(`data:image/jpeg;base64,${base64}`);
  }

  async function HandleSetPost(e) {
    setPost(e.target.value);
    console.log(post);
  }

  async function addPost(e) {
    e.preventDefault();
    const Formdata = new FormData();

    Formdata.append("FOTO", foto);
    Formdata.append("TITULO", post);
    Formdata.append("ID_USUARIO", user.ID_USUARIO);
    const res = await fetch("http://localhost:8080/postear", {
      method: "POST",
      body: JSON.stringify({
        FOTO: foto,
        TITULO: post,
        ID_PERFIL: user.ID_USUARIO,
      }),
    });
    const data = await res.json();
    console.log(data);
  }
  useEffect(() => {
    const st = localStorage.getItem("user");
    if (st) {
      setUser(JSON.parse(st));
    }
    console.log(st);
  }, []);
  return (
    <div class="feed">
      <div class="tweetBox">
        <form>
          <div class="tweetbox__input">
            <img src={FotoPerfil} alt="" />
            <input
              type="text"
              placeholder="Que estas pensando?"
              onChange={HandleSetPost}
            />
          </div>

          <div className="flex-container">
            {foto && (
              <div className="image-preview">
                <img src={foto} alt="Previsualización" width="150" />
              </div>
            )}
            <div className="image-upload-container">
              <label htmlFor="foto" className="image-upload-label">
                <img
                  src={imageIcon}
                  alt="Cargar imagen"
                  className="image-icon"
                />
              </label>
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleFotoChange}
                style={{ display: "none" }} // Ocultar el input de archivo
              />
            </div>
            <button class="tweetBox__tweetButton" onClick={addPost}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox2;
