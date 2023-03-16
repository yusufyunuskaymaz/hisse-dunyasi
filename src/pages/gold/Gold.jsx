import { useNavigate } from "react-router-dom";
import StickyDiv from "../../components/component/StickyDiv";
import StickySidebar from "../../components/stock/StickySidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Card } from "react-bootstrap";

function Gold() {
  const navigate = useNavigate();

  const [gold, setGold] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const URL = "https://api.collectapi.com/economy/goldPrice";
  const getGold = () => {
    setIsLoading(true);
    axios
      .get(URL, {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      })
      .then((res) => setGold(res.data.result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getGold();
  }, []);
  // console.log(gold);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 table-responsive">
            <div className="title-crypto text-center">
              <h1 className=" fs-1 bist100 title mt-1">Altın Piyasası</h1>
            </div>
            <Card>
              <table className="table  table-hover shadow">
                <thead>
                  <tr className="text-dark">
                    <th scope="col">Altın Cinsi </th>
                    <th scope="col"> Yön </th>
                    <th scope="col">Alış </th>
                    <th scope="col">Satış </th>
                    <th scope="col">Değişim % </th>
                    <th scope="col">Saat </th>
                  </tr>
                </thead>
                <tbody>
                  {gold.map((item, index) => {
                    // console.log(item)
                    return (
                      <tr key={index}>
                        <th
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate(`${index}`, { state: item })}
                        >
                          {item?.name}
                        </th>
                        <th>
                          {item.rate < 0 ? (
                            <i
                              className="fa-solid fa-caret-down"
                              style={{ color: "red", fontSize: "1.5rem" }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-caret-up"
                              style={{ color: "green", fontSize: "1.5rem" }}
                            ></i>
                          )}
                        </th>
                        <td>{item?.buying.toFixed(2)} </td>
                        <td>{item?.selling.toFixed(2)} </td>
                        <td>{item?.rate}</td>
                        <td> {item?.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>

          <div className="col-lg-4">
            <StickySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gold;
