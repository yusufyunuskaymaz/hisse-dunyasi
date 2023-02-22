import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Currency() {
  const navigate = useNavigate();
  const [currencyData, setCurrencyData] = useState([]);
  const URL = "http://hasanadiguzel.com.tr/api/kurgetir";

  const getCurrency = async () => {
    const data = await axios.get(URL);
    setCurrencyData(data.data.TCMB_AnlikKurBilgileri);
  };

  useEffect(() => {
    getCurrency();
  }, []);
  // console.log(currencyData);

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <table className="table table-responsive table-striped table-hover table-sm">
              <thead>
                <tr className="text-white" style={{ background: "#464c52" }}>
                  <th>Döviz Cinsi</th>
                  <th scope="col"> Yön </th>
                  <th scope="col">Alış </th>
                  <th scope="col">Satış </th>
                  <th scope="col">Değişim % </th>
                  <th scope="col">Saat </th>
                </tr>
              </thead>
              <tbody>
                {currencyData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`${item.Isim}`)}
                      >
                        {item.Isim}
                      </th>
                      <th>
                        <i className="fa-solid fa-play"></i>
                      </th>
                      <td>{item.ForexBuying} </td>
                      <td>{item.ForexSelling} </td>
                      <td>
                        {(item.ForexSelling - item.ForexBuying).toFixed(2)}
                      </td>
                      <td>
                        {hours < 10 ? "0" + hours : hours}:
                        {minutes < 10 ? "0" + minutes : minutes}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="col-4 stickyDiv"></div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
