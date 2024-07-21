import "./Header.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
  const handleNavLinkClick = () => {
    document.getElementById("sidebar-active").checked = false;
  };

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <img
          className="header__logo-icon"
          src={lotusLogo}
          alt="vector icon of a lotus flower"
        />
      </NavLink>
      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            className="icon icon--hamburger"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              className="icon icon--exit"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>

          <div className="nav__links">
            <div className="nav__links-main">
              <NavLink
                to="/"
                className="nav__link--non-button"
                onClick={handleNavLinkClick}
              >
                SKILLS
              </NavLink>
              <NavLink
                to="/"
                className="nav__link--non-button"
                onClick={handleNavLinkClick}
              >
                PROJECTS
              </NavLink>

              <NavLink
                to="/"
                className="nav__link--non-button"
                onClick={handleNavLinkClick}
              >
                ABOUT
              </NavLink>

              <NavLink
                to="/"
                className="nav__link--non-button"
                onClick={handleNavLinkClick}
              >
                ETC.
              </NavLink>

              <div className="nav__link-wrapper--cta">
                <NavLink to="/">
                  <button className="nav__link--cta">CONTACT</button>
                </NavLink>
              </div>
            </div>

            <DarkMode />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
