import React, { useState, useEffect } from "react";
import BeerScroll from "../HorizontalScroll/BeerScroll";

import { Dropdown } from "semantic-ui-react";

function SearchBeers(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [allBeers, setAllBeers] = React.useState(null);
  const [allStyles, setAllStyles] = React.useState(null);
  const [filteredBeers, setFilteredBeers] = React.useState(null);
  const [filterSet, setFilterSet] = React.useState(false);

  useEffect(() => {
    getAllBeers(props.allBeers);
  }, []);

  const getAllBeers = allBeers => {
    setAllBeers(
      allBeers.map((style, idx) => <BeerScroll beerStyle={style} key={idx} />)
    );
    const options = allBeers.map((style, idx) => ({
      key: style.style,
      text: style.style,
      value: style.style
    }));
    setAllStyles(options);
  };

  const filterBeers = (e, data) => {
    console.log(filterSet);
    if (data.value.length === 0) {
      setFilterSet(false);
    } else {
      setFilterSet(true);
      console.log(data.value);
      const filteredBeers = [];
      data.value.forEach(style => {
        console.log("Elle:" + style);
        //filteredBeers.push;
      });
      setFilteredBeers(
        allBeers.map((style, idx) => {
          if (data.value.includes(style.props.beerStyle.style)) {
            return <BeerScroll beerStyle={style.props.beerStyle} key={idx} />;
          }
        })
      );
    }
  };

  return (
    <div>
      <Dropdown
        placeholder="Search or Filter by Style"
        fluid
        multiple
        search
        selection
        options={allStyles}
        onChange={filterBeers}
      />
      {!filterSet && allBeers}
      {filterSet && filteredBeers}
    </div>
  );
}

export default SearchBeers;
