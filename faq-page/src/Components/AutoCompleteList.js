import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const AutoCompleteList = ({ matches }) => {
  if (matches.length === 0) {
    return null;
  }
  return (
    <ul
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 10px)",
        background: "white",
        width: "390px",
        textAlign: "left",
        padding: "15px",
      }}
    >
      {matches.map((item) => (
        <li style={{ marginBottom: "10px" }}>
          <FontAwesomeIcon
            style={{ color: "#e59500", marginRight: "8px" }}
            icon={faQuestion}
          />
          {`${item.question}`}
        </li>
      ))}
    </ul>
  );
};

export default AutoCompleteList;
