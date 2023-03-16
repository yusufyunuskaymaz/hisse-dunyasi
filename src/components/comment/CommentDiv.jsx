// import { useFetch } from "../../utils/function";
import { useContext, useState } from "react";
import CommentInput from "./CommentInput";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import YasalUyari from "./YasalUyari";
import { useFetch } from "../../utils/function";
import ReplyComment from "./ReplyComment";
import CommonCommentDiv from "./CommonCommentDiv";

function CommentDiv({ commentList, itemCode, type }) {
  const data = useFetch(type, itemCode);
  const [replyCommentId, setReplyCommentId] = useState();

  // console.log(data,"mapped data")

  return (
    <div>
      <div className="row justify-content-center mt-5 ps-2">
        <div className="col-12 mb-3">
          <h1> Yorumlar</h1>
          <CommentInput itemCode={itemCode} type={type} />
        </div>
        {data.commentList.sort((a,b)=>(b.time-a.time)).map((item, index) => {
          return (
            <div className="comments ms-0 ps-1" key={index+1} >
              <CommonCommentDiv item={item} setReplyCommentId={setReplyCommentId} />
              {replyCommentId === item.id ? (
                <div className="w-75 ms-5">
                  <ReplyComment itemCode={itemCode} id={item.id} type={type}  />
                </div>
              ) : null}
              {item?.subCommentList.sort((a,b)=>b.time-a.time).map((item, index)=>{
                return (
                  // <p className="text-success ms-5">{item.body}</p>
                  <div  key={index+1}>
                    <CommonCommentDiv item={item} sub={"subComment"} />
                  </div>
                )
              })}
            </div>
          );
        })}
      </div>
      <YasalUyari />
    </div>
  );
}

export default CommentDiv;
