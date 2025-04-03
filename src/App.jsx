import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { About, Header } from "./components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
