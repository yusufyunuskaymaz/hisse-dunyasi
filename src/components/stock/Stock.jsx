import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { style } from "@mui/system";
import StickySidebar from "./StickySidebar";
import { BIST_100 } from "./BIST_100";
import { Card, Form } from "react-bootstrap";

const Stock = () => {
  const navigate = useNavigate();
  // Check if the `tvwidgetsymbol` query parameter exists in the URL
  //  const urlParams = new URLSearchParams(window.location.search);
  //  const tvwidgetsymbol = urlParams.get("tvwidgetsymbol");

  //  useEffect(() => {
  //    // If `tvwidgetsymbol` exists, navigate to `StockDetail` component with its value as the `deneme` param
  //    if (tvwidgetsymbol) {
  //      navigate(`/stock/${tvwidgetsymbol}`);
  //    }
  //  }, [navigate, tvwidgetsymbol]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allStock, setAllStock] = useState([]);
  const { deneme } = useParams();
  console.log(deneme, "deneme...");

  const getDataFromApi = () => {
    // console.log("girdi");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    };
    axios
      .get("https://api.collectapi.com/economy/hisseSenedi", config)
      .then((res) => {
        const data = res.data.result;
        // Filter Bist 100 between 500 stocks
        filterAndSortInitialData(data);
        setAllStock(data);
        localStorage.setItem("stockData", JSON.stringify({
          data:data,
          time:Date.now()
        }));
      });
  };

  const filterAndSortInitialData = (data) => {
    data = data
      .filter((item) => {
        return BIST_100.includes(item.code);
      })
      .sort((a, b) => (a.code < b.code ? -1 : 1));
    setData(data);
    setLoading(false);
  };

  const showAllStocks = () => {
    const data = allStock.sort((a, b) => (a.code < b.code ? -1 : 1));
    setData(data);
  };

  useEffect(() => {
    // After second render on page
    const res = JSON.parse(localStorage.getItem("stockData"));
    // 900000 = 15 Munites in milliseconds
    if(res && (res.time + 900000 > Date.now())){
      filterAndSortInitialData(res.data);
      setAllStock(res.data);
    } else {
      getDataFromApi();
    }
  }, []);

  const [showOrHide, setShowOrHide] = useState(false);

  const changeStock = () => {
    setShowOrHide(!showOrHide);
    if (!showOrHide) {
      showAllStocks();
    } else {
      filterAndSortInitialData(allStock);
    }
  };

  // console.log(res, "dsa");
  // if (loading) {
  //   return (
  //     <div className="container text-center">
  //       <div className="loading">
  //         <i
  //           className="fa fa-spinner fa-spin "
  //           style={{ fontSize: "1.5rem" }}
  //         ></i>
  //         <h3>Loading...</h3>{" "}
  //       </div>{" "}
  //     </div>
  //   );
  // } else {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 text-center">
          <h1 className="text-center mb-5 fs-1 bist100 title mt-1">
            Bist 100 Tablo
          </h1>
          <div className="d-flex justify-content-between px-3 align-items-center mb-3">
            <p className="text-muted mb-0">{data.length} adet</p>
            <div className="checkbox d-flex align-items-center">
              <input
                type="checkbox"
                id="switch"
                onChange={() => changeStock()}
                style={{ transform: "scale(0.5)" }}
              />
              <label htmlFor="switch">Toggle</label>
              <span className="ms-3 text-muted">Tümünü Göster</span>
            </div>
          </div>
          <div>
            <p className="mb-2 text-muted" align="left">
              Detaylı görüntülemek için üzerine tıklayın.
            </p>
          </div>
          <div className="table-responsive shadow table-bordered ">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col" id="name">
                    Adı
                  </th>
                  <th scope="col"></th>
                  <th scope="col" id="last">
                    Son
                  </th>
                  <th scope="col" id="min">
                    Min
                  </th>
                  <th scope="col" id="max">
                    Max
                  </th>
                  <th scope="col" id="cap">
                    Hacim(Tl)
                  </th>
                  <th scope="col" id="rate">
                    %
                  </th>
                  <th scope="col" id="time">
                    Son İş.
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <div className="loading text-center">
                    <i
                      className="fa fa-spinner fa-spin "
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                )}
                {data?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() =>
                        navigate(
                          `${item.text.toLowerCase().replace(" ", "-")}`,
                          {
                            state: {
                              item,
                            },
                          }
                        )
                      }
                      role="button"
                    >
                      <th scope="row">{index + 1}</th>
                      <th scope="row" style={{ fontSize: "14px" }}>
                        {item.code}
                      </th>
                      <th>
                        {item.rate < 0 ? (
                          <i
                            className="fa-solid fa-caret-down"
                            style={{ color: "#ff173e", fontSize: "1.5rem" }}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid fa-caret-up"
                            style={{ color: "#00a97f", fontSize: "1.5rem" }}
                          ></i>
                        )}
                      </th>
                      <td>{item.lastprice}</td>
                      <td>{item.min}</td>
                      <td>{item.max}</td>
                      <td>{item.hacimstr.slice(1)}</td>
                      {item.rate > 0 ? (
                        <td
                          className="text-success"
                          style={{ color: "#00a97f" }}
                        >
                          {item.rate}
                        </td>
                      ) : (
                        <td
                          className="text-danger"
                          style={{ color: "#ff173e" }}
                        >
                          {item.rate}
                        </td>
                      )}
                      <td>{item.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <button
              className="btn btn-secondary  mt-5 "
              onClick={() => navigate("/all-stocks")}
            >
              Detaylı tablo için tıklayın
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <StickySidebar />
        </div>
      </div>
    </div>
  );
  // }
};

export default Stock;
