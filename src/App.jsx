import React, { useState } from "react";
import "./App.css";
import FirstPage from "./Components/FirstPage/FirstPage";
import LogIn from "./Components/FirstPage/LogIn/LogIn";
import HomePage from "./Components/HomePage/HomePage";
import Burgerbar from "./Components/BurgerBar/Burgerbar";
import Members from "./Components/Members/Members";
import SocialNetworks from "./Components/SocialNetworks/SocialNetworks";

function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [active, setActive] = useState(false);

  const handleLoginClick = () => {
    setShowLogIn(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogIn(false);
  };

  return (
    <>
      {!showLogIn && !isLoggedIn && (
        <FirstPage onLoginClick={handleLoginClick} />
      )}
      {showLogIn && !isLoggedIn && (
        <LogIn onLoginSuccess={handleLoginSuccess} />
      )}
      {isLoggedIn && (
        <>
          <HomePage />
          <Burgerbar />
        </>
      )}
      {/* <Burgerbar /> */}
      {/* <Members />
      <SocialNetworks /> */}
    </>
  );
}

export default App;
