import React, { useState, useEffect } from "react";
import "./App.css";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import BeerScroll from "./components/HorizontalScroll/BeerScroll";
import SearchBeer from "./components/SearchBeers/SearchBeers";
import MyBeers from "./components/MyBeers/MyBeers";
import Home from "./components/Home/Home";
import { Tab, Tabs } from "react-bootstrap";
import { client } from "./util/axios";

function App() {
  var [beers, setBeers] = useState(null);

  useEffect(() => {
    client.get("/beerlist").then(res => {
      setBeers(res.data);
    });
  }, []);

  const mockBeers = [
    {
      style: "style1",
      beers: [
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
      ]
    },
    {
      style: "style2",
      beers: [
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
      ]
    },
    {
      style: "style3",
      beers: [
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
      ]
    }
  ];

  return (
    <div className="App">
      <Tabs className="navtab" defaultActiveKey="home">
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="searchBeer" title="Find me Beer">
          <SearchBeer allBeers={mockBeers} />
        </Tab>
        <Tab eventKey="saved" title="My Beers">
          <MyBeers />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
