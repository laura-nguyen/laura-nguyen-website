import "./HomePage.scss";
import ProjectTabs from "../../components/ProjectTabs/ProjectTabs";
import HorizontalTabs from "../../components/HorizontalTabs/HorizontalTabs";
import CircleText from "../../components/CircleText/CircleText";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMiniArrowLongRight } from "react-icons/hi2";
// import ReactCurvedText from "react-curved-text";
import ScrollingText from "../../components/ScrollingText/ScrollingText";

const HomePage = () => {
  return (
    <>
      <main className="main" id="main">
        <div className="hero">
          <h1 className="main__title">
            Hey, I'm Laura, a growth marketer & software developer from Toronto.
            {/* I enjoy finding human touch in a pixelated
            world. */}
          </h1>

          {/* <p className="hero__description">
            Your friendly neighborhood growth marketer and software developer
            from Toronto, Canada.
          </p> */}
          {/* <p>Finding human touch in a pixelated world.</p> */}

          <button className="main__btn">
            See Projects
            <div className="arrow-container">
              <HiMiniArrowLongRight className="arrow" />
            </div>
          </button>
        </div>
        {/* <div className="main__circle">
          <CircleText />
        </div> */}
      </main>
      <section className="about" id="about">
        <About />
      </section>
      <section className="skills" id="skills">
        <HorizontalTabs />
      </section>
      <section className="projects" id="projects">
        <ProjectTabs />
      </section>
      <ScrollingText />
      <footer className="contact" id="contact">
        <Contact />
      </footer>
    </>
  );
};

export default HomePage;
