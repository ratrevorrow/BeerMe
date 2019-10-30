import React, { useState } from "react";
import "./horizontal-scroll.css";
import { Card } from "react-bootstrap";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";

function BeerScroll() {
  const [modalShow, setModalShow] = React.useState(false);

  const beers = [
    {
      brewery: "New Belgium",
      beer: "Fat Tire",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Citradellic",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Hoppy Blonde",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Ranger",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Slow Ride",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Fat Tire",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Citradellic",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Hoppy Blonde",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Ranger",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Slow Ride",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Fat Tire",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Citradellic",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Hoppy Blonde",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Ranger",
      style: "Lager"
    },
    {
      brewery: "New Belgium",
      beer: "Slow Ride",
      style: "Lager"
    }
  ];

  const beerList = beers.map((beer, idx) => (
    <Card bg="dark" text="white" key={idx} onClick={() => setModalShow(true)}>
      <Card.Body>
        <Card.Title>{beer.brewery}</Card.Title>
        <Card.Text>
          {beer.beer}●{beer.style}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Checked in 3 mins ago</small>
      </Card.Footer>
    </Card>
  ));

  return (
    <div className="scrolling-wrapper-flexbox">
      {beerList}{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default BeerScroll;
