import React, { useState, useEffect } from "react";
import "./horizontal-scroll.css";
import { Card } from "react-bootstrap";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";

function BeerScroll(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [beers, setBeers] = React.useState(null);
  const [style, setStyle] = React.useState("");

  useEffect(() => {
    setStyle(props.beerStyle.style);
    getBeerList(props.beerStyle.beers);
  }, []);

  const getBeerList = beers => {
    setBeers(
      beers.map((beer, idx) => (
        <Card
          bg="dark"
          text="white"
          key={idx}
          onClick={() => setModalShow(true)}
        >
          <Card.Body>
            <Card.Title>{beer.brewery}</Card.Title>
            <Card.Text>
              {beer.name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Checked in 3 mins ago</small>
          </Card.Footer>
        </Card>
      ))
    );
  };

  return (
    <div>
      <hr style={{ border: "2px solid green" }} />
      <h3 style={{ color: "white" }}>{style}</h3>
      <div className="scrolling-wrapper-flexbox">{beers}</div>
    </div>
  );
}

export default BeerScroll;

{
  /* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */
}
