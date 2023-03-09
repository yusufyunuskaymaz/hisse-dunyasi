import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaPencilAlt } from "react-icons/fa";
import CurrencyComment from "../../components/comment/CurrencyComment";
import { useFetch } from "../../utils/function";
import StickySidebar from "../../components/stock/StickySidebar";
import CurrencySidebar from "../../components/stock/TvWidgets/CurrencySidebar";

function CurrencyDetail() {
  const { isLoading, commentList } = useFetch();

  const { state: item } = useLocation();
  const navigate = useNavigate();

  let itemCode = item.code.replace(/^\s+|\s+$/gm, "");

  return (
    <div className="container  g-4">
      <div className="row">
        <div className=" col-sm-12 col-md-8">
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
            {item?.code}
          </div>
          <div className="row  p-4 mb-5">
            <div className="col-1">
              {item?.rate < 0 ? (
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
              <span style={{ fontSize: "2rem" }}>{item.selling}</span>
              <div>
                Son:{item.date} {item.time}
              </div>
            </div>

            <div className="col-3">
              {item.rate < 0 ? (
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
              <span style={{ fontSize: "2rem" }}> {item.rate} </span>
              <div>Günlük Değişim</div>
            </div>
            <div className="col-3">
              <Button
                onClick={() => navigate("/")}
                variant="outline-dark"
                size="lg"
              >
                <FaPencilAlt /> Yorum Yap
              </Button>
            </div>
            <div className="col mt-5">
              <CurrencyComment itemCode={itemCode} commentList={commentList} />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <CurrencySidebar />
        </div>
      </div>
    </div>
  );
}
export default CurrencyDetail;
