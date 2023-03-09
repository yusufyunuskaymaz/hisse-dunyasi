import { padding } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoSidebar from "../../components/stock/TvWidgets/CryptoSidebar";
function Crypto() {
  const navigate = useNavigate();

  const [newCryptoData, setNewCryptoData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getNewCrypto = () => {
    setIsLoading(true);
    axios
      .get(URL)
      .then((res) => setNewCryptoData(res.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getNewCrypto();
  }, []);
  // console.log(currencyData);

  console.log(newCryptoData, "ccc");

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
              <table className="table   table-hover ">
                <thead>
                  <tr className="text-white">
                    <th>Crypto Cinsi</th>
                    <th scope="col"> Yön </th>
                    <th scope="col">Fiyat </th>
                    <th scope="col">En Yüksek </th>
                    <th scope="col">En Düşük </th>
                    <th scope="col">% Değişim </th>
                  </tr>
                </thead>
                <tbody>
                  {newCryptoData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate(`${index}`, { state: item })}
                        >
                          {item?.id}
                        </th>
                        <th>
                          {item?.market_cap_change_percentage_24h < 0 ? (
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
                        <td>{item.current_price.toFixed(4)} </td>
                        <td>{item.high_24h.toFixed(4)} </td>
                        <td>{item.low_24h.toFixed(2)}</td>
                        <td>
                          {item.market_cap_change_percentage_24h.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="col-lg-4">
              <CryptoSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;
