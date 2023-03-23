import { padding } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
      .then((res) => {
        setNewCryptoData(res.data)
        localStorage.setItem("cryptoData",JSON.stringify({
          data:res.data,
          time:Date.now()
        }))

      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("cryptoData"))
    // 900000 = 15 Munites in milliseconds
    if(res && (res.time + 900000 > Date.now())){
      console.log("bura çalışıyor")
      setNewCryptoData(res.data)
    }else{
      getNewCrypto();

    }
  }, []);
  // console.log(currencyData);

  // console.log(newCryptoData, "ccc");

  // if (loading) {
  //   return (
  //     <div className="container text-center">
  //       <div className="loading">
  //         <i
  //           className="fa fa-spinner fa-spin "
  //           style={{ fontSize: "1.5rem" }}
  //         ></i>
  //         <h3>Loading...</h3>{" "}
  //       </div>{" "}
  //     </div>
  //   );
  // } else {
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 g-3 table-responsive ">
              <div className="title-crypto text-center">
                <h1 className=" fs-1 bist100 title mt-1">
                  Kripto Para Piyasası
                </h1>
              </div>
              <div>
              <p className="mb-2 text-muted" align="left">Detaylı görüntülemek için üzerine tıklayın.</p>
            </div>
                <table className="table   table-hover shadow table-bordered  table-striped ">
                  <thead>
                    <tr className="text-dark">
                      <th> </th>
                      <th>Crypto Cinsi</th>
                      <th scope="col"> Yön </th>
                      <th scope="col">Fiyat </th>
                      <th scope="col">En Yüksek </th>
                      <th scope="col">En Düşük </th>
                      <th scope="col">% Değişim </th>
                    </tr>
                  </thead>
                  <tbody>
                  {loading && (
                    <div>
                      <div className="loading text-center">
                      <i
                        className="fa fa-spinner fa-spin "
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                  </div>
                    </div>
                )}
                    {newCryptoData.map((item, index) => {
                      return (
                        <tr key={index+1}>
                          <th>
                            {" "}
                            <img
                              src={item.image}
                              alt="image"
                              width="30px"
                            />{" "}
                          </th>
                          <th
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              navigate(`${index}`, { state: item })
                            }
                          >
                            {item?.name}
                          </th>
                          <th>
                            {item?.market_cap_change_percentage_24h < 0 ? (
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
                          <td>{item.current_price} </td>
                          <td>{item.high_24h} </td>
                          <td>{item.low_24h}</td>
                          <td>
                            {item.market_cap_change_percentage_24h}
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
  // }
}

export default Crypto;
