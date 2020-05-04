import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faCreditCard,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const Topics = () => {
  return (
    <section id="topics">
      <div className="container">
        <h1>Browse All Topics</h1>
        <ul>
          <li className="card">
            <div className="icon">
              <FontAwesomeIcon className="i" icon={faSlidersH} />
            </div>
            <h3>Getting Started</h3>
            <p>
              semper risus in hendrerit gravida rutrum quisque non tellus orci
              ac auctor augue mauris augue
            </p>
          </li>
          <li className="card">
            <div className="icon">
              <FontAwesomeIcon className="i" icon={faCreditCard} />
            </div>
            <h3>Account and Billing</h3>
            <p>
              semper risus in hendrerit gravida rutrum quisque non tellus orci
              ac auctor augue mauris augue
            </p>
          </li>
          <li className="card">
            <div className="icon">
              <FontAwesomeIcon className="i" icon={faCogs} />
            </div>
            <h3>Trouble Shooting</h3>
            <p>
              semper risus in hendrerit gravida rutrum quisque non tellus orci
              ac auctor augue mauris augue
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Topics;
