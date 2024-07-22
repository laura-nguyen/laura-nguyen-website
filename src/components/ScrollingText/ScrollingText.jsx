import "./ScrollingText.scss";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <Marquee autoFill="true" pauseOnHover="true">
      <span className="scrolling-text">
        I am constantly endlessly creating myself
      </span>
      <span className="scrolling-text"> available for new projects</span>
      <span className="scrolling-text">i like fried chicken</span>
      <span className="scrolling-text">me too</span>
    </Marquee>
  );
};

export default ScrollingText;
