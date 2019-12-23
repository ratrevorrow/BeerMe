import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBeer from "./components/SearchBeers/SearchBeers";
import Footer from "./components/Footer/Footer";
import MyBeers from "./components/MyBeers/MyBeers";
import Home from "./components/Home/Home";
import { client } from "./util/axios";

function App() {
  const [beers, setBeers] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [activeTabName, setActiveTabName] = useState("");

  useEffect(() => {
    client.get("/beerlist").then(res => {
      setBeers(res.data);
    });
    setActiveTabName("home");
    setActiveTab(<Home allBeers={mockBeersHome} />);
  }, []);

  const chooseTab = tabName => {
    switch (tabName) {
      case "search":
        setActiveTabName("search");
        setActiveTab(<SearchBeer allBeers={mockBeersSearch} />);
        break;
      case "trophy":
        setActiveTabName("trophy");
        setActiveTab(<MyBeers allBeers={mockBeersMyBeers} />);
        break;
      case "home":
        setActiveTabName("home");
        setActiveTab(<Home allBeers={mockBeersHome} />);
        break;
      default:
        setActiveTabName("home");
        setActiveTab(<Home allBeers={mockBeersHome} />);
        break;
    }
  };

  const mockBeersSearch = [
    {
      style: "Style 1",
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
      style: "Style 2",
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
      style: "Style 3",
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
  const mockBeersHome = [
    {
      style: "New Beers",
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
      style: "Popular at this Saucer",
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
  const mockBeersMyBeers = [
    {
      brewery: "New Belgium",
      beer: "Fat Tire",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Citradellic",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Hoppy Blonde",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Ranger",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Slow Ride",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Fat Tire",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Citradellic",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Hoppy Blonde",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Ranger",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Slow Ride",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Fat Tire",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Citradellic",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Hoppy Blonde",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Ranger",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    },
    {
      brewery: "New Belgium",
      beer: "Slow Ride",
      style: "Lager",
      description: "Mock description abut the beer...",
      timestamp: "12/23/2019 12:15PM "
    }
  ];

  return (
    <div className="App">
      {activeTab}
      <Footer onClick={chooseTab} activeTabName={activeTabName} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
