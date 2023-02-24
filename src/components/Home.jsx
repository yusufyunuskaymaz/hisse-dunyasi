import React, { useEffect, useState } from "react";
import SwiperSlider from "./SwiperSlider";
import axios from "axios";
import StickyDiv from "./StickyDiv";

const Home = () => {
  const [data, setData] = useState([]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false";
  const getData = async () => {
    const data = await axios.get(URL);
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <SwiperSlider />
        </div>
        <StickyDiv />
      </div>
    </div>
  );
};

export default Home;
