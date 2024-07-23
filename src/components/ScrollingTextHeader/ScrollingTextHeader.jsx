import "./ScrollingTextHeader.scss";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <Marquee autoFill="true" pauseOnHover="true" className="marquee">
      <p className="scrolling-text">welcome to my site</p>
      <p className="scrolling-text">
        available for new projects & opportunities
      </p>
      <p className="scrolling-text">endlessly creating myself</p>

      <p className="scrolling-text">where growth and engineering meet</p>
      <p className="scrolling-text">
        turning ideas into life, one line of code at a time
      </p>
    </Marquee>
  );
};

export default ScrollingText;
