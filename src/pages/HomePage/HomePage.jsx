import "./HomePage.scss";
import ProjectTabs from "../../components/ProjectTabs/ProjectTabs";
import HorizontalTabs from "../../components/HorizontalTabs/HorizontalTabs";
import CircleText from "../../components/CircleText/CircleText";
const HomePage = () => {
  return (
    <>
      <main className="main">
        <h1>Hey, I'm Laura.</h1>
        <CircleText />
        <p>
          It's your friendly neighbour growth marketer and a software developer
          from Toronto, Canada.
        </p>
        <p>
          Welcome to my small space on the internet. An experimental &
          ever-changing (verging on self-absorbed) space to share who I am, what
          I've done, what I’m doing now, what I like, and what I capture. This
          is my formal introduction to the internet. Through lines of code, and
          a lot of good vibes.
        </p>
        <p>In other words, it's nice to meet you.</p>
        <button>See Projects</button>
        <ul className="home-social">
          <li>
            <a href="https://www.linkedin.com/in/laura-nguyen/" target="_blank">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Connect</span>
            </a>
          </li>
          <li>
            <a href="mailto:hello@lauranguyen.me" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <span>Message</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-behance" aria-hidden="true"></i>
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-dribbble" aria-hidden="true"></i>
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
      </main>
      <section className="skills">
        <h1>Skills</h1>
        <HorizontalTabs />
      </section>
      <section className="projects">
        <ProjectTabs />
      </section>
    </>
  );
};

export default HomePage;
