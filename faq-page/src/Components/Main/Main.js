import React from "react";
import Topics from "./Sections/Topics";
import FAQ from "./Sections/Faq";
import Help from "./Sections/Help";

const Main = () => {
  return (
    <>
      {/* Sub-section of Main */}
      <Topics />
      <FAQ />
      <Help />
    </>
  );
};

export default Main;
