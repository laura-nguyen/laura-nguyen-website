import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import "./App.scss";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      /> */}
    </BrowserRouter>
  );
}

export default App;
