import React, { useState, useEffect } from "react";
import "./App.css";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import BeerScroll from "./components/HorizontalScroll/BeerScroll";
import SearchBeer from "./components/SearchBeers/SearchBeers";
import Footer from "./components/Footer/Footer";
import MyBeers from "./components/MyBeers/MyBeers";
import Home from "./components/Home/Home";
import { Tab, Tabs } from "react-bootstrap";
import { client } from "./util/axios";

function App() {
  const [beers, setBeers] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    client.get("/beerlist").then(res => {
      setBeers(res.data);
    });
    setActiveTab(<Home />);
  }, []);

  const chooseTab = tabName => {
    switch (tabName) {
      case "search":
        setActiveTab(<SearchBeer allBeers={mockBeers} />);
        break;
      case "folder outline":
        setActiveTab(<MyBeers />);
        break;
      default:
        setActiveTab(<Home />);
    }
  };

  const mockBeers = [
    {
      style: "style1",
      beers: [
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        }
      ]
    },
    {
      style: "style2",
      beers: [
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        }
      ]
    },
    {
      style: "style3",
      beers: [
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Fat Tire",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Citradellic",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Hoppy Blonde",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Ranger",
          style: "Lager",
          description: "Mock description abut the beer..."
        },
        {
          brewery: "New Belgium",
          beer: "Slow Ride",
          style: "Lager",
          description: "Mock description abut the beer..."
        }
      ]
    }
  ];

  return (
    <div className="App">
      {activeTab}
      <Footer onClick={chooseTab} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
