import "./DarkMode.scss";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [isDarkMode]);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {isDarkMode ? <IoIosSunny /> : <IoIosMoon />}
      </label>
    </div>
  );
};

export default DarkMode;
