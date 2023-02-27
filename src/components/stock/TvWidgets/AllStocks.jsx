// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function AllStocks() {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "width": 1300,
        "height": "2000",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "turkey",
        "showToolbar": true,
        "colorTheme": "light",
        "locale": "tr"
      }`;
    contariner.current.appendChild(script);
  }, []);

  return (
    <div className="container table-responsive" ref={contariner}>
      <div className="row ">
        <div className="col ">
          <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright">
              <a
                href="https://tr.tradingview.com/screener/"
                rel="noopener"
                target="_blank"
              >
                <span class="blue-text">Hisse takipçisi</span>
              </a>{" "}
              TradingView tarafından
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AllStocks);
