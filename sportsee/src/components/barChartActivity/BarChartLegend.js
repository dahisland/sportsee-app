import React from "react";
import PropTypes from "prop-types";

const BarChartLegend = ({ payload }) => {
  console.log(payload);
  return (
    <figcaption className="barChartActivity_figcaption">
      <h2>Activité quotidienne</h2>
      <ul className="barChartActivity_legend">
        {payload.map((entry, index) => (
          <li key={`itemLegend-${index}`}>
            {entry.dataKey === "kilogram" ? (
              <span className="iconLegend--kilogram"></span>
            ) : (
              <span className="iconLegend--calories"></span>
            )}
            {entry.value}
          </li>
        ))}
      </ul>
    </figcaption>
  );
};

BarChartLegend.propTypes = {
  payload: PropTypes.array,
};

export default BarChartLegend;
