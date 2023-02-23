import { useNavigate } from "react-router-dom";

function Crypto() {
  const navigate = useNavigate();
  const list = [
    "Bitcoin Türk Lirası",
    "Bitcoin Amerikan Doları",
    "Bitcoin TetherUS",
    "Ethereum Türk Lirası",
    "Ethereum TetherUS",
    "Ethereum Amerikan Doları",
    "Bitcoin Cash TetherUS",
    "Litecoin TetherUS",
    "Ripple Türk Lirası",
    "Ripple TetherUS",
    "EOS Türk Lirası",
    "EOS TetherUS",
    "1inch TetherUS",
    "Aave TetherUS",
    "Acala Token TetherUS",
    "Alchemy Pay TetherUS",
    "Cardano Türk Lirası",
    "Cardano Amerikan Doları",
    "Cardano TetherUS",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-responsive table-striped table-hover table-sm">
            <thead>
              <tr className="text-white" style={{ background: "#464c52" }}>
                <th scope="col">Kripto Para </th>
                <th scope="col"> Yön </th>
                <th scope="col"> Son </th>
                <th scope="col">Değişim % </th>
                <th scope="col">Tarih </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                return (
                  <tr key={index}>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`${item}`)}
                    >
                      {item}
                    </th>
                    <th>
                      <i className="fa-solid fa-play"></i>
                    </th>

                    <td>15 </td>
                    <td>0.17%</td>
                    <td>12:01</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-4 stickyDiv"></div>
      </div>
    </div>
  );
}

export default Crypto;
