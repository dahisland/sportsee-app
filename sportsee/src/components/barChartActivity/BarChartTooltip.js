import React from "react";
import PropTypes from "prop-types";

const BarChartTooltip = ({ payload }) => {
  return (
    <ul className="toolTip">
      {payload.map((entry, index) => (
        <li key={`itemTooltip-${index}`}>
          {entry.value}
          {entry.unit.toLowerCase()}
        </li>
      ))}
    </ul>
  );
};

BarChartTooltip.propTypes = {
  payload: PropTypes.array,
};

export default BarChartTooltip;
