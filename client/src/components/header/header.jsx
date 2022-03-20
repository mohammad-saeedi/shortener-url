import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = ({ setTheme }) => {
  const checkboxEl = useRef();
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      checkboxEl.current.checked = true;
      setTheme({ background: "#0f0f22", color: "#fff" });
    }
  });
  const changeTheme = () => {
    if (checkboxEl.current.checked) {
      setTheme({ background: "#0f0f22", color: "#fff" });
      localStorage.setItem("theme", "dark");
      return;
    }
    localStorage.setItem("theme", "light");
    setTheme(null);
  };
  return (
    <header>
      <h1
        style={{
          color: localStorage.getItem("theme") === "dark" ? "#fff" : "#2d2d2e",
        }}
      >
        mamad saeedi
      </h1>
      <div className="theme">
        <input type="checkbox" onChange={changeTheme} ref={checkboxEl} />
        <FontAwesomeIcon icon={faSun} className="sun" />
        <FontAwesomeIcon icon={faMoon} className="moon" />
      </div>
    </header>
  );
};

export default Header;
