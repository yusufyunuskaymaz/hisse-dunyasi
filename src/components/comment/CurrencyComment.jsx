// import { useFetch } from "../../utils/function";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import CommentForm from "./CommentForm";
import { MdDelete } from "react-icons/md";

import { DeleteComment } from "../../utils/function";
import moment from "moment";
import YasalUyari from "./YasalUyari";

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
=======
function CurrencyComment({ commentList, itemCode }) {
  //  const {isLoading,commentList}=useFetch();
  const [selectedCommentId, setSelectedCommentId] = useState("")

  const { currentUser } = useContext(AuthContext);

  const handleDelete =(id)=>{
    if(window.confirm("Yorumu silmek istediğinize emin misiniz")){
      DeleteComment(id)
    }
>>>>>>> 32f15e0689b8ba669c976e0b84441da5d8d73a43
  }

  const handleClick = (id) => {
    setSelectedCommentId(id);
  };

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
                  <div className="reply mt-3 mb-3" type="button"
                  onClick={()=>handleClick(item.id)}
                  >
                    <span className="">Cevap ver</span>
                  </div>
                  {
                    selectedCommentId === item.id ? (<div className="col-lg-8">
                    <CommentForm itemCode={itemCode} />
                    </div>) : null
                  }
                  {item.author === currentUser.email ? (
                    <div
                      onClick={() => handleDelete(item.id)}
                      className="text-end"
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    >
                      <MdDelete />
                    </div>
                  ) : null}
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
