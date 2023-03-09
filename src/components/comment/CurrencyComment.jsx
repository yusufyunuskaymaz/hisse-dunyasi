// import { useFetch } from "../../utils/function";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import CommentForm from "./CommentForm";
import { MdDelete } from "react-icons/md";
import { DeleteComment } from "../../utils/function";
import moment from "moment";
import YasalUyari from "./YasalUyari";

function CurrencyComment({ commentList, itemCode }) {
  //  const {isLoading,commentList}=useFetch();

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="row justify-content-center mt-5">
       <div className="col-12 mb-3">
       <h1> Yorumlar</h1>
        <CommentForm itemCode={itemCode} />
       </div>
        {commentList
          ?.filter((item) => {
            return item.itemCode === itemCode;
          })
          .map((item) => {
            return (
              <div className="col-12" key={item.id}>
                <div
                  className="card"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem 0",
                    border: "none",
                    borderTop:"1px solid rgb(229 231 235)"
                  }}
                >
                  <div>
                    <div className="mb-2">
                      <span className=" py-1 px-2 rounded-circle me-3 fs-5"
                      style={{backgroundColor:"#e3effd", color:"#1e53e5"}}
                      >
                        {item?.username.slice(0, 1).toUpperCase()}
                      </span>
                      <span className="fs-5">{item?.username}</span>{" "}
                      <span className="ms-3 fs-6"
                      style={{color:"rgb(107 114 128)"}}
                      >
                        {moment(item?.time).format("DD MMM, YYYY")}
                      </span>
                    </div>
                    <span className="ms-5"
                    style={{color:"rgb(107 114 128)"}}
                    >{item?.content}</span>
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
      <YasalUyari />
    </div>
  );
}

export default CurrencyComment;
