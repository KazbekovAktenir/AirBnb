import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import "./Reglog.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleSignUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!email.trim() || !password.trim() || !password2.trim()) {
      alert("Все поля обязательны для заполнения");
      return;
    }
    if (password !== password2) {
      alert("Пароли не совпадают");
      return;
    }

    const formData = {
      email: email,
      password: password,
      password2: password2,
    };
    handleSignUp(formData);
  };
  return (
    // <div>
    //   <form>
    //     <h1>Sign up</h1>
    //     <div className="input_box">
    //       <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="text"
    //         placeholder="email"
    //       />
    //       <i className="bx bxs-user"></i>
    //     </div>
    //     <div className="input_box">
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="password"
    //       />
    //       <i className="bx bxs-lock-alt"></i>
    //     </div>
    //     <div className="input_box">
    //       <input
    //         onChange={(e) => setPassword2(e.target.value)}
    //         type="password"
    //         placeholder="password2"
    //       />
    //       <i className="bx bxs-lock-alt"></i>
    //     </div>

    //     <button onClick={handleSave}>SignUp</button>
    //     <div className="register-link">
    //       <p>
    //         Already have an account? <a href="/sign-in">Login</a>
    //       </p>
    //     </div>
    //   </form>
    // </div>
    <div className="body">
      <div className="wrapper">
        <span className="bg-animate2"></span>
        <div className="form-box register">
          <h2>Sign-up</h2>
          <form action="#">
            <div className="input-box">
              <input
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              <i class="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                onChange={(e) => setPassword2(e.target.value)}
              />
              <label>Confirm Password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <button onClick={handleSave} type="submit" className="btn">
              Sign Up
            </button>
            <div className="logreg-link">
              <p>
                Already have an account ?
                <a className="login-link" onClick={() => navigate("/sign-in")}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-text register">
          <h2>Welcome Back!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
