import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";

const Register = () => {
  const { handleSignUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSave = () => {
    if (!email.trim() || !password.trim() || !password2.trim()) {
      alert("Все поля обязательны для заполнения");
      return;
    }
    if (password !== password2) {
      alert("Пароли не совпадают");
      return;
    }
    // let formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("password2", password2);
    // handleSignUp(formData);

    const formData = {
      email: email,
      password: password,
      password2: password2,
    };
    handleSignUp(formData);
  };
  return (
    <div>
      <h1>Register</h1>
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
      <input
        onChange={(e) => setPassword2(e.target.value)}
        type="password"
        placeholder="password2"
      />
      <button onClick={handleSave}>Continue</button>
    </div>
  );
};

export default Register;
