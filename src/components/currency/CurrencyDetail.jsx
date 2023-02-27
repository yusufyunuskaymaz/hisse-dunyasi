import { useLocation, useParams } from "react-router-dom";

function CurrencyDetail() {
  const { state: item } = useLocation();

  console.log(item?.code);
  return (
    <div>
      <div className="container border mb-2">
        <div className="row">
          <div className="col-8 border border-4" >
            <div className="" style={{color:"orange",fontSize:"2rem"}}>{item?.code}</div>
            <div className="row">
              <div className=" col-4 border border-4">
                {item.selling}
                <div>
                  Son:{item.date} {item.time}
                </div>
              </div>
             
              <div className="col-2 border border-4">{item.rate} Günlük Değişim</div>
              <div className="col-2 border border-4">{item.rate} En Yüksek</div>
              <div className="col-2 border border-4">{item.rate} En Düşük</div>
              <div className="col-2 border border-4">Yorumlar</div>
            </div>
          </div>

          <div className="col-4 stickyDiv"></div>
        </div>
      </div>
    </div>
  );
}
export default CurrencyDetail;
