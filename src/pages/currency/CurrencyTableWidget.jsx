// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": 720,
        "height": 400,
        "currencies": [

         "EUR",
         "USD",
         "JPY",
         "GBP",
         "CHF",
         "AUD",
         "CAD",
         "NZD",
         "TRY"
         ],
  
      
       "isTransparent": false,
       "colorTheme": "light",
       "locale": "tr"
      }`;
    contariner.current.appendChild(script);
  }, []);

  return (
    <div className="container mb-5">
      <div className="tradingview-widget-container" ref={contariner}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
