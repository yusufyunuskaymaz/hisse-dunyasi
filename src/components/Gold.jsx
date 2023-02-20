function Gold() {
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
    "22 Ayar Altın TL/Gr",
    "18 Ayar Altın TL/Gr",
    "14 Ayar Altın TL/Gr",
    "Kapalicarsi Ziynet 2.5",
    "Kapalı Çarşı Beşli Altın",
    "Gremse Altın",
    "Ata Altın",
    "Tam Altın",
    "Külçe Altın ($)",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-responsive table-striped table-hover table-sm">
            <thead>
              <tr className="text-white" style={{ background: "#464c52" }}>
                <th scope="col">Altın Cinsi </th>
                <th scope="col">Alış </th>
                <th scope="col">Satış </th>
                <th scope="col">Değişim % </th>
                <th scope="col">Saat </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => {
                return (
                  <>
                    <tr>
                      <th>{item}</th>
                      <td>10 tl</td>
                      <td>15 tl</td>
                      <td>0.17%</td>
                      <td>12:01</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Gold;
