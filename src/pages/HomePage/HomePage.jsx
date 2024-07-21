import "./HomePage.scss";
import ProjectTabs from "../../components/ProjectTabs/ProjectTabs";
import HorizontalTabs from "../../components/HorizontalTabs/HorizontalTabs";
import CircleText from "../../components/CircleText/CircleText";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
const HomePage = () => {
  return (
    <>
      <main className="main">
        <div className="hero">
          <h1 className="main__title">
            Hey, I'm Laura,
            <br /> your friendly neighbourhood growth marketer & software
            developer from Toronto.
            {/* I enjoy finding human touch in a pixelated
            world. */}
          </h1>
          {/* <CircleText /> */}
          {/* <p className="hero__description">
            Your friendly neighborhood growth marketer and software developer
            from Toronto, Canada.
          </p> */}
          {/* <p>Finding human touch in a pixelated world.</p> */}

          <button>See Projects</button>
        </div>
      </main>
      <section className="about">
        <About />
      </section>
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
