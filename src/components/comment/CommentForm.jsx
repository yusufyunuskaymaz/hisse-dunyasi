import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { AddComment } from "../../utils/function";

export default function CommentForm() {
   const {currentUser}=useContext(AuthContext); 
  const [comment, setComment] = useState({
    username: "",
    photURL: "",
    time: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(comment);
    setComment("");
  };

  const handleForm = (e) => {
    e.preventDefault();
    setComment({
      username: currentUser.email || "admin",
      photURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      time: new Date(),
      content: e.target.value,
    });
    AddComment(comment)
  };
//    console.log(comment)
  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingTextarea2" label="Yorumunuzu yazın">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          maxLength={5000}
          value={comment?.content || ""}
          onChange={handleForm}
        />
        <div className="text-end m-3">
          <Button type="submit">Yorumu Gönder</Button>
        </div>
      </FloatingLabel>
    </Form>
  );
}
