// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function SidebarWidget({itemTitle}) {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "symbol": "BINANCE:BTCUSDT",
        "width": 350,
        "height": 220,
        "locale": "tr",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
      }`;
    contariner.current.appendChild(script);
  }, []);

  return (
    <div className="contariner" >

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
  );
}

export default memo(SidebarWidget);
