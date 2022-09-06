import React from "react";

const VerticalNav = () => {
  return (
    <nav className="vertical_nav">
      <div className="empty_container"></div>
      <ul>
        <li>
          <img src="./img/icon-yoga.svg" alt="icon yoga"></img>
        </li>
        <li>
          <img src="./img/icon-swim.svg" alt="icon swim"></img>
        </li>
        <li>
          <img src="./img/icon-ride.svg" alt="icon ride"></img>
        </li>
        <li>
          <img src="./img/icon-muscu.svg" alt="icon musculation"></img>
        </li>
      </ul>
      <p>Copyright, SportSee 2020</p>
    </nav>
  );
};

export default VerticalNav;
