// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ itemCode }) {
  const contariner = useRef();
  // let Code = itemCode.substring(0, itemCode.indexOf("\n"));
  //   console.log(Code, "bu bizim code");
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
              "Dolar",
              "${itemCode}TRY|1D"
            ]
          ],
          "chartOnly": false,
          "width": 850,
          "height": 500,
          "locale": "tr",
          "colorTheme": "light",
          "autosize": false,
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
          href="https://tr.tradingview.com/symbols/USDTRY/?exchange=FX"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">USD TRY oranlar</span>
        </a>{" "}
        TradingView tarafından
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
