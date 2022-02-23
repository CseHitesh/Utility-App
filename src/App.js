import "./App.css";

import Navbar from "./Component/Navbar";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordGen from "./Component/PasswordGen.js";
import Randomuser from "./Component/Randomuser.js";

import Meme from "./Component/Meme.js";
import Home from "./Component/Home.js";

function App() {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#203239";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          siteName="Online-Utility"
          about="aboutWebara"
          mode={mode}
          toogleMode={toogleMode}
        />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route exact path="/passwordgenerator" element={<PasswordGen />} />
          <Route exact path="/randomuser" element={<Randomuser />} />
          <Route exact path="/meme" element={<Meme />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
