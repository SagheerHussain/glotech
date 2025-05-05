import React, { useEffect, useState } from "react";
import { getLogo } from "../services/logo";

const Logo = () => {
  const [logo, setLogo] = useState("");

  const getData = async () => {
    const { data } = await getLogo();
    console.log(data);
    setLogo(data[0].image);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <img src={logo} className="max-w-[90px]" alt="logo" />
    </>
  );
};

export default Logo;
