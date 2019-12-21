import React, { useEffect } from "react";
import { Modal, Button, Accordion } from "react-bootstrap";
import QR from "../../resources/qr.png";

function MyVerticallyCenteredModal(props) {
  useEffect(() => {}, []);

  const openQR = () => {};

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>
            {props.brewery} ● {props.beer}
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{props.beerstyle}</h6>
        <p>{props.description}</p>
      </Modal.Body>
      <Accordion>
        <Modal.Footer>
          <Accordion.Toggle
            eventKey="1"
            style={{ border: "none", padding: "0px" }}
          >
            <Button onClick={() => openQR()} variant="success">
              Check In {props.beer}
            </Button>
          </Accordion.Toggle>
        </Modal.Footer>
        <Modal.Footer>
          <Accordion.Collapse eventKey="1">
            <img src={QR} />
          </Accordion.Collapse>
        </Modal.Footer>
      </Accordion>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
