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
      .then((res) => {
        setGold(res.data.result);
        localStorage.setItem("goldData", JSON.stringify(res.data.result));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("goldData"));

    if (res) {
      console.log("bura çalışıyor");
      setGold(res);
    } else {
      getGold();

    }
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
            <div>
              <p className="mb-2 text-muted" align="left">
                Detaylı görüntülemek için üzerine tıklayın.
              </p>
            </div>
            <table className="table  table-hover shadow table-bordered  table-striped">
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
                {loading && (
                  <div className="loading text-center">
                    <i
                      className="fa fa-spinner fa-spin "
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                )}
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
                            style={{ color: "#ff173e", fontSize: "1.5rem" }}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid fa-caret-up"
                            style={{ color: "#00a97f", fontSize: "1.5rem" }}
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
