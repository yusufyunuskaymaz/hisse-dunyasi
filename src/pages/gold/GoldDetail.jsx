import { useLocation,useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaPencilAlt } from "react-icons/fa";
import { useFetch } from "../../utils/function";
import StickySidebar from "../../components/stock/StickySidebar";
import CommentDiv from "../../components/comment/CommentDiv";

function GoldDetail() {
  const navigate = useNavigate();
  const { state: item } = useLocation();
    console.log(item);
    let itemCode = item.name
    const {commentList}=useFetch();

    return (
      <div className="container  g-4">
        <div className="row">
          <div className=" col-sm-12 col-md-8">
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
              <i className="fa-regular fa-star" style={{ marginRight: "1rem" }}></i>
              {item?.name}
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
                <span style={{ fontSize: "2rem" }}>{item?.selling}</span>
                <div>
                  Son:{item?.date} {item?.time}
                </div>
              </div>
  
              <div className="col-3">
                {item?.rate < 0 ? (
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
                <span style={{ fontSize: "2rem" }}> {item?.rate} </span>
                <div>Günlük Değişim</div>
              </div>
              <div className="col-3">
                <Button onClick={()=>navigate("/")}
                  variant="outline-dark"
                  size="lg"
                  
                >
                  <FaPencilAlt /> Yorum Yap
                </Button>
              </div>
              <CommentDiv itemCode={itemCode} commentList={commentList} />

            </div>
        
          </div>
  
          <div className="col-lg-4">
            <StickySidebar />
          </div>
        </div>
     
      </div>
    );
}
export default GoldDetail;
