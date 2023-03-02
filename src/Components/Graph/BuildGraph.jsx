import React, { useEffect } from "react";
// import { add, format, differenceInCalendarDays, isFuture } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
// import moment from "moment/moment";

// const dateFormatter = date => {
//     return moment(date).format('DD/MM/YY');
//   };

const BuildGraph = ({ data, graphName }) => {
  useEffect(() => {}, [data, graphName]);

  return (
    <div>
      <p>{data.commodityName}</p>
      <ResponsiveContainer width="90%" height={500}>
        <LineChart
          width={500}
          height={250}
          data={data.trend}
          margin={{
            top: 10,
            right: 0,
            bottom: 10,
            left: 0,
          }}
        >
          <XAxis dataKey="date" />
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

export default BuildGraph;
