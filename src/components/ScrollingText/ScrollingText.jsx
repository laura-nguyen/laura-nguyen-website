import "./ScrollingText.scss";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <Marquee autoFill="true" pauseOnHover="true" className="marquee">
      <p className="scrolling-text">available for new projects</p>
      <p className="scrolling-text">site made by yours truly</p>
      <p className="scrolling-text">let's get in touch</p>
      <p className="scrolling-text">thanks for visiting my site</p>
    </Marquee>
  );
};

export default ScrollingText;
