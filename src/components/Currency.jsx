function Currency() {
  const manuelDoviz = [
    "Amerikan Doları",
    "Euro",
    "İngiliz Sterlini",
    "Avustralya Doları",
    "Kanada Doları",
    "İsviçre Frankı",
    "Çin Yuanı Offshore",
    "Çin Yuanı",
    "Rus Rublesi",
    "İsveç Kronu",
    "Bulgar Levası",
    "Danimarka Kronu",
    "İran Riyali",
    "Japon Yeni",
    "Kuveyt Dinarı",
    "Norveç Kronu",
    "Pakistan Rupisi",
    "Katar Riyali",
    "Romanya Leyi",
    "Suudi Riyali",
    "Güney Afrika Randı",
  ];
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
                {manuelDoviz.map((item) => {
                  return (
                    <>
                      <tr>
                        <th>{item}</th>
                        <th>
                          <i className="fa-solid fa-play"></i>
                        </th>
                        <td>10 </td>
                        <td>15 </td>
                        <td>0.17%</td>
                        <td>12:01</td>
                      </tr>
                    </>
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
