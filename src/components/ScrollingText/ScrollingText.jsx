import "./ScrollingText.scss";
import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <Marquee autoFill="true" pauseOnHover="true" className="marquee">
      <p className="scrolling-text">
        I am constantly endlessly creating myself
      </p>
      <p className="scrolling-text"> available for new projects</p>
      <p className="scrolling-text">i like fried chicken</p>
      <p className="scrolling-text">me too</p>
    </Marquee>
  );
};

export default ScrollingText;
