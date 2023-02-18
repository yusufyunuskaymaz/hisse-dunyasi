import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
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
      <div className="container mb-5 mt-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="deneme.com">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
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
                  <th scope="col">Hisse </th>
                  <th scope="col">Fiyat</th>
                  <th scope="col">Fark%</th>
                  <th scope="col">Saat</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <th><img style={{width:"1.5rem"}} src={item.image} alt={item.name} /></th>
                      <th scope="row">{item.name}</th>
                      <td>${item.current_price}</td>
                      <td>10.00</td>
                      <td>18.10</td>
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
