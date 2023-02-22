import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StockChart from "./StockChart";


const StockDetail = () => {
  const { state } = useLocation();
  const { item } = state;
  const navigate = useNavigate();


  return (
    <div className="container">
        <StockChart />
      <button className="btn btn-success" onClick={() => navigate("/")}>
        Ana Sayfa
      </button>
      <button className="btn btn-warning ms-3" onClick={() => navigate(-1)}>
        Geri
      </button>
      <div className="row justify-content-center">
        <div className="col col-lg-4">
          <h3 className="display-4">{item.title}</h3>
          <table
            className="table table-striped table-hover table-sm"
            style={{ width: "15rem" }}
          >
            <thead>
              <tr>
                <th scope="col">Hisse </th>
                <th scope="col">Son</th>
                <th scope="col">Alış</th>
                <th scope="col">Satış</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{item.title}</th>
                <td>{item.son}</td>
                <td>{item.alis}</td>
                <td>{item.satis}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
