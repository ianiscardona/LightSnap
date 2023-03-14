import React from "react";
import { Home } from "./pages/home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
