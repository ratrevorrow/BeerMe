import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import SaucerLogo from "../../resources/saucer/sauce.png";
import BeerScroll from "../HorizontalScroll/BeerScroll";
function Home(props) {
  const [allBeers, setAllBeers] = React.useState(null);

  useEffect(() => {
    getAllBeers(props.allBeers);
  }, []);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  };

  const getAllBeers = allBeers => {
    setAllBeers(
      allBeers.map((style, idx) => <BeerScroll beerStyle={style} key={idx} />)
    );
  };

  return (
    <div>
      <Card bg="dark" text="white" style={style}>
        <Card.Body>
          <img src={SaucerLogo} alt="Saucer Logo" />
        </Card.Body>
      </Card>
      {allBeers}
      <hr style={{ border: "2px solid green" }} />
      <h3 style={{ color: "white" }}>Events coming up</h3>
      {/* <BeerScroll /> */}
      <div style={{ height: "75px" }}></div>
    </div>
  );
}

export default Home;
