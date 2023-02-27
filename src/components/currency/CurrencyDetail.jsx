import { useLocation, useParams } from "react-router-dom";


function CurrencyDetail() {
  const { state: item } = useLocation();

  console.log(item);
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-8 ">
            <div
              className=""
              style={{
                color: "orange",
                fontSize: "2rem",
                background: "#464c52",
                textAlign: "start",
                padding: "1rem",
              }}
            >
              {item?.code}
            </div>
            <div
              className="row  "
              style={{
                fontSize: "2rem",
                padding: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className=" col-4 ">
                <div>Alış</div>
                {item.buying}
              </div>
              <div className="col-4">
                <div>Satış</div>
                {item.selling}
              </div>
              <div className="col-4 ">
                <button style={{ padding: "1rem", borderRadius: "1rem" }}>
                  
                  Yorumlar
                </button>
              </div>
            </div>
          </div>

          <div className="col-4 stickyDiv"></div>
        </div>
      </div>
    </div>
  );
}
export default CurrencyDetail;
