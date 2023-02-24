import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const News = ({ itemTitle, itemText }) => {
  const [data, setData] = useState([]);
  const [socketData, setSocketData] = useState([]);
  const socket = io.connect("https://hisse-dunyasi-backend-production.up.railway.app/");
  const itemLink =
    `${itemTitle}-${itemText}-detay/hisse-haberleri/`.toLowerCase("tr");

  const sendMessage = () => {
    console.log("first");
    const messageData = "deneme";

    socket.emit("send_message", messageData);
  };
  useEffect(() => {
    const getNews = async () => {
      // Your code to get news data here
    };

    const sendMessage = () => {
      console.log("first");
      const messageData = { itemTitle, itemLink };
      socket.emit("send_message", messageData);
    };

    sendMessage();

    socket.on("receive_message", (data) => {
      console.log(data);
      setSocketData(data);
    });
  }, []);
  const navigate = useNavigate();
  console.log(data, "burası2");
  console.log(socketData, "ss");
  return (
    <ul class="list-group">
      {socketData.map((item) => {
        return (
          <li
            class="list-group-item fw-bold"
            type="button"
            style={{ fontSize: "14px" }}
            onClick={() =>
              (window.location.href = `https://bigpara.hurriyet.com.tr/${item.link}`)
            }
          >
            <p
              className="text-dark fw-lighter mb-2"
              style={{ fontSize: "12px" }}
            >
              {item.date}
            </p>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default News;
