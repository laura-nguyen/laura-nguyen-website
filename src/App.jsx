import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollingText from "./components/ScrollingText/ScrollingText";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollingText text="This is an infinite scrolling text. " /> */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/skills" element={<Skills />} />
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/about" element={<About />} />

          <Route path="/*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
