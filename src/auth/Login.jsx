import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import "./Reglog.css";

const Login = () => {
  const { handleSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните данные!");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };
    handleSignIn(formData, email);
  };

  return (
    <div className="body2">
      <div className="wrapper">
        <span className="bg-animate"></span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
              />
              <label>Email</label>
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot_pass">
              <a href="/forgot  ">Forgot password?</a>
            </div>
            <button onClick={handleSave} type="submit" className="btn">
              Login
            </button>
            <div className="logreg-link">
              <p>
                Don't have an account ?
                <a className="register-link" href="/sign-up">
                  Sign-up
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-text login">
          <h2>Welcome Back!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
