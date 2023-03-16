import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const News = ({ itemTitle, itemText }) => {
  const [data, setData] = useState([]);
  const [socketData, setSocketData] = useState([]);
  const [numberOfNews, setNumberOfNews] = useState(7);
  const [newsBody, setNewsBody] = useState(""); // Create a state variable for news body

  const socket = io.connect("localhost:3001", {
    transports: ["websocket"],
  });
  const itemLink =
    `${itemTitle}-${itemText}-detay/hisse-haberleri/`.toLowerCase("tr");

  const sendLink = (link) => {
    socket.emit("news_link", link);
  };

  const goToNewsDetail = (body) => {
    navigate("/stock/newsDetail", { state: body });
  };

  useEffect(() => {
    const sendMessage = () => {
      const messageData = { itemTitle, itemLink };
      socket.emit("send_message", messageData);
    };
    sendMessage();

    socket.on("receive_message", (data) => {
      setSocketData(data);
    });
    socket.on("news_body", (body) => {
      setNewsBody(body, goToNewsDetail(body)); // set the newsBody state variable to data4
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div
      className="news border border-muted p-3 w-75 mb-5"
      style={{ borderRadius: "3px" }}
    >
      <h2>
        <span style={{ color: "#2962ff" }}>{itemTitle}</span> KAP Haberleri
      </h2>
      <ul className="list-group">
        {socketData.slice(0, numberOfNews).map((item) => {
          return (
            <li
              className="list-group-item fw-bold"
              type="button"
              style={{ fontSize: "13px" }}
              onClick={() => sendLink(item.link)}
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
        {numberOfNews >= socketData.length ? (
          <span></span>
        ) : (
          <div className="text-center">
            <button
              className="btn btn-secondary col-3 mt-2 mb-5 text-center"
              onClick={() => setNumberOfNews(numberOfNews + 7)}
            >
              Daha fazla...
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default News;
