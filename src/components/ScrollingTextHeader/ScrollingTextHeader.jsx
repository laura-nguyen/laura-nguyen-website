import "./ScrollingTextHeader.scss";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <Marquee autoFill="true" pauseOnHover="true" className="marquee">
      <p className="scrolling-text">welcome to my site</p>
      <p className="scrolling-text">i am endlessly creating myself</p>
      <p className="scrolling-text">available for new projects</p>
      <p className="scrolling-text">growth + engineering</p>
    </Marquee>
  );
};

export default ScrollingText;
