import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Forgot = () => {
  const { handleForgot } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter your email!");
      return;
    }

    const formData = {
      email: email,
    };

    handleForgot(formData);
  };

  return (
    <div>
      <h1>Forgot Your Password?</h1>
      <p>
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Back to Login?
        <Link to="/sign-in">Login</Link>
      </p>
    </div>
  );
};

export default Forgot;
