import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import BarChartLegend from "./BarChartLegend";
import BarChartTooltip from "./BarChartTooltip";

const BarChartActivity = ({ dataActivity }) => {
  let minWeight = dataActivity.sessions[0].kilogram;
  let maxWeight =
    dataActivity.sessions[dataActivity.sessions.length - 1].kilogram;
  let middleWeight = minWeight + (maxWeight - minWeight) / 2;

  return (
    <figure className="barChart_activity">
      <BarChart
        width={835}
        height={320}
        data={dataActivity.sessions}
        barSize={7}
        barGap={8}
        reverseStackOrder={true}
        margin={{ top: 15, right: 40, bottom: 30, left: 40 }}
      >
        <Legend
          verticalAlign="top"
          iconSize={8}
          content={<BarChartLegend payload={dataActivity.sessions} />}
        />

        <CartesianGrid
          vertical={false}
          strokeDasharray="2 2"
          stroke={"#DEDEDE"}
          str
        />

        <XAxis
          dataKey="dayFormatted"
          type="number"
          tickCount={dataActivity.sessions.length}
          domain={["dataMin", "dataMax"]}
          tickSize={0}
          dy={20}
          fontSize={14}
          tick={{ fill: "#9B9EAC" }}
          textAnchor="middle"
          stroke="#DEDEDE"
          //   interval={"preserveEnd"}
          padding={{ left: 11, right: 11 }}
        />

        <YAxis
          type="number"
          dataKey="kilogram"
          yAxisId="right"
          orientation="right"
          domain={["dataMin", "dataMax"]}
          tickCount={3}
          tickSize={0}
          ticks={[minWeight - 1, middleWeight, maxWeight + 1]}
          axisLine={false}
          dx={50}
          tick={{ fill: "#9B9EAC" }}
          fontSize={14}
          textAnchor="middle"
        />

        <YAxis
          type="number"
          dataKey="calories"
          yAxisId="left"
          orientation="left"
          tickCount={3}
          domain={["dataMin - 50", (dataMax) => dataMax + 50]}
          hide={true}
        />

        <Tooltip
          content={
            <BarChartTooltip payload={dataActivity.sessions}></BarChartTooltip>
          }
          offset={35}
          wrapperStyle={{ outline: "none" }}
          allowEscapeViewBox={{ x: false, y: true }}
          isAnimationActive={false}
        />

        <Bar
          dataKey="calories"
          yAxisId="left"
          fill="#E60000"
          legendType="circle"
          unit={"Kcal"}
          name={"Calories brûlées (KCal)"}
          strokeLinecap={"round"}
        />

        <Bar
          dataKey="kilogram"
          yAxisId="right"
          fill="#282D30"
          legendType="circle"
          unit={"kg"}
          name={"Poids (kg)"}
        />
      </BarChart>
    </figure>
  );
};

BarChartActivity.propTypes = {
  dataActivity: PropTypes.object,
};

export default BarChartActivity;
