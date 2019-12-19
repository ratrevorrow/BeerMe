import React, { useState } from "react";
import { Table, ButtonToolbar, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import { Icon, Statistic, Segment } from "semantic-ui-react";
import "react-circular-progressbar/dist/styles.css";

const percentage = 11;
const target = 200;
const consumed = 22;

function MyBeers() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Statistic floated="left" inverted>
        <Statistic.Value>{consumed}</Statistic.Value>
        <Statistic.Label>Consumed</Statistic.Label>
      </Statistic>
      <CircularProgressbarWithChildren
        value={target / consumed}
        text={`${target - consumed}`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "green"
        })}
      >
        <h5 style={{ fontSize: 12, color: "lightgrey", fontFamily: "Lato" }}>
          {" "}
          beers to go{" "}
        </h5>
      </CircularProgressbarWithChildren>
      <Statistic floated="right" inverted>
        <Statistic.Value>{target}</Statistic.Value>
        <Statistic.Label>Next Target</Statistic.Label>
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
        <tbody>
          <tr onClick={() => setModalShow(true)}>
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
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

export default MyBeers;
