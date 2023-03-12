import app, { commentsApp } from "../auth/firebase";
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
export const AddComment = (type, code, content) => {
  console.log(type, code, content, "eklendi...");
  const db = getDatabase(commentsApp);
  const commentRef = ref(db, `${type}/${code}`);
  const newCommentRef = push(commentRef);

  set(newCommentRef, content);
};

// READ COMMENT

export const useFetch = (type, code) => {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    const db = getDatabase(commentsApp);
    const commentRef = ref(db, `${type}/${code}`);

    onValue(commentRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        const commentObj = data[id];
        const subCommentList = commentObj.subCommentList || {};
        const subCommentArray = [];

        for (let subCommentId in subCommentList) {
          subCommentArray.push({
            id: subCommentId,
            ...subCommentList[subCommentId],
          });
        }

        const comment = {
          id,
          ...commentObj,
          subCommentList: subCommentArray,
        };

        userArray.push(comment);
      }

      setCommentList(userArray);
    });
  }, []);

  return { commentList };
};

export const UpdateComment = (type, code, id, content) => {
  const db = getDatabase(commentsApp);
  const commentRef = ref(db, `${type}/${code}/${id}/subCommentList`);

  return push(commentRef, content);
};
