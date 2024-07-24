import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ScrollingText from "./components/ScrollingText/ScrollingText";
import ScrollingTextHeader from "./components/ScrollingTextHeader/ScrollingTextHeader";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollingTextHeader />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <ScrollingText />
      </BrowserRouter>
    </>
  );
}

export default App;
