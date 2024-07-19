import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollingText from "./components/ScrollingText/ScrollingText";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 
          <Route path="/*" element={<PageNotFound />} /> */}
        </Routes>
        <ScrollingText text="This is an infinite scrolling text. " />
      </BrowserRouter>
    </>
  );
}

export default App;
