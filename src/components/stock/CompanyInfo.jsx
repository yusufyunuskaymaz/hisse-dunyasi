import React, { useEffect, useRef } from 'react'

const CompanyInfo = () => {
    const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "colorTheme": "light",
        "isTransparent": false,
        "largeChartUrl": "",
        "displayMode": "regular",
        "width": 480,
        "height": 830,
        "symbol": "BIST:THYAO",
        "locale": "tr"
      }`;
      contariner.current.appendChild(script);
    },
    []
  );
  return (
    <div class="tradingview-widget-container" ref={contariner}>
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://tr.tradingview.com/symbols/BIST-THYAO/financials-overview/" rel="noopener" target="_blank"><span class="blue-text">THYAO temeller</span></a> TradingView tarafından</div>
  
</div>
  )
}

export default CompanyInfo