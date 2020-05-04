import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main/Main";
import Footer from "./Footer.js";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header id="header" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
