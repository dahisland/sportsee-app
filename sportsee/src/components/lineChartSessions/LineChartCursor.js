import React from "react";
import { Curve } from "recharts";
import PropTypes from "prop-types";

const LineChartCursor = ({ width, height, d }) => {
  console.log(d);
  return (
    <Curve
      stroke="#000"
      strokeWidth={20}
      strokeOpacity={0.1}
      width={width}
      height={height}
      d={d}
    />
  );
};

export default LineChartCursor;
