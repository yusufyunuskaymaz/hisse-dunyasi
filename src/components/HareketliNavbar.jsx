// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "symbols": [
          
            {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
              },
              {
                "description": "THY",
                "proName": "BIST:THYAO"
              },
              {
                "description": "",
                "proName": "BIST:SASA"
              },
              {
                "description": "",
                "proName": "BIST:ARCLK"
              },
              {
                "description": "",
                "proName": "BIST:AKBNK"
              }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en"
      }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="container mb-5">
        <div className="tradingview-widget-container" ref={contariner}>
      <div className="tradingview-widget-container__widget"></div>
    
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
