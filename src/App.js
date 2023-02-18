import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

// Import Swiper styles



// import required modules
import SwiperComp from "./Swiper";

function App() {
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
    <>
      <div className="container-fluid px-0" style={{ marginBottom: "8rem" }}>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{ backgroundColor: "#343a40" }}
        >
          <div className="container py-2">
            <a className="navbar-brand text fs-3" href="#">
              Hisse Dünyası
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Borsa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Altın
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Döviz
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Kripto
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Giriş Yap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Kayıt Ol
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul
              className="d-flex justify-content-between text-white py-2 gap-3"
              style={{ backgroundColor: "#464C52" }}
            >
              <li>
                <i class="fa-solid fa-play"></i>
                <span className="fw-bolder">Bist</span> 5.026,83 %0,36
              </li>
              <li>
                <i class="fa-solid fa-play"></i>
                <span className="fw-bolder">Dolar</span> 18,8621 %0,08
              </li>
              <li>
                <i class="fa-solid fa-play"></i>
                <span className="fw-bolder">Altın</span> 1.117,0600 %0,36
              </li>
              <li className="me-3">
                <i class="fa-solid fa-play"></i>
                <span className="fw-bolder">Bitcoin</span> 18,8621 %0,08
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col">
            <table
              className="table table-responsive table-striped table-hover table-sm"
              style={{ width: "15rem" }}
            >
              <thead>
                <tr className="text-white" style={{ background: "#464c52" }}>
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
                <tr className="text-white" style={{ background: "#464c52" }}>
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
                <tr className="text-white" style={{ background: "#464c52" }}>
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
                <tr className="text-white" style={{ background: "#464c52" }}>
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
                <tr className="text-white" style={{ background: "#464c52" }}>
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
                <tr className="text-white" style={{ background: "#464c52" }}>
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
      
    </>
  );
}

export default App;
