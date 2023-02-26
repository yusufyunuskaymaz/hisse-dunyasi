import React, { useState } from "react";
import { createUser } from "../../auth/firebase";
import "./login.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
    console.log(userName);
  };

  return (
    <div className="container2">
      <div className="screen2">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                required
                className="login__input"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-envelope" />
              <input
                type="text"
                required
                className="login__input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                required
                className="login__input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Register</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
          <div className="social-login">
            <h3>Register with</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram" />
              <a href="#" className="social-login__icon fab fa-facebook" />
              <a href="#" className="social-login__icon fab fa-twitter" />
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
};
export default Register;
