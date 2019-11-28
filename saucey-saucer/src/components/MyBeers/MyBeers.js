import React, { useState } from "react";
import { Table, ButtonToolbar, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../Modal/MyVerticallyCenteredModal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

function MyBeers() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Brewery</th>
            <th>Beer</th>
            <th>Style</th>
            <th>Check-In @</th>
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
      <Example label="Progress" onClick={() => setModalShow(true)}>
        <CircularProgressbar
          color="white"
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={0}
          styles={buildStyles({
            backgroundColor: "green",
            textColor: "white",
            pathColor: "white",
            trailColor: "transparent"
          })}
        />
      </Example>
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </div>
  );
}

function Example(props) {
  const footer = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    marginBottom: "80"
  };
  return (
    <div style={footer}>
      <div style={{ width: 100 }}>{props.children}</div>
      <p>{props.description}</p>
    </div>
  );
}

export default MyBeers;
