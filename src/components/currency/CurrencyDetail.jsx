import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";



function CurrencyDetail() {
  const { state: item } = useLocation();
  const navigate=useNavigate();

  console.log(item);
  return (
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
              alignItems: "center",color:"green"
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
              <Button onClick={()=>{navigate("/")}}
                style={{ fontSize: "2rem", padding: "1rem" }}
                variant="outline-dark"
              >
                <i class="fa-regular fa-comment-dots"></i> Yorumlar
              </Button>
            </div>
          </div>
        </div>

        <div className="col-4 stickyDiv"></div>
      </div>
    </div>
  );
}
export default CurrencyDetail;
