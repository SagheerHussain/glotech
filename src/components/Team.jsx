// src/components/TeamSection.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import bg from "/Images/bg-box.jpg";
import { Trans, useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  const team_members = t("teams.members", { returnObjects: true });

  const images = [
    "https://assets.wam.ae/resource/bt502eil1k815kgpn.jpeg",
    "https://i1.rgstatic.net/ii/profile.image/991201121550337-1613332171573_Q512/Fatima_Youssef3.jpg",
    "https://i1.rgstatic.net/ii/profile.image/688605450219520-1541187741311_Q512/Omer-Khan-12.jpg",
    "https://data.themeim.com/html/sixart/assets/img/team/team-3.jpg",
  ];

  const team = team_members.map((member, index) => ({
    name: member.name,
    role: member.designation,
    image: images[index],
  }));

  return (
    <section
      id="team"
      className="py-20 relative z-[2]"
      style={{
        background: `url('https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149161863.jpg') no-repeat center center/cover`,
      }}
    >
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[#111111f1] -z-[1]"></div>
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <div className="team_intro mb-20">
            <h3 className="flex justify-center">
              <span className="text-white bg-[#222] inline-block px-8 py-2 rounded-[25px]">
                {t("teams_intro.subTitle")}
              </span>
            </h3>
            <h2 className="text-white text-center text-4xl py-4 font-bold leading-snug">
              <Trans
                i18nKey="teams_intro.title"
                components={{
                  1: (
                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
                  ),
                }}
              />
            </h2>
            <p className="text-text_light text-center">
              {" "}
              {t("teams_intro.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-lg"
              >
                <div className="rounded-full overflow-hidden border-2 border-dashed border-gray-600 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover p-3 rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                <div className="flex gap-4 text-gray-400 text-lg">
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer transition-all" />
                  <FaTwitter className="hover:text-sky-400 cursor-pointer transition-all" />
                  <FaYoutube className="hover:text-red-600 cursor-pointer transition-all" />
                  <FaPinterest className="hover:text-pink-600 cursor-pointer transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
