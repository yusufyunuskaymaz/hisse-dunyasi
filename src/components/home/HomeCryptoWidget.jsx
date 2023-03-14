// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function HomeCryptoWidget({ itemTitle }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "title": "Cryptocurrencies",
        "title_raw": "Cryptocurrencies",
        "tabs": [
          {
            "title": "Overview",
            "title_raw": "Overview",
            "symbols": [
             
              {
                "s": "BITSTAMP:BTCUSD"
              },
              {
                "s": "BITSTAMP:ETHUSD"
              },
              {
                "s": "FTX:SOLUSD"
              },
              {
                "s": "BINANCE:AVAXUSD"
              },
              {
                "s": "COINBASE:UNIUSD"
              }
            ],
            "quick_link": {
              "title": "More cryptocurrencies",
              "href": "/markets/cryptocurrencies/prices-all/"
            }
          },
          {
            "title": "Bitcoin",
            "title_raw": "Bitcoin",
            "symbols": [
              {
                "s": "BITSTAMP:BTCUSD"
              },
              {
                "s": "COINBASE:BTCEUR"
              },
              {
                "s": "COINBASE:BTCGBP"
              },
              {
                "s": "BITFLYER:BTCJPY"
              },
              {
                "s": "CEXIO:BTCRUB"
              },
              {
                "s": "CME:BTC1!"
              }
            ],
            "quick_link": {
              "title": "More Bitcoin pairs",
              "href": "/symbols/BTCUSD/markets/"
            }
          },
          {
            "title": "Ethereum",
            "title_raw": "Ethereum",
            "symbols": [
              {
                "s": "BITSTAMP:ETHUSD"
              },
              {
                "s": "KRAKEN:ETHEUR"
              },
              {
                "s": "COINBASE:ETHGBP"
              },
              {
                "s": "BITFLYER:ETHJPY"
              },
              {
                "s": "BINANCE:ETHBTC"
              },
              {
                "s": "BINANCE:ETHUSDT"
              }
            ],
            "quick_link": {
              "title": "More Ethereum pairs",
              "href": "/symbols/ETHUSD/markets/"
            }
          },
          {
            "title": "Solana",
            "title_raw": "Solana",
            "symbols": [
              {
                "s": "FTX:SOLUSD"
              },
              {
                "s": "BINANCE:SOLEUR"
              },
              {
                "s": "COINBASE:SOLGBP"
              },
              {
                "s": "BINANCE:SOLBTC"
              },
              {
                "s": "HUOBI:SOLETH"
              },
              {
                "s": "BINANCE:SOLUSDT"
              }
            ],
            "quick_link": {
              "title": "More Solana pairs",
              "href": "/symbols/SOLUSD/markets/"
            }
          },
          {
            "title": "Uniswap",
            "title_raw": "Uniswap",
            "symbols": [
              {
                "s": "COINBASE:UNIUSD"
              },
              {
                "s": "KRAKEN:UNIEUR"
              },
              {
                "s": "COINBASE:UNIGBP"
              },
              {
                "s": "BINANCE:UNIBTC"
              },
              {
                "s": "KRAKEN:UNIETH"
              },
              {
                "s": "BINANCE:UNIUSDT"
              }
            ],
            "quick_link": {
              "title": "More Uniswap pairs",
              "href": "/symbols/UNIUSD/markets/"
            }
          }
        ],
        "title_link": "/markets/cryptocurrencies/prices-all/",
        "width": 380,
        "height": 600,
        "showChart": true,
        "showFloatingTooltip": false,
        "locale": "tr",
        "largeChartUrl": "https://hisse-dunyasi.netlify.app/crypto/",
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
          href="https://www.tradingview.com/markets/currencies/"
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

export default memo(HomeCryptoWidget);
