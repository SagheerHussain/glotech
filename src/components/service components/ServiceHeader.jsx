import React from "react";
import NavigationLayout from "../NavigationLayout";

const ServiceHeader = () => {
  return (
    <>
      <header
        id="header"
        className="max-w-full w-full h-[50vh]"
        style={{
          background: `url(../../../public/Images/banner.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Navbar */}
        <NavigationLayout />

        {/* Header Content */}
        <div className="container">
            <div className="header-content">
                
            </div>
        </div>
      </header>
    </>
  );
};

export default ServiceHeader;
