import "./About.scss";
import lauraPic from "./../../assets/images/laura.jpg";
import { FaBeer } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper">
      <div>
        <h1>About</h1>
        <p>Lorem ipsum</p>
        <p>
          Welcome to my small corner on the internet. Worked in growth marketing
          for startups. Currently looking for opportunities to further grow my
          skills. You can find me me at the golf course or trying different food
          dishes.
          <FaBeer />
        </p>
      </div>

      <img
        src={lauraPic}
        alt="pic of laura nguyen"
        srcset=""
        className="about__img"
      />
    </div>
  );
};

export default About;
