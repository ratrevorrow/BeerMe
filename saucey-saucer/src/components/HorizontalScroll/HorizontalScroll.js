import React, { useState, useEffect } from 'react';
import './horizontal-scroll.css';
import { Card, Button } from 'react-bootstrap';

import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal';
import FatTire from '../../resources/beers/nb-fat-tire.png';
import Citradelic from '../../resources/beers/nb-citradelic.png';
import HoppyBlonde from '../../resources/beers/nb-hoppy-blonde.png';
import Ranger from '../../resources/beers/nb-ranger.png';
import SlowRide from '../../resources/beers/nb-slow-ride.png';
import { client } from '../../util/axios';

function HorizontalScroll(props) {
  const [scrollData, setScrollData] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  
  console.log(props);

  return (
    <div className="scrolling-wrapper-flexbox">
      <Card bg="dark" text="white">
        <Card.Body>
          <img src={Citradelic} />
          <Card.Title>{props.brewer}</Card.Title>
          <Card.Text>{props.name}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Checked in 15 mins ago</small>
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
