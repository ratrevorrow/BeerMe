import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import BeerScroll from "../HorizontalScroll/BeerScroll";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";

function SearchBeers(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [allBeers, setAllBeers] = React.useState(null);

  useEffect(() => {
    getAllBeers(props.allBeers);
  }, []);

  const getAllBeers = allBeers => {
    setAllBeers(
      allBeers.map((style, idx) => <BeerScroll beerStyle={style} key={idx} />)
    );
  };

  return <div>{allBeers}</div>;
}

export default SearchBeers;
