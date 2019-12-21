import React from "react";
import { Table } from "react-bootstrap";
import {
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import { Icon, Statistic } from "semantic-ui-react";
import "react-circular-progressbar/dist/styles.css";

const target = 200;
const consumed = 22;

function MyBeers() {
  return (
    <div>
      <Statistic floated="left" inverted>
        <Statistic.Value>
          {consumed}
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
      {/* <div
        style={{
          width: "20%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgressbarWithChildren
          value={target / consumed}
          text={`${target - consumed}`}
          styles={buildStyles({
            textColor: "white",
            pathColor: "green",
            alignItems: "center",
            justifyContent: "center"
          })}
        ></CircularProgressbarWithChildren>
      </div> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Brewery</th>
            <th>Beer</th>
            <th>Style</th>
            <th>Checked In @</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Belgium</td>
            <td>Fat Tire</td>
            <td>Amber Ale</td>
            <td>10:51 PM 10/20/2019</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
      <div style={{ height: "75px" }}></div>
    </div>
  );
}

export default MyBeers;
