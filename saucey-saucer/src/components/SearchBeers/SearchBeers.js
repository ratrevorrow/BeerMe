import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import BeerScroll from '../HorizontalScroll/BeerScroll';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal';
import { Input } from 'antd';

function SearchBeers(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [allBeers, setAllBeers] = React.useState(null);
  const [filteredBeers, setFilteredBeers] = React.useState(null);

  useEffect(() => {
    setAllBeers(props.allBeers);
  }, []);

  const getAllBeers = (filter) => {
    const beersFiltered = allBeers.filter(obj => {
      return obj.style.toLowerCase().includes(filter);
    });
    
    setFilteredBeers(
      beersFiltered.map((style, idx) => <BeerScroll beerStyle={style} key={idx} />)
    );
    // console.log(filter);
    console.log(filteredBeers);
  };
  
  const filterByName = event => {
    const userText = event.target.value;
    if (userText)
      getAllBeers(userText);
    else
      getAllBeers('');
  };

  return (
    <div>
      {props.allBeers && <Input onChange={filterByName} type="search" />}
      {filteredBeers}
    </div>
  );
}

export default SearchBeers;
