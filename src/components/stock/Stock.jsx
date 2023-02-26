import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import StickySidebar from "./StickySidebar";
// const socket = io.connect("http://localhost:3001");

const Stock = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMessage, setCurrentMessage] = useState([]);
  // const sendMessage = () => {
  //   console.log("first");
  //   const messageData = "deneme";

  //   socket.emit("send_message", messageData);
  // };

  const getDataFromApi = () => {
    console.log("girdi");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    };
    axios
      .get("https://api.collectapi.com/economy/hisseSenedi", config)
      .then((res) => {
        setData(res.data.result);
        setLoading(false);
      });
  };

  useEffect(() => {
    // socket.on("receive_message", (data) => {
    //   console.log(data);
    //   setData(data);
    // });
    // sendMessage();
    getDataFromApi();
  }, []); //socket

  const navigate = useNavigate();
  console.log(data, "data");

  const BIST_100 = [
    "AEFES",
    "AFYON",
    "AKBNK",
    "AKENR",
    "AKSA",
    "AKSEN",
    "ALARK",
    "ALGYO",
    "ANELE",
    "ARCLK",
    "ASELS",
    "AYGAZ",
    "BAGFS",
    "BANVT",
    "BERA",
    "BIMAS",
    "BIZIM",
    "BJKAS",
    "BRISA",
    "BRSAN",
    "CCOLA",
    "CEMTS",
    "CRFSA",
    "DEVA",
    "DOAS",
    "DOHOL",
    "ECILC",
    "EGEEN",
    "EKGYO",
    "ENKAI",
    "ERBOS",
    "EREGL",
    "FENER",
    "FROTO",
    "GARAN",
    "GLYHO",
    "GOLTS",
    "GOODY",
    "GOZDE",
    "GSDHO",
    "GSRAY",
    "GUBRF",
    "HALKB",
    "HLGYO",
    "HURGZ",
    "ICBCT",
    "IEYHO",
    "IHLAS",
    "IHLGM",
    "IPEKE",
    "ISCTR",
    "ISGYO",
    "KARSN",
    "KARTN",
    "KCHOL",
    "KLGYO",
    "KORDS",
    "KOZAA",
    "KOZAL",
    "KRDMD",
    "MAVI",
    "METRO",
    "MGROS",
    "NETAS",
    "NTHOL",
    "ODAS",
    "OTKAR",
    "PETKM",
    "PGSUS",
    "PRKME",
    "SAHOL",
    "SASA",
    "SISE",
    "SKBNK",
    "SNGYO",
    "TATGD",
    "TAVHL",
    "TCELL",
    "THYAO",
    "TKFEN",
    "TKNSA",
    "TLMAN",
    "TMSN",
    "TOASO",
    "TRCAS",
    "TSKB",
    "TTKOM",
    "TTRAK",
    "TUPRS",
    "ULKER",
    "VAKBN",
    "VESTL",
    "VKGYO",
    "YATAS",
    "YKBNK",
    "ZOREN",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="text-center mb-4">BIST 100 Tablo</h1>
          <div className="table-responsive">
            <table
              className="table table-hover"
              //   style={{ width: "15rem" }}
            >
              {/* <thead>
                <tr className="text-white" style={{ background: "#464c52" }}>
                  <th scope="col" colSpan="13">
                    BIST100 Tablo
                  </th>
                </tr>
              </thead> */}
              <thead>
                <tr>
                  <th scope="col">Adı</th>
                  <th scope="col">Son</th>
                  <th scope="col">Min</th>
                  <th scope="col">Max</th>
                  <th scope="col">Hacim(Tl)</th>
                  <th scope="col">%</th>
                  <th scope="col">Son İş.</th>
                </tr>
              </thead>
              {loading ? (
                <div className="w-100 text-center">
                  <div className="d-flex justify-content-center ">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              ) : (
                <tbody>
                  {data
                    .filter((item) => {
                      return BIST_100.includes(item.code);
                    })
                    .sort((a, b) => (a.code < b.code ? -1 : 1))
                    .map((item, index) => {
                      let dataRate;

                      return (
                        <tr
                          key={index}
                          onClick={() =>
                            navigate(`${item.code}`, {
                              state: {
                                item,
                              },
                            })
                          }
                          role="button"
                        >
                          <th
                            scope="row"
                            style={{ color: "#2962ff", fontSize: "14px" }}
                          >
                            {item.code}
                          </th>
                          <td>{item.lastprice}</td>
                          <td>{item.min}</td>
                          <td>{item.max}</td>
                          <td>{item.hacimstr}</td>
                          {item.rate > 0 ? (
                            <td className="text-success">{item.rate}</td>
                          ) : (
                            <td className="text-danger">{item.rate}</td>
                          )}
                          <td>{item.time}</td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
            </table>
            <div className="text-center">
              <button
                className="btn btn-primary mb-5 "
                onClick={() => navigate("/all-stocks")}
              >
                Tümünü Gör
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <StickySidebar />
        </div>
      </div>
    </div>
  );
};

export default Stock;
