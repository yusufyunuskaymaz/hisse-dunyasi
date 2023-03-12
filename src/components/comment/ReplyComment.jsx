import React, { useContext, useRef, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContextProvider";
import { UpdateComment } from "../../utils/function";

const ReplyComment = ({itemCode,id,type}) => {
  const { currentUser } = useContext(AuthContext);
  const textAreaRef = useRef()

  const [content, setContent] = useState({
    body: "",
    email: currentUser.email,
    name: currentUser.displayName || "Kullanıcı",
    time: Date.now(),
  });

  const handleChange = (e) => {
    setContent({ ...content, body: e.target.value });
  };

  const handleSubmit = () => {
    if (!currentUser.email) {
      alert("Yorum yapmak için giriş yapın...");
    } else if (content.body.trim() === "") {
      alert("Bu alan boş bırakılamaz");
    } else {
      UpdateComment(type,itemCode,id,content);
      setContent({ ...content, body: "" });
      
    }
  };


  return (
    <Form ref={textAreaRef}>
      <FloatingLabel controlId="floatingTextarea2" label="Yorumunuzu yazın...">
        <Form.Control
          as="textarea"
          placeholder=""
          style={{ height: "100px" }}
          name="content"
          maxLength={5000}
          value={content.body}
          onChange={(e) => handleChange(e)}
        />
        <div className="text-end m-3">
          <Button onClick={handleSubmit}>Yanıtı Gönder</Button>
        </div>
      </FloatingLabel>
    </Form>
  );
};

export default ReplyComment;
