import React from "react";
import SearchBox from "../Containers/SearchBox";

const Header = () => {
  return (
    <header id="hero">
      <div className="container">
        <h1>How can we help?</h1>
        <h4>
          Find quick answers to complex problems from other users, or ask the
          community a question.
        </h4>
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
