// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({itemTitle}) {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": 480,
        "height": 650,
        "colorTheme": "light",
        "isTransparent": false,
        "symbol": "BIST:${itemTitle}",
        "locale": "en"
      }`;
    contariner.current.appendChild(script);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="tradingview-widget-container" ref={contariner}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              TradingView'den{" "}
              <a
                href="https://tr.tradingview.com/symbols/MSFT/"
                rel="noopener"
                target="_blank"
              >
                <span className="blue-text">Microsoft</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
