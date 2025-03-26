import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { About, Header } from "./components";
// import { Header } from "./components/index";

function App() {
  return (
    <>
     <div className="App">
      <Header />
      <About />
    </div>
    </>
  );
}

export default App;
 