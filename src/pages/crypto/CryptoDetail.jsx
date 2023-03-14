import { useLocation } from "react-router-dom";
import CryptoSidebar from "../../components/stock/TvWidgets/CryptoSidebar";

import { useFetch } from "../../utils/function";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import Widget from "./Widget";
import CommentDiv from "../../components/comment/CommentDiv";
import moment from "moment";
import "moment/locale/tr";

function CryptoDetail() {
  const { commentList } = useFetch();

  const { state: item } = useLocation();
  const navigate = useNavigate();

  let itemCode = item.name.replace(/^\s+|\s+$/gm, "");
  let itemSymbol = item.symbol.replace(/^\s+|\s+$/gm, "");
  moment.locale("tr");

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div
            className="rounded"
            style={{
              color: "#1e53e5",
              fontSize: "2rem",
              background: "#e3effd",
              textAlign: "start",
              padding: "2rem",
            }}
          >
            <i
              className="fa-regular fa-star"
              style={{ marginRight: "1rem", color: "#1e53e5", zIndex: "999" }}
            ></i>
            {item?.name}
          </div>
          <div className="row mb-5 align-items-center justify-content-between general-info">
            <div className="col ">
            <div className="d-flex align-items-center">
            {item?.price_change_percentage_24h < 0 ? (
                <i
                  className="fa-solid fa-caret-down me-3"
                  style={{ color: "red", fontSize: "4rem" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-caret-up me-3"
                  style={{ color: "green", fontSize: "4rem" }}
                ></i>
              )}
              <span style={{ fontSize: "2rem" }}>{item.current_price}</span>
            </div>
              <div className="me-0 d-none d-lg-block"
              style={{margin:"0 0 !important"}}
              >
                Son:{" "}
                {moment(item.last_updated).format("MMMM Do YYYY, HH:mm:ss", {
                  hour12: false,
                })}
              </div>
            </div>

            <div className="col p-0">
              <div className="d-flex align-items-center">
              {item.price_change_percentage_24h < 0 ? (
                <i
                  className="fa-solid fa-caret-down me-3"
                  style={{ color: "red", fontSize: "2rem" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-caret-up me-3"
                  style={{ color: "green", fontSize: "2rem" }}
                ></i>
              )}
              <span className="info-mobil" style={{ fontSize: "2rem" }}>
                {" "}
                {item.price_change_percentage_24h}{" "}
              </span>
              </div>
              <div className="d-none d-lg-block">Günlük Değişim</div>
            </div>
            <div className="col">
              <a href="#comments">
                {" "}
                <Button color="red" size="md">
                  <FaPencilAlt /> Yorum Yap
                </Button>
              </a>
            </div>
          </div>

          <h3>{item.code}</h3>
          <div className="d-none d-lg-block">
          <Widget itemSymbol={itemSymbol} />
          </div>
          <div id="comments" className="ms-0">
            <CommentDiv itemCode={itemCode} commentList={commentList} />
          </div>
        </div>

        <div className="col-lg-4">
          <CryptoSidebar />
        </div>
      </div>
    </div>
  );
}
export default CryptoDetail;
