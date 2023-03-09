import app from "../auth/firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";

// ADD COMMENT
export const AddComment = (comment) => {
  // console.log("1"+ comment.content);
  const db = getDatabase(app);
  const userRef = ref(db, "currency/");
  const newCurrencyRef = push(userRef);

  set(newCurrencyRef, {
    itemCode:comment.itemCode,
    username: comment.username ,
    photoURL:comment.photoURL ,
    time: comment.time,
    author:comment.author,
    content: comment.content,
  });
};

// READ COMMENT

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commentList, setCommentList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "currency/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const commentArray = [];

      for (let id in data) {
        commentArray.push({ id, ...data[id] });
      }
      setCommentList(commentArray.reverse());
      setIsLoading(false);
    });
  }, []);
  return { isLoading, commentList };
};

export const DeleteComment=(id)=>{
  const db=getDatabase(app);
  remove(ref(db,"currency/"+id))
}
