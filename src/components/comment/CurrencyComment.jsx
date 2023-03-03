// import { useFetch } from "../../utils/function";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import CommentForm from "./CommentForm";
import { MdDelete } from "react-icons/md";
import { DeleteComment } from "../../utils/function";
import moment from "moment";

function CurrencyComment({ commentList }) {
  //  const {isLoading,commentList}=useFetch();
  //  console.log(commentList);
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1> Yorumlar</h1>
      <h4>
        Yasal Uyarı: https://hisse-dunyasi.netlify.app/'de yer alan bilgi, yorum
        ve tavsiyeler Yatırım Danışmanlığı kapsamında değildir. Yorumlar
        kullanıcıların kişisel görüşlerinden ibarettir. Bu görüş ve bilgilere
        dayanılarak alınacak yatırım kararları beklentilerinize uygun sonuçlar
        doğurmayabilir. Dolayısıyla kullanıcıların yorumlarına göre yatırım
        kararı almamanız konusunda kesinlikle uyarıyoruz.
      </h4>
      <CommentForm />
      <div className="row">
        {commentList?.map((item) => {
          return (
            <div className="col-12" key={item.id}>
              <div
                className="card border border-3"
                style={{ marginBottom: "1rem", padding: "1rem" }}
              >
                <div>
                  <div>
                    <h3 style={{ color: "green" }}>{item?.username }</h3>
                  </div>
                  <img
                    width="50px"
                    src={
                      item?.photoURL 
                    }
                    alt=""
                  />
                  <div>
                    <span style={{ color: "green" }}>
                      {moment(item?.time).format("MMM DD, YYYY")}
                    </span>
                  </div>
                  <span>{item?.content}</span>
                </div>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CurrencyComment;
