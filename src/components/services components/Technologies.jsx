import React, { useEffect, useState } from "react";
import { getCategoryBySlug } from "../../services/categories";
import { getTechnologiesByCategory } from "../../services/technology";

const Technologies = ({ params, formattedParams }) => {
  const [technologies, setTechnologies] = useState([]);

  // Get Category By Params
  const fetchCategory = async () => {
    try {
      const { data } = await getCategoryBySlug(params);
      fetchTechnologies(data?._id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTechnologies = async (category) => {
    try {
      const { data } = await getTechnologiesByCategory(category);
      setTechnologies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [params]);

  return (
    <>
      {technologies.length > 0 && (
        <section id="technologies" className="py-20">
          <div className="container">

            <div className="flex lg:flex-row flex-col items-center pb-20 gap-8">
              <h1 className="text-text_dark text-3xl sm:text-4xl lg:text-5xl font-bold lg:text-start text-center">
                Technologies Powering Our <span className="text-primary">{formattedParams}</span>
              </h1>
              <p className="text-text_dark text-center lg:text-start">
                We use technologies such as SolarWinds, Datadog, Microsoft
                Intune, ManageEngine, TeamViewer, and VMware to deliver reliable
                <span className="ps-2 text-primary">{formattedParams}</span>.
              </p>
            </div>

            <div className="grid grid-cols-8 gap-10">
              {technologies[0]?.images?.map((technology, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col justify-center"
                >
                  <img src={technology.url} className="max-w-[100px] object-fit mx-auto" alt={technology.title} />
                  <h1>{technology.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Technologies;
