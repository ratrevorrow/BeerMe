import React, { useState, useEffect } from 'react';
import './App.css';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll';
import BeerScroll from './components/HorizontalScroll/BeerScroll';
import MyBeers from './components/MyBeers/MyBeers';
import Home from './components/Home/Home';
import { Tab, Tabs } from 'react-bootstrap';
import { client } from './util/axios';

function App() {
  var [beers, setBeers] = useState(null);

  useEffect(() => {
    client.get('/beerlist').then(res => {
      setBeers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Tabs className="navtab" defaultActiveKey="home">
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="searchBeer" title="Find me Beer">
          {beers &&
            Object.keys(beers).forEach((key, obj) => (
                // console.log(key)
              <div>
                <hr style={{ border: '2px solid green' }} />
                <h3 style={{ color: 'white' }}>{key}</h3>
                <HorizontalScroll props={obj} />
              </div>
            ))}
            <HorizontalScroll asd="hello" />
        </Tab>
        <Tab eventKey="saved" title="My Beers">
          <MyBeers />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
