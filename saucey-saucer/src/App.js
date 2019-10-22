import React, { useState } from "react";
import "./App.css";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import MyBeers from "./components/MyBeers/MyBeers";
import { Tab, Tabs } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Tabs className="navtab" defaultActiveKey="home">
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="searchBeer" title="Find me Beer">
          <hr style={{ border: "2px solid green" }} />
          <h3 style={{ color: "white" }}>Lager</h3>
          <HorizontalScroll />
          <hr style={{ border: "2px solid green" }} />
          <h3 style={{ color: "white" }}>Ale</h3>
          <HorizontalScroll />
          <hr style={{ border: "2px solid green" }} />
          <h3 style={{ color: "white" }}>Porter</h3>
          <HorizontalScroll />
          <hr style={{ border: "2px solid green" }} />
          <h3 style={{ color: "white" }}>Stout</h3>
          <HorizontalScroll />
        </Tab>
        <Tab eventKey="saved" title="My Beers">
          <MyBeers />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
