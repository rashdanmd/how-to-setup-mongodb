import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const Preview = ({ show, handleClose, title, description, category }) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Header>{category}</Offcanvas.Header>
        <Offcanvas.Body>{description}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Preview;
