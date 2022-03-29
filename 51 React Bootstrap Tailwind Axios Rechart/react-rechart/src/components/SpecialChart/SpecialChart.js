import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, YAxis, XAxis, Tooltip, Legend } from "recharts";

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parts[1],
          };
          return ph;
        });
        setPhones(phoneData);
      });
  });
  return (
    <BarChart width={600} height={200} data={phones}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Legend></Legend>
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default SpecialChart;
