import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Rectangle,
  Legend,
} from "recharts";
import LineChartLegend from "./LineChartLegend";
import LineChartTooltip from "./LineChartTooltip";
import PropTypes from "prop-types";

const LineChartSessions = ({ dataSessions }) => {
  return (
    <figure className="lineChart_sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataSessions.sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <Legend
            verticalAlign="top"
            iconSize={8}
            content={<LineChartLegend />}
          />
          <XAxis
            dataKey="dayLabel"
            type="category"
            padding={{ left: 15, right: 15 }}
            axisLine={false}
            interval={"preserveStartEnd"}
            fontSize={12}
            tickSize={0}
            dy={5}
            tick={{ fill: "#FFFFFF", opacity: 0.5 }}
            textAnchor="Middle"
          />
          <YAxis
            domain={["dataMin -10", "dataMax + 30"]}
            dataKey="sessionLength"
            hide={true}
          />
          <Tooltip
            content={<LineChartTooltip />}
            offset={5}
            wrapperStyle={{ outline: "none", top: "-50px" }}
            allowEscapeViewBox={{ x: false, y: false }}
            isAnimationActive={false}
            cursor={{
              stroke: "#000",
              strokeWidth: 20,
              strokeOpacity: 0.1,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            unit={"min"}
            connectNulls={true}
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "#fff", strokeWidth: 8, strokeOpacity: 0.2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </figure>
  );
};

LineChartSessions.propTypes = {
  dataSessions: PropTypes.object,
};

export default LineChartSessions;
