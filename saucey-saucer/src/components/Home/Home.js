import React, { useState } from "react";
import { Card } from "react-bootstrap";
import SaucerLogo from "../../resources/saucer/saucer.jpg";
import BeerScroll from "../HorizontalScroll/BeerScroll";
function Home() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  };
  return (
    <div>
      <Card bg="dark" text="white" style={style}>
        <Card.Body>
          <img src={SaucerLogo} />
        </Card.Body>
      </Card>
      <hr style={{ border: "2px solid green" }} />
      <h3 style={{ color: "white" }}>Suggested For You</h3>
      <BeerScroll />
      <hr style={{ border: "2px solid green" }} />
      <h3 style={{ color: "white" }}>Popular at this Saucer</h3>
      <BeerScroll />
      <hr style={{ border: "2px solid green" }} />
      <h3 style={{ color: "white" }}>Events coming up</h3>
      <BeerScroll />
    </div>
  );
}

export default Home;
