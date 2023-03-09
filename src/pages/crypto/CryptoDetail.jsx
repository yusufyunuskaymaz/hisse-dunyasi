import { useLocation } from "react-router-dom";
import CurrencyComment from "../../components/comment/CurrencyComment";
import StickySidebar from "../../components/stock/StickySidebar";
import { useFetch } from "../../utils/function";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import Widget from "./Widget";

function CryptoDetail() {
  const { commentList } = useFetch();

  const { state: item } = useLocation();
  const navigate = useNavigate();

  let itemCode = item.name.replace(/^\s+|\s+$/gm, "");
  let itemSymbol = item.symbol.replace(/^\s+|\s+$/gm, "");

  return (
    <div className="container  g-4">
        

        <div className="row">
          <div className="col-lg-8">
          <div
            className=""
            style={{
              color: "orange",
              fontSize: "2rem",
              background: "#464c52",
              textAlign: "start",
              padding: "2rem",
            }}
          >
            <i
              className="fa-regular fa-star"
              style={{ marginRight: "1rem" }}
            ></i>
            {item?.name}
          </div>
          <div className="row  p-4 mb-5 align-items-center justify-content-between">
            <div className="col-1">
              {item?.price_change_percentage_24h < 0 ? (
                <i
                  className="fa-solid fa-caret-down"
                  style={{ color: "red", fontSize: "4rem" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-caret-up"
                  style={{ color: "green", fontSize: "4rem" }}
                ></i>
              )}
            </div>
            <div className="col-5 ">
              <span style={{ fontSize: "2rem" }}>{item.current_price}</span>
              <div>Son:{item.last_updated}</div>
            </div>

            <div className="col-3">
              {item.price_change_percentage_24h < 0 ? (
                <i
                  className="fa-solid fa-caret-down"
                  style={{ color: "red", fontSize: "2rem" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-caret-up"
                  style={{ color: "green", fontSize: "2rem" }}
                ></i>
              )}
              <span style={{ fontSize: "2rem" }}>
                {" "}
                {item.price_change_percentage_24h}{" "}
              </span>
              <div>Günlük Değişim</div>
            </div>
            <div className="col-3">
            <a href="#comments"> <Button
                color="red"
                size="md"
              >
                <FaPencilAlt /> Yorum Yap
              </Button></a>
            </div>
          </div>
        
            <h3>{item.code}</h3>
            <Widget itemSymbol={itemSymbol} />
            <div id="comments">
            <CurrencyComment itemCode={itemCode} commentList={commentList} />
            </div>
          </div>

          <div className="col-lg-4">
            <StickySidebar />
          </div>
        </div>
    </div>
  );
}
export default CryptoDetail;
