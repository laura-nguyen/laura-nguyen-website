import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
