import { useNavigate } from "react-router-dom";
import StickyDiv from "../router/StickyDiv";
import StickySidebar from "../stock/StickySidebar";

function Gold() {
  const navigate = useNavigate();
  const list = [
    "ALTIN (TL/GR)",
    "22 Ayar Bilezik",
    "Altın (ONS)",
    "Altın ($/kg)",
    "Altın (Euro/kg)",
    "Cumhuriyet Altını",
    "Yarım Altın",
    "Çeyrek Altın",
    "Reşat Altını",
    "Kulplu Reşat Altını",
    "22 Ayar Altın TL",
    "18 Ayar Altın TL",
    "14 Ayar Altın TL",
    "Kapalicarsi Ziynet 2.5",
    "Kapalı Çarşı Beşli Altın",
    "Gremse Altın",
    "Ata Altın",
    "Tam Altın",
    "Külçe Altın ($)",
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <table className="table table-responsive table-striped table-hover table-sm">
              <thead>
                <tr className="text-white" style={{ background: "#464c52" }}>
                  <th scope="col">Altın Cinsi </th>
                  <th scope="col"> Yön </th>
                  <th scope="col">Alış </th>
                  <th scope="col">Satış </th>
                  <th scope="col">Değişim % </th>
                  <th scope="col">Saat </th>
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
                      <td>10 </td>
                      <td>15 </td>
                      <td>0.17%</td>
                      <td>12:01</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="col-4">
            <StickySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gold;
