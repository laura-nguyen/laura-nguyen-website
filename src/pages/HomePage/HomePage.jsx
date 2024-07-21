import "./HomePage.scss";
import ProjectTabs from "../../components/ProjectTabs/ProjectTabs";
import HorizontalTabs from "../../components/HorizontalTabs/HorizontalTabs";
import CircleText from "../../components/CircleText/CircleText";
import Contact from "../../components/Contact/Contact";
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
      </main>
      <section className="skills">
        <h1>Skills</h1>
        <HorizontalTabs />
      </section>
      <section className="projects">
        <ProjectTabs />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
