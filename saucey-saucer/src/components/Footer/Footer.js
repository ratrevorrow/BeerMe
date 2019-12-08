import React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

const footer = props => {
  return (
    <div className="footer">
      <Icon
        onClick={() => props.onClick()}
        name="home"
        style={{ width: "20%", padding: "3%" }}
      />
      <Icon
        onClick={() => props.onClick("search")}
        name="search"
        style={{ width: "20%", padding: "3%" }}
      />
      <Icon
        onClick={() => props.onClick("folder outline")}
        name="folder outline"
        style={{ width: "20%", padding: "3%" }}
      />
    </div>
  );
};

export default footer;

// home search archive
// home search  trophy
// home search folder-folderopen
