import React from "react";
import StickyScroll from "../ui/StickyScrollReveal";
import why_choose_4 from "/Images/why choose/why_choose (4).png";
import why_choose_1 from "/Images/why choose/why_choose (1).png";
import why_choose_2 from "/Images/why choose/why_choose (2).png";
import why_choose_3 from "/Images/why choose/why_choose (3).png";
import habibi from "/Images/why choose/habibi.png";
import bulb from "/Images/why choose/bulb.png";
import headphone from "/Images/why choose/headphone.png";
import notes from "/Images/why choose/notes.png";

const WhyChoose = () => {
  const content = [
    {
      title: "Local Expertise",
      icon: (
        <div className="flex items-center justify-center text-white">
          <img
            src={habibi}
            className="h-[50px] w-[50px] object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
      description:
        "Our deep understanding of the Saudi Arabian market ensures solutions that comply with local regulations and cultural nuances.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src={why_choose_4}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
    {
      title: "Real-time Changes",
      icon: (
        <div className="flex items-center justify-center text-white">
          <img
            src={bulb}
            className="h-[50px] w-[50px] object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src={why_choose_1}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
    {
      title: "Version Control",
      icon: (
        <div className="flex items-center justify-center text-white">
          <img
            src={headphone}
            className="h-[50px] w-[50px] object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src={why_choose_2}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
    {
      title: "Running Out of Content",
      icon: (
        <div className="flex items-center justify-center text-white">
          <img
            src={notes}
            className="h-[50px] w-[50px] object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src={why_choose_3}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <section id="why_choose_glotech" className="bg-theme py-20 ">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="pb-20">
            <h2 className="text-white text-5xl font-bold text-center">
              Why Choose GloTech-KSA
            </h2>
            <p className="text-text_light text-center pt-6">
              At GloTech-KSA, we blend deep regional expertise with cutting-edge
              innovation to deliver tech solutions that truly matter. Our
              customized strategies, local market understanding, and dedicated
              support empower businesses to grow smarter, faster, and
              stronger—making us the trusted digital partner for visionary
              success in Saudi Arabia and beyond.
            </p>
          </div>

          <StickyScroll content={content} />
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
