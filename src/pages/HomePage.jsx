import React from "react";
import { Header, About, WhyChoose, TechWorkWith, Services, Commitment } from "../components";

const HomePage = () => {
  return (
    <>
      <div className="App">
        <Header />
        <TechWorkWith />
        <About />
        {/* <WhyChoose /> */}
        <Services />
        <Commitment />
      </div>
    </>
  );
};

export default HomePage;
