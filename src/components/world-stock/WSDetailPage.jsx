import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AboutCompany from "./TvWidgets/AboutCompany";
import Analiz from "./TvWidgets/Analiz";
import CompanyInfo from "./TvWidgets/CompanyInfo";
import Kazananlar from "./TvWidgets/Kazananlar";
import News from "./Kap/News";
import TradingViewWidget from "./TvWidgets/TradingView";
import StickySidebar from "./StickySidebar";
import { useFetch } from "../../utils/function";
import CommentDiv from "../comment/CommentDiv";

const WSDetailPage = () => {
  const { state } = useLocation();


  // console.log(item,"item...")

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 ps-1 ">
          <div className="col d-none d-md-block">
            <TradingViewWidget itemTitle={item.code} />
          </div>

          <div className="col table-responsive w-75 rounded stock-detail-table">
            <table className="table table-borderless stock-table">
              <thead>
                <tr className="text-center main-bg ">
                  <th scope="col" colSpan="5" className="main-color ps-0">
                    {item.text}
                  </th>
                </tr>
                <tr>
                  <th scope="col" colSpan="2" rowSpan="2">
                    Son
                  </th>
                  <th scope="col">Min</th>
                  <th scope="col">Max</th>
                  <th scope="col">Hacim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" rowSpan="2">
                    {item.lastprice}
                  </td>
                  <td>{item.min}</td>
                  <td>{item.max}</td>
                  <td className="capacity">{item.hacimstr}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="col d-none d-lg-block ps-0 ">
            <CompanyInfo itemTitle={item.code} />
          </div>
          <div className="col d-none d-lg-block d-none d-md-block">
            <AboutCompany itemTitle={item.code} />
          </div> */}
          {/* <div className="col d-none d-lg-block ps-0">
            <Analiz  itemTitle={item.code} />
          </div>
          <div className="col">
            <CommentDiv itemCode={itemCode} type={type} />
          </div> */}
        </div>
        <div className="col-lg-4">
          <StickySidebar />
        </div>
      </div>
    </div>
  );
};

export default WSDetailPage;
