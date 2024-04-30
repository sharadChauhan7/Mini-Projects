import React from "react";
import './modal.css'

function modal({quit}) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="head">
          <h2>Modal head</h2>
        </div>
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            dolores. Hic labore exercitationem, voluptatum perspiciatis ducimus
            enim, optio facere ex minus nam, earum at temporibus ullam fugiat
            laudantium corrupti alias! Deleniti quam error ipsum architecto
            neque iste nisi mollitia, sed nulla fuga consectetur aliquid ex
            laborum exercitationem reiciendis voluptatibus ducimus nostrum
            voluptates aperiam dolorum accusamus. Eveniet dolorum autem
            perferendis quidem, vero explicabo officiis voluptates blanditiis
            saepe, debitis quaerat! Perferendis repudiandae ullam, natus
            consequatur quia aspernatur adipisci doloremque reiciendis fugiat
          </p>
        </div>
        <button onClick={quit}>Close this</button>
      </div>
    </div>
  );
}

export default modal;
