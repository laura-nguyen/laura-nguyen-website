import "./Contact.scss";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import { LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="contact-content">
      <div>
        <h2>Get in touch.</h2>
        <span className="contact__copyright--tablet">
          © Copyright {currentYear}
        </span>
      </div>

      <div className="footer__right">
        <a
          className="contact__email"
          href="ma&#105;lto&#58;%68&#37;65%6Cl&#111;%40l&#37;61u%72ang&#117;%79en&#46;&#109;e"
        >
          h&#101;llo&#64;&#108;a&#117;ra&#110;guyen&#46;me
        </a>
        <div className="about__socials footer__socials">
          <NavLink
            to="https://www.linkedin.com/in/laura-nguyen/"
            target="_blank"
          >
            <div className="about__socials-circle">
              <FaLinkedinIn />
            </div>
          </NavLink>

          <NavLink to="https://github.com/lauranguyen" target="_blank">
            <div className="about__socials-circle">
              <FaGithub />
            </div>
          </NavLink>

          <NavLink to="mailto:hello@lauranguyen.me" target="_blank">
            <div className="about__socials-circle">
              <LuMail />
            </div>
          </NavLink>

          <NavLink to="https://x.com/lauriananguyen/likes" target="_blank">
            <div className="about__socials-circle">
              <FaXTwitter />
            </div>
          </NavLink>
        </div>
        <span className="contact__copyright--mobile">
          © Copyright {currentYear}
        </span>
      </div>
    </div>
  );
};

export default Contact;
