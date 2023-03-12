import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();

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
    <div id="slider-bg">
      <div className="deneme">
        <Carousel>
          {news.map((item,index) => {
            return (
              <Carousel.Item
              key={index+1}

              >
                <div
                  className="news"
                  onClick={() => navigate("/news-detail", { state: item })}
                >
                  <img
                    className="d-block w-100 img-slider"
                    src={item.image}
                    alt="First slide"
                    onClick={() => navigate("/news-detail", { state: item })}
                  />

                  <Carousel.Caption >
                    {/* <span className="carousel-title">{item.name}</span> */}
                    <h3 className="m-0 carousel-title">{item.name}</h3>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, officia!</p> */}
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
