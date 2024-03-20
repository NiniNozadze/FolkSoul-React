import React, { useState } from "react";
import "./LogIn.css";

const LogIn = ({ onLoginSuccess }) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://folksoul-api-nikanoza-production.up.railway.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        }
      );
      console.log(response);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Incorrect username or password");
        return;
      }
      onLoginSuccess();
    } catch (error) {
      console.error("Login error", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="wholeDiv">
      <div className="registracia">
        <img className="witeli" src="./Images/Rectangle 3.svg" alt="Logo" />
        <h2 className="header">კარიბჭე</h2>
        <input
          className="forName"
          type="text"
          name="username"
          placeholder="მეტსახელი"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="forPass"
          type="password"
          name="password"
          placeholder="პაროლი"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button
          className="image-button"
          type="button"
          onClick={handleLogin}
        ></button>
      </div>
    </div>
  );
};

export default LogIn;
