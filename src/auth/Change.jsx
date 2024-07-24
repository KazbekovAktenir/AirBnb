import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Change = () => {
  const { handleChange } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (!oldPassword.trim() || !newPassword.trim() || !newPassword2.trim()) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    if (newPassword !== newPassword2) {
      alert("Новые пароли не совпадают!");
      return;
    }

    const formData = {
      old_password: oldPassword,
      new_password: newPassword,
      new_password2: newPassword2,
    };

    handleChange(formData);
  };

  return (
    <div>
      <h1>Смена пароля</h1>
      <form onSubmit={handleSave}>
        <input
          type="password"
          placeholder="Старый пароль"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Подтвердите новый пароль"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
        />
        <button type="submit">Сменить пароль</button>
      </form>
      <p>
        Вернуться ко входу? <Link to="/sign-in">Войти</Link>
      </p>
    </div>
  );
};

export default Change;
