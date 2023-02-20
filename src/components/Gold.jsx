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
  ];
  const values = [
    "value1",
    "value2",
    "value3",
    "value4",
    "value5",
    "value6",
    "value7",
    "value8",
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
