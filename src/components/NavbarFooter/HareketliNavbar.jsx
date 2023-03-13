// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "Dolar",
            "proName": "FX:USDTRY"
          },
          {
            "description": "Euro",
            "proName": "FX:EURTRY"
          },
          {
            "description": "Bist100",
            "proName": "BIST:XU100"
          },
          {
            "description": "Gram Altın",
            "proName": "FX_IDC:XAUTRYG"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
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
