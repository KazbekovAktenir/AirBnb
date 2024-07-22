import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const ChangePassword = () => {
  const { handleChange } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const handleSave = () => {
    if (!oldPassword.trim() || !newPassword.trim() || !newPassword2.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    if (newPassword !== newPassword2) {
      alert("New passwords do not match!");
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
      <h1>Change Password</h1>
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={newPassword2}
        onChange={(e) => setNewPassword2(e.target.value)}
      />
      <button onClick={handleSave}>Change Password</button>
      <p>
        Back to Login?
        <Link to="/sign-in">Login</Link>
      </p>
    </div>
  );
};

export default ChangePassword;
