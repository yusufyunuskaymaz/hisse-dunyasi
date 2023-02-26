import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutCompany from "./TvWidgets/AboutCompany";
import Analiz from "./TvWidgets/Analiz";
import CompanyInfo from "./TvWidgets/CompanyInfo";
import Kazananlar from "./TvWidgets/Kazananlar";
import News from "./News";
import StockChart from "./StockChart";
import TradingViewWidget from "./TvWidgets/TradingView";


const StockDetail = () => {
  const { state } = useLocation();
  const { item } = state;
  const navigate = useNavigate();

  

  return (
    <div className="container w-75 d-flex justify-content-evenly">
      <div className="row justify-content-center flex-column">
        <div className="col">
          <TradingViewWidget itemTitle={item.code} />
        </div>
        <div className="col">
          <h3 className="display-4">{item.code}</h3>
          <table
            className="table table-striped table-hover table-sm"
            style={{ width: "15rem" }}
          >
            <thead>
              <tr>
                <th scope="col">Hisse </th>
                <th scope="col">Son</th>
                <th scope="col">Min</th>
                <th scope="col">Max</th>
                <th scope="col">Hacim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{item.code}</th>
                <td>{item.lastprice}</td>
                <td>{item.min}</td>
                <td>{item.max}</td>
                <td>{item.hacimstr}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col ps-0">
          <CompanyInfo itemTitle={item.code} />
        </div>
        <div className="col ps-0">
          <AboutCompany itemTitle={item.code} />
        </div>
        <div className="col ps-0">
          <Analiz itemTitle={item.code} />
        </div>
        <div className="col ps-0 mb-5">
          <News itemTitle={item.code} itemText={item.text} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="">
            <div className="stockDetail mb-5"></div>
            <Kazananlar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
