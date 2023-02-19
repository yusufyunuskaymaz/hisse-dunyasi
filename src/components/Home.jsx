import React, { useEffect, useState } from 'react'
import SwiperSlider from "./SwiperSlider";
import axios from "axios";
import StickyDiv from './StickyDiv';



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
    <div className="container deneme2" >
        <div className="row">
          <div className="col-lg-8" style={{height:"3000px"}}>
          <div className="container ">
            <div className="row">
              <div className=" d-flex justify-content-between">
                <h3 className="mb-4">Günün Seans İstatiği</h3>
                {/* <a href="deneme.com" style={{position:"relative"}}>Tümü > </a>
                p */}
                <p>tümü</p>
              
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table
                  className="table table-responsive table-striped table-hover table-sm"
                  style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="3">
                        Artan{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: "500", fontSize: "13px" }}
                      >
                        <a href="deneme.com" className="text-white fs-6">
                          Tümü
                        </a>{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">İsim</th>
                      <th scope="col">Fiyat</th>
                      <th scope="col">Fark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr>
                          <th>
                            <img
                              style={{ width: "1.5rem" }}
                              src={item.image}
                              alt={item.name}
                            />
                          </th>
                          <th scope="row">{item.name}</th>
                          <td>${item.current_price}</td>
                          <td>10.00</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col">
                <table
                  className="table table-striped table-hover table-sm"
                  style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="3">
                        Azalan{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: "500", fontSize: "13px" }}
                      >
                        <a href="deneme.com" className="text-white fs-6">
                          Tümü
                        </a>{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col">Hisse </th>
                      <th scope="col">Fiyat</th>
                      <th scope="col">Fark%</th>
                      <th scope="col">Saat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Konya</th>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">MHRSL</th>
                      <td>54.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">DYOBY</th>
                      <td>45.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col">
                <table
                  className="table table-striped table-hover table-sm"
                  style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="3">
                        Azalan{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: "500", fontSize: "13px" }}
                      >
                        <a href="deneme.com" className="text-white fs-6">
                          Tümü
                        </a>{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col">Hisse </th>
                      <th scope="col">Fiyat</th>
                      <th scope="col">Fark%</th>
                      <th scope="col">Saat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Konya</th>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">MHRSL</th>
                      <td>54.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">DYOBY</th>
                      <td>45.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table
                  className="table table-responsive table-striped table-hover table-sm"
                  style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="3">
                        Artan{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: "500", fontSize: "13px" }}
                      >
                        <a href="deneme.com" className="text-white fs-6">
                          Tümü
                        </a>{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">İsim</th>
                      <th scope="col">Fiyat</th>
                      <th scope="col">Fark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr>
                          <th>
                            <img
                              style={{ width: "1.5rem" }}
                              src={item.image}
                              alt={item.name}
                            />
                          </th>
                          <th scope="row">{item.name}</th>
                          <td>${item.current_price}</td>
                          <td>10.00</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col">
                <table
                  className="table table-striped table-hover table-sm"
                  style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="3">
                        Azalan{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: "500", fontSize: "13px" }}
                      >
                        <a href="deneme.com" className="text-white fs-6">
                          Tümü
                        </a>{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col">Hisse </th>
                      <th scope="col">Fiyat</th>
                      <th scope="col">Fark%</th>
                      <th scope="col">Saat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Konya</th>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">MHRSL</th>
                      <td>54.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">DYOBY</th>
                      <td>45.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col">
                <table
                  className="table table-striped table-hover table-sm"
                  style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="3">
                        Azalan{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: "500", fontSize: "13px" }}
                      >
                        <a href="deneme.com" className="text-white fs-6">
                          Tümü
                        </a>{" "}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col">Hisse </th>
                      <th scope="col">Fiyat</th>
                      <th scope="col">Fark%</th>
                      <th scope="col">Saat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Konya</th>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">MHRSL</th>
                      <td>54.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                    <tr>
                      <th scope="row">DYOBY</th>
                      <td>45.454</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col ">
                <SwiperSlider />
              </div>
            </div>
          </div>
          </div>
          <StickyDiv />
        </div>
      </div>
  )
}

export default Home