// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({itemTitle}) {
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
              "THY",
              "BIST:${itemTitle}|1D"
            ]
          ],
          "chartOnly": false,
          "width": 600,
          "height": 300,
          "locale": "tr",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
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
          "chartType": "line"
        }`;
    contariner.current.appendChild(script);
  }, []);

  return (
    <div className="contariner" >
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
