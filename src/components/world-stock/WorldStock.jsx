import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import { WorldStocklist } from "./worldStockList";
import { Form, Table } from "react-bootstrap";

const WorldStock = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

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
          <div className="col-lg-8 text-center">
            <h1 className="text-center mb-5 fs-1 bist100 title mt-1">
              Dünya Borsaları
            </h1>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {WorldStocklist.map((item) => {
                  console.log(item, "dd");
                  return (
                    <tr
                    onClick={()=>navigate(`item`,{state:item})}
                    >
                      <td style={{textAlign:"left"}}>{item}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="col-lg-4">{/* <StickySidebar /> */}</div>
        </div>
      </div>
    );
  }
};

export default WorldStock;
