import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

const LineChartCursor = ({ width, points }) => {
  console.log(points);
  return (
    <Rectangle
      fill="#000"
      fillOpacity={0.1}
      x={points[0].x}
      width={width}
      height={263}
    />
  );
};

LineChartCursor.propTypes = {
  width: PropTypes.number,
  points: PropTypes.array,
};

export default LineChartCursor;