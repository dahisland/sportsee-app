import React from "react";

const RadialBarLegend = ({ payload }) => {
  return (
    <figcaption className="radialBarScore_figcaption">
      <p>
        <span>{payload[1].payload.value}%</span>
        <br />
        de votre objectif
      </p>
    </figcaption>
  );
};

export default RadialBarLegend;
