import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import "./Reglog.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { handleSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    // <div>
    //   <h1>Sign in</h1>
    //   <div className="input_box">
    //     <input
    //       onChange={(e) => setEmail(e.target.value)}
    //       type="text"
    //       placeholder="email"
    //     />
    //   </div>
    //   <div className="input_box">
    //     <input
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       placeholder="password"
    //     />
    //   </div>
    //   <div className="forgot_pass">
    //     <a href="#">Forgot password?</a>
    //   </div>

    //   <button onClick={handleSave}>Signin</button>
    //   <div className="register-link">
    //     <p>
    //       Dont have an account? <a href="/sign-up">SignUp</a>
    //     </p>
    //   </div>
    // </div>
    <div className="body">
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
              <i class="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <button onClick={handleSave} type="submit" className="btn">
              Login
            </button>
            <div className="logreg-link">
              <p>
                Don't have an account ?
                <a
                  className="register-link"
                  onClick={() => navigate("/sign-up")}
                >
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
