import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {

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
    <div id='slider-bg'>
<div className="deneme">
<Carousel>
    {news.map((item)=>{
      return (
        <Carousel.Item>
        <img
          className="d-block w-100 img-slider"
          src={item.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='slider-title-mobil'>{item.name}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })}
  
    </Carousel>
</div>
    </div>
    
  );
}

export default Slider;