import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Icon, Statistic } from "semantic-ui-react";

const target = 200;
const consumed = 22;

function MyBeers(props) {
  const [myBeers, setMyBeers] = React.useState(null);
  const [myBeerCount, setMyBeerCount] = React.useState(0);

  useEffect(() => {
    getAllBeers(props.allBeers);
  }, []);

  const getAllBeers = allBeers => {
    setMyBeers(
      allBeers.map((style, idx) => (
        <tr>
          <td>{style.brewery}</td>
          <td>{style.beer}</td>
          <td>{style.style}</td>
          <td>{style.timestamp}</td>
        </tr>
      ))
    );
    setMyBeerCount(allBeers.length);
  };

  return (
    <div>
      <Statistic floated="left" inverted>
        <Statistic.Value>
          {myBeerCount}
          <Icon name="beer" />
        </Statistic.Value>
        <Statistic.Label>Consumed</Statistic.Label>
      </Statistic>
      <Statistic floated="right" inverted>
        <Statistic.Value>
          {target}
          <Icon name="beer" />
        </Statistic.Value>
        <Statistic.Label>Target</Statistic.Label>
      </Statistic>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Brewery</th>
            <th>Beer</th>
            <th>Style</th>
            <th>Checked In @</th>
          </tr>
        </thead>
        <tbody>{myBeers}</tbody>
      </Table>
      <div style={{ height: "75px" }}></div>
    </div>
  );
}

export default MyBeers;
