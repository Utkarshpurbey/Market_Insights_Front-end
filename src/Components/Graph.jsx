import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({data}) => {

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="30 30" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        stroke="red"
        activeDot={{ r: 8 }}
      />

    </LineChart>
  );
};

export default Graph;
