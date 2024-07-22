import "./Contact.scss";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="contact-content">
      <div>
        <h2>Get in touch.</h2>

        <a
          className="contact__email"
          href="ma&#105;lto&#58;%68&#37;65%6Cl&#111;%40l&#37;61u%72ang&#117;%79en&#46;&#109;e"
        >
          h&#101;llo&#64;&#108;a&#117;ra&#110;guyen&#46;me
        </a>
      </div>

      <div className="footer__right">
        <div className="about__socials footer__socials">
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
        <h5>Want to work together, let's chat or just say hi.</h5>
        <span>© Copyright {currentYear} made by yours truly.</span>
      </div>
    </div>
  );
};

export default Contact;
