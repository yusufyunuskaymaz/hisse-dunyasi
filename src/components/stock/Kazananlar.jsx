import React, { useEffect, useRef } from "react";

const Kazananlar = () => {
  const contariner = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "colorTheme": "light",
        "dateRange": "12M",
        "exchange": "BIST",
        "showChart": true,
        "locale": "tr",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "400",
        "height": "600",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
      }`;
    contariner.current.appendChild(script);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col ps-0">
          <div class="tradingview-widget-container" ref={contariner}>
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright">
              <a
                href="https://tr.tradingview.com/symbols/BIST-THYAO/financials-overview/"
                rel="noopener"
                target="_blank"
              >
                <span class="blue-text">THYAO temeller</span>
              </a>{" "}
              TradingView tarafından
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kazananlar;
