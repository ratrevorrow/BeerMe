import React, { useState } from "react";
import "./horizontal-scroll.css";
import { Card, Button } from "react-bootstrap";

import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";
import FatTire from "../../resources/beers/nb-fat-tire.png";
import Citradelic from "../../resources/beers/nb-citradelic.png";
import HoppyBlonde from "../../resources/beers/nb-hoppy-blonde.png";
import Ranger from "../../resources/beers/nb-ranger.png";
import SlowRide from "../../resources/beers/nb-slow-ride.png";

function HorizontalScroll() {
  const [scrollData, setScrollData] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="scrolling-wrapper-flexbox">
      <Card bg="dark" text="white" onClick={() => setModalShow(true)}>
        <Card.Body>
          <img src={FatTire} />
          <Card.Title>FatTire</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Citradelic} />
          <Card.Title>Citradelic</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in 15 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={HoppyBlonde} />
          <Card.Title>HoppyBlonde</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in 50 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Ranger} />
          <Card.Title>Ranger</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in 2 days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={SlowRide} />
          <Card.Title>SlowRide</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={FatTire} />
          <Card.Title>FatTire</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Citradelic} />
          <Card.Title>Citradelic</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={HoppyBlonde} />
          <Card.Title>HoppyBlonde</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Ranger} />
          <Card.Title>Ranger</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={SlowRide} />
          <Card.Title>SlowRide</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={FatTire} />
          <Card.Title>FatTire</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Citradelic} />
          <Card.Title>Citradelic</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={HoppyBlonde} />
          <Card.Title>HoppyBlonde</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Ranger} />
          <Card.Title>Ranger</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={SlowRide} />
          <Card.Title>Card title</Card.Title>
          <Card.Text>Lager</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in X days ago</small>
        </Card.Footer>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default HorizontalScroll;
