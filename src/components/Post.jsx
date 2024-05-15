import React, { useEffect, useState } from "react";
import "./Post.css";
// import Feed from "./Feed";
import FotoPerfil from "./team-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRepeat, faShare } from "@fortawesome/free-solid-svg-icons"; // Importa los íconos de FontAwesome

function Post() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  async function getPost() {
    const res = await fetch("http://localhost:8080/postear");
    const data = await res.json();

    let st = localStorage.getItem("user");
    if (st) {
      setUser(JSON.parse(st));
    }
    setPosts(data);
  }

  useEffect(() => {
    (async () => {
      await getPost();
    })();
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => {
        return (
          <div class="post">
            <div class="post__avatar">
              <img src={FotoPerfil} alt="" />
            </div>
            {/* <span>{post.FECHA_PUBLICACION}</span> */}
            <div class="post__body">
              <div class="post__header">
                <div class="post__headerText">
                  <h3>
                    {user.NOMBRE}
                    <span class="post__headerSpecial">
                      <span> </span>
                      {user.APELLIDO}
                    </span>
                  </h3>
                </div>
                <div class="post__headerDescription">
                  <p>{post.TITULO}</p>
                </div>
              </div>
              <img src={post.FOTO} alt="" />
              <div class="post__footer">
                <span class="material-icons">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{post.COUNT_LIKES}</span>
                </span>
                <span class="material-icons">
                  <FontAwesomeIcon icon={faRepeat} />
                  <span>{post.COUNT_COMENTARIOS}</span>
                </span>
                <span class="material-icons">
                  <FontAwesomeIcon icon={faShare} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
