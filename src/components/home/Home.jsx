import React, { useEffect, useState } from "react";
import axios from "axios";
import StickyDiv from "../component/StickyDiv";
import Kazananlar from "../stock/TvWidgets/Kazananlar";
import HomeCryptoWidget from "./HomeCryptoWidget";
import StickySidebar from "../stock/StickySidebar";
import Slider from "./SwiperNews/Slider";

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

  // console.log(data);
  return (
    <div className="container ">
      <div className="row justify-content-between">
        <div className="col col-lg-8 text-center">
          <div className="col">
            {/* <SwiperSlider /> */}
            <div className="col slider-bg">
              <h1 className="title mt-0 mb-5">Haberler</h1>
              <Slider />
            </div>
            <div className="col mb-5 text-center ">
              <h1 className="my-5 text-center title title-mobil">
                Canlı Yayın
              </h1>
              <div className="ratio ratio-16x9">
                <iframe
                  width="760"
                  height="515"
                  src="https://www.youtube.com/embed/hHSmBJk6w0c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <h1 className=" mb-5 title mt-2">Borsa ve Kripto Tablosu</h1>
          <div className="row justify-content-between mb-5 text-center">
            <div className="col"
            >
              <Kazananlar />
              
            </div>
            <div className="col ">
              <HomeCryptoWidget width={"300"} />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col d-none d-md-block stickSidebar">
          <StickySidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
