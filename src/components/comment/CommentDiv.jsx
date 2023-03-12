// import { useFetch } from "../../utils/function";
import { useContext, useState } from "react";
import CommentInput from "./CommentInput";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import YasalUyari from "./YasalUyari";
import { useFetch } from "../../utils/function";

function CommentDiv({ commentList, itemCode, type }) {
  const data = useFetch(type, itemCode);
  console.log(data,"mapp")

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 mb-3">
          <h1> Yorumlar</h1>
          <CommentInput itemCode={itemCode} type={type} />
        </div>
        {data.commentList.map((item, index) => {
          return (
            <div className="comments">
              <div className="d-flex comment-avatar">
                <p>{item.name.slice(0,1)}</p>
                <p>{item.name}</p>
                <p>{moment(item.time).format("DD MMM, YYYY")}</p>
              </div>
              <div>
                <p>{item.body}</p>
              </div>
              <div>
                <p>Cevap ver</p>
              </div>
            </div>
          );
        })}
      </div>
      <YasalUyari />
    </div>
  );
}

export default CommentDiv;
