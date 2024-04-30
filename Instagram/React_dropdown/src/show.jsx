// import React from "react";
import Modal from "./modal";
import { useState } from "react";
function show() {
  let [modal, setModal] = useState(false);

  function toggelModal() {
    setModal(!modal);
  }
  return (
    <>
    {modal ? <Modal quit={toggelModal} /> : null}
    <div>
        <button onClick={toggelModal}>Open Modal</button>
    </div>
    
    </>
  );
}

export default show;
