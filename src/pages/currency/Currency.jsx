import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StickySidebar from "../../components/stock/StickySidebar";
import CurrencySidebar from "../../components/stock/TvWidgets/CurrencySidebar";
import { useFetch } from "../../utils/function";

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
      .then((res) => setNewCurrencyData(res.data.result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getNewCurrency();
  }, []);
  // console.log(currencyData);

  // console.log(newCurrencyData);
  if (loading) {
    return (
      <div className="container text-center">
        <div className="loading">
          <i
            className="fa fa-spinner fa-spin "
            style={{ fontSize: "1.5rem" }}
          ></i>
          <h3>Loading...</h3>{" "}
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 g-3 table-responsive">
            <div className="title-currency text-center">
            <h1 className=" fs-1 bist100 title mt-1">Döviz Tablosu</h1>
            </div>
              <table className="table   table-hover ">
                <thead>
                  <tr className="text-white">
                    <th>Döviz Cinsi</th>
                    <th scope="col"> Yön </th>
                    <th scope="col">Alış </th>
                    <th scope="col">Satış </th>
                    <th scope="col">Değişim % </th>
                    <th scope="col">Saat </th>
                  </tr>
                </thead>
                <tbody>
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
                              style={{ color: "red", fontSize: "1.5rem" }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-caret-up"
                              style={{ color: "green", fontSize: "1.5rem" }}
                            ></i>
                          )}
                        </th>
                        <td>{item.buying.toFixed(4)} </td>
                        <td>{item.selling.toFixed(4)} </td>
                        <td>{item.rate.toFixed(2)}</td>
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
  }
}

export default Currency;
