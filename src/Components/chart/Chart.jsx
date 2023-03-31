import React, { useEffect } from "react";
import "./chart.scss"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const Chart = ({ data, graphName ,aspect}) => {
  useEffect(() => {}, [data, graphName]);

  return (
    <div className='chart'  >
      <div className="title" style = {{marginBottom:"4%"}}>
      <p>{data.commodityName} <span  style ={{ float:"right", fontWeight:"600"}}> X- axis - Date <span style={{display:"block"}}> Y- axis - Price </span> </span> </p>
      </div>
      <p></p>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={730}
          height={250}
          data={data.trend}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="date"  />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#ff7300"
            fill="#ff7300"
            fillOpacity={0.9}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
