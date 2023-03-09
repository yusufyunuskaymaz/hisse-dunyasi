// import { useFetch } from "../../utils/function";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import CommentForm from "./CommentForm";
import { MdDelete } from "react-icons/md";
import { DeleteComment } from "../../utils/function";
import moment from "moment";

function CurrencyComment({ commentList, itemCode }) {
  //  const {isLoading,commentList}=useFetch();

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="row justify-content-center mt-5">
       <div className="col-lg-8 mb-3">
       <h1> Yorumlar</h1>
        <CommentForm itemCode={itemCode} />
       </div>
        {commentList
          ?.filter((item) => {
            return item.itemCode === itemCode;
          })
          .map((item) => {
            return (
              <div className="col-8" key={item.id}>
                <div
                  className="card"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem 0",
                    border: "none",
                  }}
                >
                  <div>
                    <div className="mb-2">
                      <span className="bg-success py-1 px-2 rounded-circle text-white me-3">
                        {item?.username.slice(0, 1).toUpperCase()}
                      </span>
                      <span className="fs-5">{item?.username}</span>{" "}
                      <span className="ms-3 fs-6">
                        {moment(item?.time).format("DD MMM, YYYY")}
                      </span>
                    </div>
                    <span className="ms-5">{item?.content}</span>
                  </div>
                  {item.author === currentUser.email ? (
                    <div
                      onClick={() => DeleteComment(item.id)}
                      className="text-end"
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    >
                      <MdDelete />
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        alert("Sadece yorum sahibi yorumunu silebilir.")
                      }
                      className="text-end"
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    >
                      <MdDelete />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <h4 style={{ fontSize: "13px" }} className="mb-5">
        <span style={{ color: "red" }}>Yasal Uyarı:</span>{" "}
        https://hisse-dunyasi.netlify.app/'de yer alan bilgi, yorum ve
        tavsiyeler Yatırım Danışmanlığı kapsamında değildir. Yorumlar
        kullanıcıların kişisel görüşlerinden ibarettir. Bu görüş ve bilgilere
        dayanılarak alınacak yatırım kararları beklentilerinize uygun sonuçlar
        doğurmayabilir. Dolayısıyla kullanıcıların yorumlarına göre yatırım
        kararı almamanız konusunda kesinlikle uyarıyoruz.
      </h4>
    </div>
  );
}

export default CurrencyComment;
