import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";

import { AddComment } from "../../utils/function";
import { AuthContext } from "../../context/AuthContextProvider";

export default function CommentForm() {
  const { currentUser } = useContext(AuthContext);
  const [comment, setComment] = useState({
    content: "",
    username: currentUser?.displayName || "admin",
    photoURL:
      currentUser?.photoURL ||
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    time: Date.now(),
  });

  const { content } = comment;
  const handleSubmit = (e) => {
    e.preventDefault();

    AddComment(comment);

    setComment({ content: "" });
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
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
        />
        <div className="text-end m-3">
          <Button type="submit">Yorumu Gönder</Button>
        </div>
      </FloatingLabel>
    </Form>
  );
}
