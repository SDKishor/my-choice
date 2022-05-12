import React, { useEffect, useState } from "react";
import "./dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="allChartContainer">
        <div className="bar ChartContainer">
          <BarChart width={openMenu ? 550 : 320} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="steelblue" />
            <Bar dataKey="revenue" fill="coral" />
          </BarChart>
        </div>
        <div className="pie ChartContainer">
          <PieChart width={openMenu ? 550 : 320} height={250}>
            <Pie
              data={data}
              dataKey="sell"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="teal"
            />
            <Pie
              data={data}
              dataKey="sell"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="turquoise"
              label
            />
          </PieChart>
        </div>
        <div className="area ChartContainer">
          <AreaChart
            width={openMenu ? 550 : 320}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
        <div className="line ChartContainer">
          <LineChart
            width={openMenu ? 550 : 320}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="lime" />
            <Line type="monotone" dataKey="revenue" stroke="orange" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};
