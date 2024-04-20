import React from "react"
import './Post.css';
import Feed from "./Feed";
import FotoPerfil from "./team-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRepeat, faShare } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos de FontAwesome

function Post() {

    return (

        <div className="feed">
        <div class="post">
                <div class="post__avatar">
                <img
                    src={FotoPerfil}
                    alt=""
                />
                </div>

                <div class="post__body">
                <div class="post__header">
                    <div class="post__headerText">
                    <h3>
                        Somanath Goudar
                        <span class="post__headerSpecial"><span> </span>@somanathg</span>
                    </h3>
                    </div>
                    <div class="post__headerDescription">
                    <p>Nueva Foto de perfil mis amores.</p>
                    </div>
                </div>
                <img
                    src= {FotoPerfil}
                    alt=""
                />
                <div class="post__footer">
                    <span class="material-icons"><FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span class="material-icons"><FontAwesomeIcon icon={faRepeat} /></span>
                    <span class="material-icons"><FontAwesomeIcon icon={faShare} /></span>
                </div>
                </div>
            </div>
        </div>

    );

}

export default Post;