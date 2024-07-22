import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const ForgotPassword = () => {
  const { handleForgotPassword } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter your email!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    handleForgotPassword(formData);
  };

  return (
    <div>
      <h1>Forgot Your Password?</h1>
      <p>
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Send Reset Link</button>
      <p>
        Back to Login?
        <Link to="/sign-in">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
