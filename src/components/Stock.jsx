import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Stock = () => {
  const [data, setData] = useState([]);
  const [currentMessage, setCurrentMessage] = useState([]);
  const sendMessage = () => {
    console.log("first");
    const messageData = "deneme";

    socket.emit("send_message", messageData);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setData(data);
    });
    sendMessage();
  }, [socket]);

  return (
    <div className="container">
      <button className="btn btn-warning" onClick={sendMessage}>Yenile</button>

      <div className="row">
        <div className="col-lg-8">
          <h1>Stock</h1>
          <table
            className="table table-striped  table-sm"
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
                <th scope="col">Alış</th>
                <th scope="col">Satış</th>
                <th scope="col">Yüksek</th>
                <th scope="col">Düşük</th>
                <th scope="col">A. ort</th>
                <th scope="col">%</th>
                <th scope="col">Hacim(Lot)</th>
                <th scope="col">Hacim(Tl)</th>
                <th scope="col">Son İş.</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.title}</th>
                    <td>{item.son}</td>
                    <td>{item.alis}</td>
                    <td>{item.satis}</td>
                    <td>{item.yuksek}</td>
                    <td>{item.dusus}</td>
                    <td>{item.aylik_ort}</td>
                    <td>{item.yuzde}</td>
                    <td>{item.hacim_lot}</td>
                    <td>{item.hacim_tl}</td>
                    <td>{item.son_islem}</td>
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
  );
};

export default Stock;
