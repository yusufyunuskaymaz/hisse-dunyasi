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
          <div className="tradingview-widget-container p-0 " ref={contariner}>
            <div className="tradingview-widget-container__widget p-0"></div>
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
  );
}

export default memo(TradingViewWidget);
