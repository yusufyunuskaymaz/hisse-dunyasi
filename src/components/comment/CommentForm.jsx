import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";

import { AddComment } from "../../utils/function";
import { AuthContext } from "../../context/AuthContextProvider";

export default function CommentForm() {
  const [comment, setComment] = useState({
    content: "",
    username: "",
    photoURL: "",
  });
  const { currentUser } = useContext(AuthContext);
  const { content } = comment;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(comment);
    AddComment(comment);
    setComment({ content: "" });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      username: currentUser.displayName,
      photoURL:currentUser.photoURL,
      [e.target.name]: e.target.value,
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
