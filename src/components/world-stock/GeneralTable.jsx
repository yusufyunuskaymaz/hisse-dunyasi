import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const GeneralTable = ({stockCode, width, height}) => {
  const contariner = useRef();
  const navigate = useNavigate()
  console.log(stockCode,"ss")
  if(stockCode === "united kingdom"){
    stockCode = "uk"
  }


  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "width": ${width},
        "height": ${height},
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "${stockCode}",
        "showToolbar": false,
        "colorTheme": "light",
        "locale": "tr"
      }`;
    contariner.current.appendChild(script);
  }, []);
  
  return (
    <div className="container "
    >
      <div className="row">
        <div className="col ps-0">
          <div className="tradingview-widget-container" ref={contariner}
              onClick={()=>navigate("/stock")}

          >
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://tr.tradingview.com/symbols/BIST-THYAO/financials-overview/"
                rel="noopener"
                target="_blank"
              >
                <span className="blue-text">THYAO temeller</span>
              </a>{" "}
              TradingView tarafından
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GeneralTable;
