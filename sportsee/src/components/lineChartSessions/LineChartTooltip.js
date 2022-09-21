import React from "react";
import PropTypes from "prop-types";

const LineChartTooltip = ({ payload }) => {
  if (payload[0] !== undefined) {
    return (
      <div>
        <p className="sessions_toolTip">{payload[0].value + " min"}</p>
      </div>
    );
  }
};

LineChartTooltip.propTypes = {
  payload: PropTypes.array,
};

export default LineChartTooltip;
