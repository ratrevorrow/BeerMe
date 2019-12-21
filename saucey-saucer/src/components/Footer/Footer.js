import React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

function footer(props) {
  return (
    <div className="footer">
      <Icon
        onClick={() => props.onClick()}
        name="home"
        color={props.activeTabName === "home" ? "green" : "grey"}
        style={{ width: "20%", padding: "3%" }}
      />
      <Icon
        onClick={() => props.onClick("search")}
        name="search"
        color={props.activeTabName === "search" ? "green" : "grey"}
        style={{ width: "20%", padding: "3%" }}
      />

      <Icon
        onClick={() => props.onClick("trophy")}
        name="trophy"
        color={props.activeTabName === "trophy" ? "yellow" : "grey"}
        style={{ width: "20%", padding: "3%" }}
      />
    </div>
  );
}

export default footer;

// home search archive
// home search  trophy
// home search folder-folderopen
