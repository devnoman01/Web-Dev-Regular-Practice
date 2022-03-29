import React from "react";
import { LineChart, Line, YAxis, XAxis, Tooltip, Legend } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Week 1",
      price: 4000,
      sales: 2400,
      cost: 2400,
    },
    {
      name: "Week 2",
      price: 3000,
      sales: 1398,
      cost: 2210,
    },
    {
      name: "Week 3",
      price: 2000,
      sales: 9800,
      cost: 2290,
    },
    {
      name: "Week 4",
      price: 2780,
      sales: 3908,
      cost: 2000,
    },
    {
      name: "Week 5",
      price: 1890,
      sales: 4800,
      cost: 2181,
    },
    {
      name: "Week 6",
      price: 2390,
      sales: 3800,
      cost: 2500,
    },
    {
      name: "Week 7",
      price: 3490,
      sales: 4300,
      cost: 2100,
    },
  ];
  return (
    <div>
      <h1>React Rechart Sample</h1>
      <LineChart width={600} height={400} data={data}>
        <Line dataKey={"price"} stroke="#ff4444"></Line>
        <Line dataKey={"sales"} stroke="#0099CC"></Line>
        <Line dataKey={"cost"} stroke="#00C851"></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis dataKey={"sales"}></YAxis>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
