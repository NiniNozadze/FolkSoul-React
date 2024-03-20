import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Components/FirstPage/LogIn/LogIn.jsx";
import FirstPage from "./Components/FirstPage/FirstPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/FirstPage" element={<FirstPage />} />
      <Route path="/LogIn" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);
