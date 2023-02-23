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
          <TradingViewWidget itemTitle={item.title} />
        </div>
        <div className="col">
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
        <div className="col ps-0">
          <CompanyInfo itemTitle={item.title} />
        </div>
        <div className="col ps-0">
          <AboutCompany itemTitle={item.title} />
        </div>
        <div className="col ps-0">
          <Analiz itemTitle={item.title} />
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
