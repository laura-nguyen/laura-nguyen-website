import "./CircleText.scss";
import { useEffect } from "react";

const CircleText = () => {
  useEffect(() => {
    const textElement = document.querySelector(".text p");
    const text = textElement.innerText;
    textElement.innerHTML = text
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
      )
      .join("");
  }, []);
  return (
    <div className="circle">
      <div className="text">
        <p>Avaiable for new projects -</p>
      </div>
    </div>
  );
};

export default CircleText;
