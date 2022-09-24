import React from "react";

const RadialBarLegend = ({ dataScore }) => {
  return (
    <figcaption className="radialBarScore_figcaption">
      <p>
        <span>{dataScore[1].value}%</span>
        <br />
        de votre objectif
      </p>
    </figcaption>
  );
};

export default RadialBarLegend;
