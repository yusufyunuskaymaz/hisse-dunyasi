import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {  useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { AddComment } from "../../utils/function";

export default function CommentInput({itemCode, type}) {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser,"user1")


  const [content, setContent] = useState({
    body:"",
    email:"",
    name:"",
    time:Date.now()
    })

  const handleChange =(e)=>{
    
    setContent({...content, body:e.target.value,email:currentUser.email, name:currentUser.displayName })
    
  }
  // console.log(content,"content")
  const handleSubmit =()=>{
    if(!currentUser.email ){ 
      alert("Yorum yapmak için giriş yapın...")
    }
    else if(content.body.trim() === ""){
      alert("Bu alan boş bırakılamaz")
    }else{
      AddComment(type,itemCode,  content)
      setContent({...content,body:""})
    }
  }




  return (
    <Form >
      <FloatingLabel controlId="floatingTextarea2" label="Yorumunuzu yazın...">
        <Form.Control
          as="textarea"
          placeholder=""
          style={{ height: "100px" }}
          name="content"
          maxLength={5000}
          value={content.body}
          onChange={(e)=>handleChange(e)}
        />
        <div className="text-end m-3">
          <Button
          onClick={handleSubmit}
          >Yorumu Gönder</Button>
        </div>
      </FloatingLabel>
    </Form>
  );
}
