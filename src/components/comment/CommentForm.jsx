import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";

import { AddComment } from "../../utils/function";
import { AuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function CommentForm({itemCode}) {
  // console.log(itemCode,"555")
  const { currentUser } = useContext(AuthContext);
  const [comment, setComment] = useState({
    content: "",
    username: "",
    photoURL: "",
    time: "",
    author:"",

  });

  const { content } = comment;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(comment);
    if (currentUser.email) {
      if (comment.content.trim() !== "") {
        AddComment(comment);
      } else {
        alert("Yorum alanı boş bırakılamaz.");
      }
    } else {
      alert("Yorum yapabilmek için lütfen giriş yapınız.");
    }

    setComment({ content: "" });
  };
      // itemCode:itemCode,
  const handleForm = (e) => {
    setComment({
      ...comment,
      itemCode:itemCode,
      content: e.target.value,
      author:currentUser?.email,
      username: currentUser?.displayName || "admin",
      photoURL:
        currentUser?.photoURL ||
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      time: Date.now(),
    });
  };

  // console.log(comment.content);
  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingTextarea2" label="Yorumunuzu yazın">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="content"
          maxLength={5000}
          value={content}
          onChange={handleForm}
        />
        <div className="text-end m-3">
          <Button type="submit">Yorumu Gönder</Button>
        </div>
      </FloatingLabel>
    </Form>
  );
}
