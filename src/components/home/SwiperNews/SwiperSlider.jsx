import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const directToNewsDetail = (item) => {
    navigate("news-detail", { state: item });
  };

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
      {/* <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ maxHeight: "40rem", maxWidth: "50rem" }}
      >
        {news.map((item) => {
          return (
            <SwiperSlide onClick={() => directToNewsDetail(item)} type="button">
              <h2 class="mytest">{item.name}</h2>
              <img src={item.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <div className="carousel-boots">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={news[0].image} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
           
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
