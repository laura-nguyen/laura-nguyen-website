import "./About.scss";
import lauraPic from "./../../assets/images/laura.jpg";
import { FaBeer } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ImMail } from "react-icons/im";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about__copy">
        <h2>About</h2>

        <p>
          Welcome to my small corner on the internet. Worked in growth marketing
          for startups. Currently looking for opportunities to further grow my
          skills. You can find me me at the golf course or trying different food
          dishes.
        </p>
        {/* <ul className="about__list">
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Growth Marketing</li>
          <li>Growth Marketing</li>
          <li>Growth Marketing</li>
          <li>Growth Marketing</li>
        </ul> */}
        <div className="about__socials">
          <NavLink
            to="https://www.linkedin.com/in/laura-nguyen/"
            target="_blank"
          >
            <FaLinkedin />
          </NavLink>

          <NavLink to="https://github.com/lauranguyen" target="_blank">
            <FaGithub />
          </NavLink>
          <NavLink to="mailto:hello@lauranguyen.me" target="_blank">
            <ImMail />
          </NavLink>
        </div>
      </div>

      <img
        src={lauraPic}
        alt="pic of laura nguyen"
        srcSet=""
        className="about__img"
      />
    </div>
  );
};

export default About;
