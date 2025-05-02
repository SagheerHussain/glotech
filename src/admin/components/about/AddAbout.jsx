import React from "react";
import { Layout } from "../index";

const AddAbout = () => {
  return (
    <>
      <Layout>
        <section id="about" className="min-h-[90vh] py-6">
          <div className="container">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Add New About
            </h1>
            <form action="">
              <h1 className="text-xl font-bold py-6">Mission</h1>
              <label htmlFor="mission_en" className="text-[#000] text-sm">
                Mission (in en)
              </label>
              <input
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                type="text"
                name="mission_en"
                id="mission_en"
                placeholder="Mission"
              />
              <div className="arabic w-full text-end">
                <label htmlFor="mission_ar" className="text-[#000] text-sm">
                  (in ar) مساعدة عربية
                </label>
                <input
                  className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  type="text"
                  name="mission_ar"
                  id="mission_ar"
                  placeholder="مساعدة عربية"
                />
              </div>
              <label htmlFor="mission_fr" className="text-[#000] text-sm">
                Mission (in fr)
              </label>
              <input
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                type="text"
                name="mission_fr"
                id="mission_fr"
                placeholder="Mission"
              />

              <h1 className="text-xl font-bold py-6">Vision</h1>
              <label htmlFor="vision_en" className="text-[#000] text-sm">
                Vision (in en)
              </label>
              <input
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                type="text"
                name="vision_en"
                id="vision_en"
                placeholder="Vision"
              />
              <div className="arabic w-full text-end">
                <label htmlFor="vision_ar" className="text-[#000] text-sm">
                  (in ar) رؤية
                </label>
                <input
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  type="text"
                  style={{ direction: "rtl" }}
                  name="vision_ar"
                  id="vision_ar"
                  placeholder="رؤية عربية"
                />
              </div>
              <label htmlFor="vision_fr" className="text-[#000] text-sm">
                Vision (in fr)
              </label>
              <input
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                type="text"
                name="vision_fr"
                id="vision_fr"
                placeholder="Vision"
              />

              <h1 className="text-xl font-bold py-6">Target</h1>
              <label htmlFor="target_en" className="text-[#000] text-sm">
                Target (in en)
              </label>
              <input
                type="text"
                name="target_en"
                id="target_en"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Target"
              />
              <div className="arabic w-full text-end">
                <label htmlFor="target_ar" className="text-[#000] text-sm">
                  هدف (in ar)
                </label>
                <input
                  type="text"
                  name="target_ar"
                  id="target_ar"
                  className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  placeholder="هدف عربية"
                />
              </div>
              <label htmlFor="target_fr" className="text-[#000] text-sm">
                Cible (in fr)
              </label>
              <input
                type="text"
                name="target_fr"
                id="target_fr"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Cible"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full"
              >
                Add About
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddAbout;
