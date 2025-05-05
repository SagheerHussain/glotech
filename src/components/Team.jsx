// src/components/TeamSection.jsx
import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { getTeams } from "../services/team";

const Team = () => {
  const { t } = useTranslation();

  const [team, setTeam] = useState([]);

  const getData = async () => {
    const { data } = await getTeams();
    console.log("team", data);
    setTeam(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section
      id="team"
      className="py-20 relative bg-[#ddd]"
    >
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <div className="team_intro mb-20">
            <h3 className="flex justify-center">
              <span className="text-white bg-primary inline-block px-8 py-2 rounded-[25px]">
                {t("teams_intro.subTitle")}
              </span>
            </h3>
            <h2 className="text-text_dark text-center text-4xl py-4 font-bold leading-snug">
              <Trans
                i18nKey="teams_intro.title"
                components={{
                  1: (
                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
                  ),
                }}
              />
            </h2>
            <p className="text-text_dark text-center">
              {" "}
              {t("teams_intro.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {team?.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-lg"
              >
                <div className="rounded-full overflow-hidden border-2 border-dashed border-secondary mb-4">
                  <img
                    src={member?.image}
                    alt={member?.name?.en}
                    className="w-full h-full object-cover p-3 rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-text_dark">
                  {member?.name?.en}
                </h3>
                <p className="text-text_dark text-sm mb-3">{member?.designation?.en}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
