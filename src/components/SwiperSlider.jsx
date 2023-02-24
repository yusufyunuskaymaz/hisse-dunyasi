import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper ms-0"
        style={{ maxHeight: "40rem", maxWidth: "40rem" }}
      >
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgrosetta.mynet.com.tr/file/16613140/16613140-640x360.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
