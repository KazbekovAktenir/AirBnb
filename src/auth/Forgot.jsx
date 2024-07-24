import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Forgot = () => {
  const { handleForgot } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Пожалуйста, введите ваш email!");
      return;
    }

    const formData = {
      email: email,
    };

    handleForgot(formData);
  };

  return (
    <div>
      <h1>Забыли пароль?</h1>
      <p>Введите ваш email, и мы отправим вам ссылку для сброса пароля.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Отправить ссылку для сброса</button>
      </form>
      <p>
        Вернуться ко входу? <Link to="/sign-in">Войти</Link>
      </p>
    </div>
  );
};

export default Forgot;
