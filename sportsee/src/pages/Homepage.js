import React from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";

const Homepage = () => {
  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
    </div>
  );
};

export default Homepage;
