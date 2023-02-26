import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate()

  const directToNewsDetail = (item)=>{
   navigate("news-detail", {state:item})
  }

  const [news, setNews] = useState([]);
  const getData = async () => {
    const URL =
      "https://api.collectapi.com/news/getNews?country=tr&tag=economy";
    const data = await axios.get(URL, {
      headers: {
        Authorization: `apikey 5AgkLxu3nrlKZ7pKKHEury:6gU7ouXtLMyQ8SrJr1n39X`,
      },
    });
    setNews(data.data.result);
  };
  console.log(news, "haber");
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mb-5">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ maxHeight: "40rem", maxWidth: "52rem" }}
      >
        {news.map((item) => {
          return (
            <SwiperSlide onClick={()=>directToNewsDetail(item)} type="button">
              <h2 class="mytest">{item.name}</h2>
              <img src={item.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
