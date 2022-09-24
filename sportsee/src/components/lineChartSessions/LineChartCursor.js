import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

const LineChartCursor = ({ width, points, padding }) => {
  console.log(points[0].x);
  return (
    <Rectangle
      fill="#000"
      fillOpacity={0.1}
      x={points[0].x - padding}
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
