import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";

const Login = () => {
  const { handleSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните данные!");
      return;
    }
    // let formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);
    // handleSignIn(formData, email);
    const formData = {
      email: email,
      password: password,
    };
    handleSignIn(formData, email);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSave}>Sign in</button>
    </div>
  );
};

export default Login;
