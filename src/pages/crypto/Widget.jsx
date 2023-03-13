// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ itemSymbol }) {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BİTCOİN",
              ":${itemSymbol}USDT|1D"
            ]
          ],
          "chartOnly": false,
          "width": 730,
          "height": 500,
          "locale": "tr",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "lineColor": "#2962ff",
          "topColor": "rgba(41, 98, 255, 0.3)",
          "bottomColor": "rgba(41, 98, 255, 0)",
          "lineWidth": 3
        }`;
    contariner.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={contariner}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://tr.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">BTCUSDT oranlar</span>
        </a>{" "}
        TradingView tarafından
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
