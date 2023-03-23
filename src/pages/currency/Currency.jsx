import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StickySidebar from "../../components/stock/StickySidebar";
import CurrencySidebar from "../../components/stock/TvWidgets/CurrencySidebar";
import { useFetch } from "../../utils/function";
import CurrencyTableWidget from "./CurrencyTableWidget";

function Currency() {
  const navigate = useNavigate();
  const { isLoading, commentList } = useFetch();
  console.log(commentList);

  const [newCurrencyData, setNewCurrencyData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const URL = "https://api.collectapi.com/economy/allCurrency";

  const getNewCurrency = () => {
    setIsLoading(true);
    axios
      .get(URL, {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      })
      .then((res) => {
        setNewCurrencyData(res.data.result)
        localStorage.setItem("currencyData",JSON.stringify({
          data:res.data.result,
          time:Date.now()
        }))
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("currencyData"))
    // 900000 = 15 Munites in milliseconds
    if(res && (res.time + 900000 > Date.now())){
      console.log("bura çalışıyor")
      setNewCurrencyData(res.data)
    }else{
      getNewCurrency();

    }
  }, []);
  // console.log(currencyData);

  // console.log(newCurrencyData);

  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 g-3 table-responsive">
            <div className="d-none d-lg-block title-currency text-center">
              <h1 className=" fs-1 bist100 title mt-1 mb-5">
                Çapraz Döviz Kurları
              </h1>
              <CurrencyTableWidget />
            </div>
            <h1 className=" fs-1 bist100 title mt-1">Döviz Piyasası</h1>
            <div>
              <p className="mb-2 text-muted" align="left">Detaylı görüntülemek için üzerine tıklayın.</p>
            </div>
            <table className="table   table-hover shadow table-bordered  table-striped ">
              <thead>
                <tr className="text-dark">
                  <th>Döviz Cinsi</th>
                  <th scope="col"> Yön </th>
                  <th scope="col">Alış </th>
                  <th scope="col">Satış </th>
                  <th scope="col">Değişim % </th>
                  <th scope="col">Saat </th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <div className="container text-center">
                    <div className="loading">
                      <i
                        className="fa fa-spinner fa-spin "
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <h3>Loading...</h3>{" "}
                    </div>{" "}
                  </div>
                )}
                {newCurrencyData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`${index}`, { state: item })}
                      >
                        {item?.code}
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
                      <td>{item.buying} </td>
                      <td>{item.selling} </td>
                      <td>{item.rate}</td>
                      <td>{item.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="col-lg-4">
            <CurrencySidebar />
          </div>
        </div>
        {/* <CurrencyComment commentList={commentList}/> */}
      </div>
    </div>
  );
  // }
}

export default Currency;
