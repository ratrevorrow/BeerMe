import React, { useEffect } from "react";
import "./horizontal-scroll.css";
import { Card } from "react-bootstrap";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";

function BeerScroll(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modal, setModal] = React.useState(null);
  const [beers, setBeers] = React.useState(null);
  const [style, setStyle] = React.useState("");

  const openModal = (brewery, beer, beerstyle, description) => {
    setModalShow(true);
    setModal(
      <MyVerticallyCenteredModal
        show={true}
        onHide={() => setModalShow(false)}
        brewery={brewery}
        beer={beer}
        beerstyle={beerstyle}
        description={description}
      />
    );
  };

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
          onClick={() =>
            openModal(beer.brewery, beer.beer, beer.style, beer.description)
          }
        >
          <Card.Body>
            <Card.Title>{beer.brewery}</Card.Title>
            <Card.Text>
              {beer.beer} ● {beer.style}
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
      <h3 style={{ color: "white", marginLeft: "10px" }}>{style}</h3>
      <div className="scrolling-wrapper-flexbox">{beers}</div>
      {modalShow && modal}
      <div style={{ height: "40px" }}></div>
    </div>
  );
}

export default BeerScroll;
