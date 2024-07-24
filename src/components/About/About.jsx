import "./About.scss";
import lauraPic from "./../../assets/images/laura.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about__copy">
        <h2>About</h2>

        <p>
          Welcome to my small corner of the internet. With 3+ years of
          experience in growth marketing for startups and a recent graduate of
          BrainStation's Software Engineering bootcamp, I'm currently seeking
          opportunities to further grow my skills and connect users one pixel at
          a time. I like all things web and enjoy spending my free time on the
          golf course or trying different food dishes.
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
            <div className="about__socials-circle">
              <FaLinkedinIn />
            </div>
          </NavLink>

          <NavLink to="https://github.com/laura-nguyen" target="_blank">
            <div className="about__socials-circle">
              <FaGithub />
            </div>
          </NavLink>

          <NavLink to="mailto:hello@lauranguyen.me" target="_blank">
            <div className="about__socials-circle">
              <LuMail />
            </div>
          </NavLink>

          <NavLink to="https://x.com/lauriananguyen/" target="_blank">
            <div className="about__socials-circle">
              <FaXTwitter />
            </div>
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
