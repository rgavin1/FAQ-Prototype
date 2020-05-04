import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <label>FAQ</label>
      <ul>
        <li>Help</li>
        <li>Faq</li>
        <li>Contact</li>
      </ul>
      <span>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
};

export default Navigation;
