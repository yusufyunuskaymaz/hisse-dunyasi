import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const chartdata = [
  {
    name: "Page A",
    // uv: 4000,
    pv: 50
  },
  {
    name: "Page B",
    // uv: 3000,
    pv: 55
  },
  {
    name: "Page C",
    // uv: 2000,
    pv: 52
  },
  {
    name: "Page D",
    // uv: 2780,
    pv: 45
  },
  {
    name: "Page E",
    // uv: 1890,
    pv: 60
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 78
  },
  {
    name: "Page G",
    // uv: 3490,
    pv: 44
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 70
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 69
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 74
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 58
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 74
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 72
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 76
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 80
  },
  {
    name: "Page F",
    // uv: 2390,
    pv: 78
  }
];

const StockChart = ({itemTitle, hacimLot}) => {
  console.log(itemTitle,"a")
  const [data, setData] = useState([]);
  const [convertedData, setConvertedData] = useState([]);

  const getData = async () => {
    try {
       await axios
        .get(
          `https://sore-ruby-chiton-belt.cyclic.app/https://www.dunya.com/api/foreks/chart?code=${itemTitle}.E.BIST&period=daily`
        )
        .then((res) => {
          if(res.status==200){
            setData(res.data);
          }
          
        });
    } catch (error) {
      console.log(error);
    }
  };
  const convertData = () => {
    const converted = data.map((item) => {
      const hour = new Date(Number(item.date)).getHours();
      const munites = new Date(Number(item.date)).getMinutes();
      const time = `${hour}:${munites}`;
      const { close, high, low, open } = item;
      const name = time;
      const pv = Number(String(high).split('.').join(""))
      // const amt = high
      return { name, pv };
    });
    setConvertedData(converted);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    convertData();
  }, [data]);

  console.log(convertedData,"burası");

  return (
    <LineChart
        width={500}
        height={300}
        data={convertedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
  );
};

export default StockChart;
