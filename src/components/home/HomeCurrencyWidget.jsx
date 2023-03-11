// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function HomeCurrencyWidget({ itemTitle }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
   
  {
  "title": "Döviz",
  "tabs": [
    {
      "title": "Majör",
      "title_raw": "Major",
      "symbols": [
        {
          "s": "FX_IDC:EURUSD",
          "d": "EUR/USD"
        },
        {
          "s": "FX_IDC:USDJPY",
          "d": "USD/JPY"
        },
        {
          "s": "FX_IDC:GBPUSD",
          "d": "GBP/USD"
        },
        {
          "s": "FX_IDC:AUDUSD",
          "d": "AUD/USD"
        },
        {
          "s": "FX_IDC:USDCAD",
          "d": "USD/CAD"
        },
        {
          "s": "FX_IDC:USDCHF",
          "d": "USD/CHF"
        }
      ],
      "quick_link": {
        "title": "Diğer Majörler",
        "href": "/markets/currencies/rates-major/"
      }
    },
    {
      "title": "Minör",
      "title_raw": "Minor",
      "symbols": [
        {
          "s": "FX_IDC:EURGBP",
          "d": "EUR/GBP"
        },
        {
          "s": "FX_IDC:EURJPY",
          "d": "EUR/JPY"
        },
        {
          "s": "FX_IDC:GBPJPY",
          "d": "GBP/JPY"
        },
        {
          "s": "FX_IDC:CADJPY",
          "d": "CAD/JPY"
        },
        {
          "s": "FX_IDC:GBPCAD",
          "d": "GBP/CAD"
        },
        {
          "s": "FX_IDC:EURCAD",
          "d": "EUR/CAD"
        }
      ],
      "quick_link": {
        "title": "Diğer Minörler",
        "href": "/markets/currencies/rates-minor/"
      }
    },
    {
      "title": "Egzotik",
      "title_raw": "Exotic",
      "symbols": [
        {
          "s": "FX_IDC:USDSEK",
          "d": "USD/SEK"
        },
        {
          "s": "FX_IDC:USDMXN",
          "d": "USD/MXN"
        },
        {
          "s": "FX_IDC:USDZAR",
          "d": "USD/ZAR"
        },
        {
          "s": "FX_IDC:EURTRY",
          "d": "EUR/TRY"
        },
        {
          "s": "FX_IDC:EURNOK",
          "d": "EUR/NOK"
        },
        {
          "s": "FX_IDC:GBPPLN",
          "d": "GBP/PLN"
        }
      ],
      "quick_link": {
        "title": "Diğer Egzotikler",
        "href": "/markets/currencies/rates-exotic/"
      }
    }
  ],
  "title_link": "/markets/currencies/rates-major/",
  "width": 400,
  "height": 660,
  "showChart": true,
  "showFloatingTooltip": false,
  "locale": "tr",
  "plotLineColorGrowing": "#2962FF",
  "plotLineColorFalling": "#2962FF",
  "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
  "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
  "gridLineColor": "rgba(240, 243, 250, 0)",
  "scaleFontColor": "rgba(120, 123, 134, 1)",
  "showSymbolLogo": true,
  "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
  "colorTheme": "light"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div class="tradingview-widget-container" ref={container}>
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/cryptocurrencies/"
          rel="noopener"
          target="_blank"
        >
          <span class="blue-text">Bitcoin and Altcoin Prices</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
}

export default memo(HomeCurrencyWidget);
