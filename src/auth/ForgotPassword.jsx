import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const ForgotPassword = () => {
  const { handleForgotConfirm } = useAuth();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const handleSubmit = (e) => {
    if (
      !email.trim() ||
      !code.trim() ||
      !newPassword.trim() ||
      !newPassword2.trim()
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    if (newPassword !== newPassword2) {
      alert("Новые пароли не совпадают!");
      return;
    }

    const formData = {
      email: email,
      code: code,
      password: newPassword,
      password2: newPassword2,
    };

    handleForgotConfirm(formData);
  };

  return (
    <div>
      <h1>Восстановление пароля</h1>
      <p>Введите ваш email, код восстановления и новый пароль.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите код восстановления"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите новый пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Подтвердите новый пароль"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Сбросить пароль
        </button>
      </form>
      <p>
        Вернуться ко входу? <Link to="/sign-in">Войти</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
