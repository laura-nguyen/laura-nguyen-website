import "./Header.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import logo from "./../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
  const handleNavLinkClick = () => {
    document.getElementById("sidebar-active").checked = false;
  };

  //   window.addEventListener("scroll", () => {
  //     const header = document.querySelector("header");
  //     header.classList.toggle("sticky", window.scrollY > 0);
  //   });

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 467.000000 467.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,467.000000) scale(0.100000,-0.100000)"
            fill="var(--body_color)"
            stroke="none"
          >
            <path
              d="M2105 4523 c-509 -62 -940 -266 -1299 -613 -675 -653 -859 -1677
            -452 -2515 101 -209 197 -354 351 -528 l78 -89 153 153 153 153 -61 65 c-235
            251 -391 582 -444 943 -23 155 -15 450 16 593 63 296 195 566 392 800 243 290
            611 507 988 585 683 141 1387 -136 1795 -705 161 -225 259 -462 311 -755 26
            -141 23 -419 -4 -570 -12 -63 -26 -132 -32 -153 l-11 -38 -502 740 -502 741
            -212 0 -213 0 0 -995 0 -995 210 0 210 0 2 613 3 614 415 -613 415 -613 216
            -1 216 0 38 82 c77 170 133 349 170 553 23 121 31 468 16 606 -47 407 -210
            799 -468 1126 -74 94 -252 272 -348 348 -314 250 -712 416 -1115 465 -78 9
            -416 12 -485 3z"
            />
            <path
              d="M1600 1304 l0 -1035 33 -14 c17 -7 75 -25 127 -39 402 -109 856 -98
            1253 31 107 34 263 97 280 113 6 5 -160 360 -177 377 -2 3 -55 -16 -118 -41
            -243 -97 -444 -131 -718 -122 -102 3 -200 8 -217 12 l-33 6 0 874 0 874 -215
            0 -215 0 0 -1036z"
            />
          </g>
        </svg>
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
                ABOUT
              </NavLink>
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

              {/* <NavLink
                to="/"
                className="nav__link--non-button"
                onClick={handleNavLinkClick}
              >
                ETC.
              </NavLink> */}

              <NavLink
                to="/"
                className="nav__link--non-button"
                onClick={handleNavLinkClick}
              >
                CONTACT
              </NavLink>

              {/* <div className="nav__link-wrapper--cta">
                <NavLink to="/">
                  <button className="nav__link--cta">CONTACT</button>
                </NavLink>
              </div> */}
            </div>

            <DarkMode />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
