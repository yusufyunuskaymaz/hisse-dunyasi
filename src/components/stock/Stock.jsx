import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import StickySidebar from "./StickySidebar";
import { BIST_100 } from "./BIST_100";


const Stock = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataFromApi = () => {
    console.log("girdi");
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": process.env.REACT_APP_TOKEN,
      },
    };
    axios
      .get("https://api.collectapi.com/economy/hisseSenedi", config)
      .then((res) => {
        setData(res.data.result);
        setLoading(false);
      });
  };

  useEffect(() => {

    getDataFromApi();
  }, []); 

  const sortBistData = ()=>{
    return 
  }

  const navigate = useNavigate();


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
          <div className="col-lg-8">
            <h1 className="text-center mb-4">BIST 100 Tablo</h1>
            <div className="table-responsive">
              <table
                className="table table-hover"
                //   style={{ width: "15rem" }}
              >
                {/* <thead>
                <tr className="text-white" style={{ background: "#464c52" }}>
                  <th scope="col" colSpan="13">
                    BIST100 Tablo
                  </th>
                </tr>
              </thead> */}
                <thead>
                  <tr>
                    <th scope="col">Adı</th>
                    <th scope="col"></th>
                    <th scope="col"
                    //  onClick={()=>sortBistData("")} 
                     >Son</th>
                    <th scope="col">Min</th>
                    <th scope="col">Max</th>
                    <th scope="col">Hacim(Tl)</th>
                    <th scope="col">%</th>
                    <th scope="col">Son İş.</th>
                  </tr>
                </thead>

                <tbody>
                  {data
                    .filter((item) => {
                      return BIST_100.includes(item.code);
                    })
                    .sort((a, b) => (a.code < b.code ? -1 : 1))
                    .map((item, index) => {
                      return (
                        <tr
                          key={index}
                          onClick={() =>
                            navigate(`${item.code}`, {
                              state: {
                                item,
                              },
                            })
                          }
                          role="button"
                        >
                          <th
                            scope="row"
                            style={{ color: "#2962ff", fontSize: "14px" }}
                          >
                            {item.code}
                          </th>
                          <th>
                            {item.rate < 0 ? (
                              <i
                                class="fa-solid fa-caret-down"
                                style={{ color: "red", fontSize: "1.5rem" }}
                              ></i>
                            ) : (
                              <i
                                class="fa-solid fa-caret-up"
                                style={{ color: "green", fontSize: "1.5rem" }}
                              ></i>
                            )}
                          </th>
                          <td>{item.lastprice}</td>
                          <td>{item.min}</td>
                          <td>{item.max}</td>
                          <td>{item.hacimstr}</td>
                          {item.rate > 0 ? (
                            <td className="text-success">{item.rate}</td>
                          ) : (
                            <td className="text-danger">{item.rate}</td>
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
