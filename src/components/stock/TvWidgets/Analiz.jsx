import React, { useEffect, useRef } from "react";

const Analiz = ({ itemTitle }) => {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "interval": "1m",
        "width": 600,
        "isTransparent": false,
        "height": 500,
        "symbol": "BIST:${itemTitle}",
        "showIntervalTabs": true,
        "locale": "tr",
        "colorTheme": "light"
      }`;
    contariner.current.appendChild(script);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col ps-0">
          <div className="tradingview-widget-container" ref={contariner}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://tr.tradingview.com/symbols/NASDAQ-AAPL/technicals/"
                rel="noopener"
                target="_blank"
              >
                <span className="blue-text">AAPL hisse analizi</span>
              </a>{" "}
              TradingView tarafından
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analiz;
