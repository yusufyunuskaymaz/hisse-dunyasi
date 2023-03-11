// import { useFetch } from "../../utils/function";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import CommentForm from "./CommentForm";
import { MdDelete } from "react-icons/md";

import { DeleteComment } from "../../utils/function";
import moment from "moment";

function CurrencyComment({ commentList, itemCode, isLoading }) {
  const { currentUser } = useContext(AuthContext);

  const commentButtonStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "grey",
  };
  if (isLoading) {
    return (
      <div className="container text-center">
        <div className="loading">
          <i
            className="fa fa-spinner fa-spin "
            style={{ fontSize: "1.5rem" }}
          ></i>
          <h3>Loading...</h3>{" "}
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div>
        <h1> Yorumlar</h1>

        <CommentForm itemCode={itemCode} />
        <div className="row">
          {commentList
            ?.filter((item) => {
              return item.itemCode === itemCode;
            })
            .map((item) => {
              return (
                <div className="col-12" key={item.id}>
                  <div
                    className="card border border-3"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    <div>
                      <div>
                        <h3 style={{ color: "green" }}>{item?.username}</h3>
                      </div>
                      <img width="50px" src={item?.photoURL} alt="" />
                      <div>
                        <span style={{ color: "green" }}>
                          {moment(item?.time).format("DD MMM, YYYY")}
                        </span>
                      </div>
                      <span>{item?.content}</span>
                    </div>

                    <div className="text-end">
                      <MdDelete
                        onClick={() => {
                          item.author === currentUser.email
                            ? DeleteComment(item.id)
                            : alert("Sadece yorum sahibi yorumunu silebilir.");
                        }}
                        style={commentButtonStyle}
                      />
                    </div>
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

  return (
    <div>
      <h1> Yorumlar</h1>

      <CommentForm itemCode={itemCode} />
      <div className="row">
        {commentList
          ?.filter((item) => {
            return item.itemCode === itemCode;
          })
          .map((item) => {
            return (
              <div className="col-12" key={item.id}>
                <div
                  className="card border border-3"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <div>
                    <div>
                      <h3 style={{ color: "green" }}>{item?.username}</h3>
                    </div>
                    <img width="50px" src={item?.photoURL} alt="" />
                    <div>
                      <span style={{ color: "green" }}>
                        {moment(item?.time).format("DD MMM, YYYY")}
                      </span>
                    </div>
                    <span>{item?.content}</span>
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
