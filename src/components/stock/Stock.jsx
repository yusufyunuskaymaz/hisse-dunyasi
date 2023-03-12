import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import StickySidebar from "./StickySidebar";
import { BIST_100 } from "./BIST_100";
import { Form } from "react-bootstrap";

const Stock = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allStock, setAllStock] = useState([])
  
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
        setAllStock(data)
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

  const showAllStocks = ()=>{
    const data = allStock.sort((a, b) => (a.code < b.code ? -1 : 1))
    setData(data)
  }

  useEffect(() => {
    getDataFromApi();
  }, []);

  const navigate = useNavigate();
  const [showOrHide, setShowOrHide] = useState(false)
  
  const changeStock = ()=>{
    setShowOrHide(!showOrHide)
    if(!showOrHide){
      showAllStocks()
    }else{
      filterAndSortInitialData(allStock)
    }
  }
  
  console.log(data,"dsa")
  if (loading) {
    return (
      <div className="container text-center">
        <div className="loading">
          <i
            className="fa fa-spinner fa-spin "
            style={{ fontSize: "1.5rem" }}
          ></i>
          <h3>Loading...</h3>{" "}
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-center">
            <h1 className="text-center mb-5 fs-1 bist100 title mt-1">
              Bist 100 Tablo
            </h1>
            <div className="d-flex justify-content-between px-3">
              <p className="text-muted">{data.length} adet</p>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Tümünü göster"
              onChange={()=>changeStock()}
              style={{ transform: "scale(1.2)" }}
            />
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" >
                      #
                    </th>
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
                  {/* // .sort((a, b) => (a.code < b.code ? -1 : 1)) */}
                  {data.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() =>
                          navigate(`${item.text.toLowerCase().replace(" ", "-")}`, {
                            state: {
                              item,
                            },
                          })
                        }
                        role="button"
                      >

                        <th
                          scope="row"
                        >
                          {index+1}
                        </th>
                        <th
                          scope="row"
                          style={{ color: "#2962ff", fontSize: "14px" }}
                        >
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
              <div className="text-center">
                <button
                  className="btn btn-primary mb-5 "
                  onClick={() => navigate("/all-stocks")}
                >
                  Tümünü Gör
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <StickySidebar />
          </div>
        </div>
      </div>
    );
  }
};

export default Stock;
