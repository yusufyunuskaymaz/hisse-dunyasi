import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";
// const socket = io.connect("http://localhost:3001");

const Stock = () => {
  const [data, setData] = useState([]);
  const [currentMessage, setCurrentMessage] = useState([]);
  // const sendMessage = () => {
  //   console.log("first");
  //   const messageData = "deneme";

  //   socket.emit("send_message", messageData);
  // };

  const getDataFromApi = () => {
    console.log("girdi")
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": "apikey 5AgkLxu3nrlKZ7pKKHEury:6gU7ouXtLMyQ8SrJr1n39X"
      },
    };
    axios.get("https://api.collectapi.com/economy/hisseSenedi", config).then((res)=>{
      console.log("g")
      setData(res.data.result)
    })
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

  return (
    <div className="container">

      <div className="row">
        <div className="col-lg-8">
          <h1>Stock</h1>
          <div className="table-responsive">
          <table
            className="table table-striped  table-sm "
            //   style={{ width: "15rem" }}
          >
            <thead>
              <tr className="text-white" style={{ background: "#464c52" }}>
                <th scope="col" colSpan="13">
                  BIST100 Tablo
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">Menkul Adı </th>
                <th scope="col">Son</th>
                <th scope="col">Min</th>
                <th scope="col">Max</th>
                <th scope="col">Hacim(Tl)</th>
                <th scope="col">%</th>
                <th scope="col">Son İş.</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0,100).map((item, index) => {
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
                    <th scope="row">{item.text}</th>
                    <td>{item.lastprice}</td>
                    <td>{item.min}</td>
                    <td>{item.max}</td>
                    <td>{item.hacimstr}</td>
                    <td>{item.rate}</td>
                    <td>{item.time}</td>
                    {/* <td>{item.son}</td>
                    <td>{item.alis}</td>
                    <td>{item.satis}</td>
                    <td>{item.yuksek}</td>
                    <td>{item.dusus}</td>
                    <td>{item.aylik_ort}</td>
                    <td>{item.yuzde}</td>
                    <td>{item.hacim_lot}</td>
                    <td>{item.hacim_tl}</td>
                    <td>{item.son_islem}</td> */}
                    {/* <td>{item.son}</td>
                      <td>{item.son}</td> */}
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
