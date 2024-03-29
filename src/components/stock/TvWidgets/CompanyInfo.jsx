import React, { useEffect, useRef } from "react";

const CompanyInfo = ({ itemTitle }) => {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "isTransparent": false,
        "largeChartUrl": "",
        "displayMode": "regular",
        "width": 600,
        "height": 830,
        "symbol": "BIST:${itemTitle}",
        "locale": "tr"
      }`;
    contariner.current.appendChild(script);
  }, []);
  return (
    <div className="tradingview-widget-container" ref={contariner}>
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
  );
};

export default CompanyInfo;
