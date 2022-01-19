import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalDanshkar = ({ show, toggleModal }) => {
  console.log("showModal", show);
  return (
    <>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// const ModalDanshkar = ({ show }) => {
//   const [setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (

//   );
// };

export default ModalDanshkar;
