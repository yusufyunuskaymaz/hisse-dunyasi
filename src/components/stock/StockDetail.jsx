import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutCompany from "./AboutCompany";
import Analiz from "./Analiz";
import CompanyInfo from "./CompanyInfo";
import Kazananlar from "./Kazananlar";
import StockChart from "./StockChart";
import TradingViewWidget from "./TradingView";

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
      </div>
     <div className="row">
      <div className="col">
        <div className="">
          <div className="stockDetail mb-5">

          </div>
        <Kazananlar />
        </div>
        
      </div>
     </div>
    </div>
  );
};

export default StockDetail;
