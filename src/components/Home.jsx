import React, { useEffect, useState } from "react";
import SwiperSlider from "./SwiperSlider";
import axios from "axios";
import StickyDiv from "./StickyDiv";
import Kazananlar from "./stock/Kazananlar";
import HomeCryptoWidget from "./HomeCryptoWidget";

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
    <div className="container ">
      <div className="row justify-content-between">
        <div className="col-lg-8">
          <SwiperSlider />
          <div className="col d-flex flex-sm-column flex-lg-row flex-md-column">
            <Kazananlar />
            <HomeCryptoWidget />

          </div>
          <div className="col">
          </div>
        </div>

        <StickyDiv />
      </div>
    </div>
  );
};

export default Home;
