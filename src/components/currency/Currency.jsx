import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Currency() {
  const navigate = useNavigate();

  const [newCurrencyData, setNewCurrencyData] = useState([]);

  const URL = "https://api.collectapi.com/economy/allCurrency";

  const getNewCurrency = async () => {
    const data = await axios.get(URL, {
      headers: {
        Authorization: `apikey 2mIw6dYO7rrvEhJnchneMs:1k0jNh9oWEHMR7QHhS8Mle`,
      },
    });
    // console.log(data.data.result);
    setNewCurrencyData(data.data.result);
  };

  useEffect(() => {
    getNewCurrency();
  }, []);
  // console.log(currencyData);
  // console.log(newCurrencyData);

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
                {newCurrencyData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`${item?.code}`)}
                      >
                        {item?.code}
                      </th>
                      <th>
                        {item.rate < 0 ? (
                          <i
                            class="fa-solid fa-caret-down"
                            style={{ color: "red", fontSize: "1.5rem" }}
                          ></i>
                        ) : (
                          <i
                            class="fa-solid fa-caret-up"
                            style={{ color: "green", fontSize: "1.5rem" }}
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

          <div className="col-4 stickyDiv"></div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
