import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip ,ResponsiveContainer} from 'recharts';
import DayWiseInsight from '../Insight/DayWiseInsight';

function Graph({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="instant" />
      <YAxis />
      <Tooltip/>
      <Line type="monotone" dataKey="price" stroke="#8884d8" dot={{ stroke: '#8884d8', strokeWidth: 2 }} />
    </LineChart>
  </ResponsiveContainer>
  );
}

function Chart(props) {
  const day_array = [1,7,10,30,60,90]
  const data = props.data.instant.map((value, index) => ({
    instant: value.slice(0,10).split("-").reverse().join("-"),
    price: props.data.price[index],
    min_price: props.data.min_price[index],
    max_price: props.data.max_price[index],
  }));
  return (
    <div style={{ width: '100%', height: '100vh' }}>
    <Graph data={data} />
   {
    day_array.map((val)=>{
     return <DayWiseInsight key = {val} days = {val}/>;
    })
   }
  </div>
  );
}

export default Chart;
