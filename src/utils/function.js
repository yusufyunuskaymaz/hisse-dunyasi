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
    username: comment.username || "admin",
    photoURL:comment.photoURL ||
      " https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    time: `${new Date()}`,
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
      setCommentList(commentArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, commentList };
};

export const DeleteComment=(id)=>{
  const db=getDatabase(app);
  remove(ref(db,"currency/"+id))
}
