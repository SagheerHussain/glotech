import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { useNavigate, useParams } from "react-router-dom";
import { getAbout, updateAbout } from "../../../services/about";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const EditAbout = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState({
    mission: { en: "", ar: "", fr: "" },
    vision: { en: "", ar: "", fr: "" },
    target: { en: "", ar: "", fr: "" },
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchAbout = async () => {
      const { data } = await getAbout(id);
      setAbout({
        mission: {
          en: data?.mission?.en || "",
          ar: data?.mission?.ar || "",
          fr: data?.mission?.fr || "",
        },
        vision: {
          en: data?.vision?.en || "",
          ar: data?.vision?.ar || "",
          fr: data?.vision?.fr || "",
        },
        target: {
          en: data?.target?.en || "",
          ar: data?.target?.ar || "",
          fr: data?.target?.fr || "",
        },
      });
    };
    fetchAbout();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(about);
      const { success } = await updateAbout(id, about);
      if (success) {
        Swal.fire({
          icon: "success",
          title: "About updated successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-about");
        setLoading(false);
      } else new Error("Something wrong");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error updating about",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error updating about:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="about" className="min-h-[90vh] py-6">
          <div className="container">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Edit About</h1>
            <form action="" onSubmit={handleSubmit}>
              <h1 className="text-xl font-bold py-6">Mission</h1>
              <label htmlFor="mission_en" className="text-[#000] text-sm">
                Mission (in en)
              </label>
              <textarea
                className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                name="mission_en"
                id="mission_en"
                placeholder="Mission"
                defaultValue={about?.mission?.en}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    mission: {
                      ...about.mission,
                      en: e.target.value,
                    },
                  })
                }
              />
              <div className="arabic w-full text-end">
                <label htmlFor="mission_ar" className="text-[#000] text-sm">
                  (in ar) مساعدة عربية
                </label>
                <textarea
                  className="placeholder:text-[#0000006b] text-end h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="mission_ar"
                  id="mission_ar"
                  placeholder="مساعدة عربية"
                  value={about?.mission?.ar}
                  onChange={(e) =>
                    setAbout({
                      ...about,
                      mission: {
                        ...about.mission,
                        ar: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <label htmlFor="mission_fr" className="text-[#000] text-sm">
                Mission (in fr)
              </label>
              <textarea
                className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                name="mission_fr"
                id="mission_fr"
                placeholder="Mission"
                value={about?.mission?.fr}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    mission: {
                      ...about.mission,
                      fr: e.target.value,
                    },
                  })
                }
              />

              <h1 className="text-xl font-bold py-6">Vision</h1>
              <label htmlFor="vision_en" className="text-[#000] text-sm">
                Vision (in en)
              </label>
              <textarea
                className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                name="vision_en"
                id="vision_en"
                placeholder="Vision"
                value={about?.vision?.en}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    vision: {
                      ...about.vision,
                      en: e.target.value,
                    },
                  })
                }
              />
              <div className="arabic w-full text-end">
                <label htmlFor="vision_ar" className="text-[#000] text-sm">
                  (in ar) رؤية
                </label>
                <textarea
                  className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  style={{ direction: "rtl" }}
                  name="vision_ar"
                  id="vision_ar"
                  placeholder="رؤية عربية"
                  value={about?.vision?.ar}
                  onChange={(e) =>
                    setAbout({
                      ...about,
                      vision: {
                        ...about.vision,
                        ar: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <label htmlFor="vision_fr" className="text-[#000] text-sm">
                Vision (in fr)
              </label>
              <textarea
                className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                name="vision_fr"
                id="vision_fr"
                placeholder="Vision"
                value={about?.vision?.fr}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    vision: {
                      ...about.vision,
                      fr: e.target.value,
                    },
                  })
                }
              />

              <h1 className="text-xl font-bold py-6">Target</h1>
              <label htmlFor="target_en" className="text-[#000] text-sm">
                Target (in en)
              </label>
              <textarea
                name="target_en"
                id="target_en"
                className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Target"
                value={about?.target?.en}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    target: {
                      ...about.target,
                      en: e.target.value,
                    },
                  })
                }
              />
              <div className="arabic w-full text-end">
                <label htmlFor="target_ar" className="text-[#000] text-sm">
                  هدف (in ar)
                </label>
                <textarea
                  name="target_ar"
                  id="target_ar"
                  className="placeholder:text-[#0000006b] text-end h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  placeholder="هدف عربية"
                  value={about?.target?.ar}
                  onChange={(e) =>
                    setAbout({
                      ...about,
                      target: {
                        ...about.target,
                        ar: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <label htmlFor="target_fr" className="text-[#000] text-sm">
                Cible (in fr)
              </label>
              <textarea
                name="target_fr"
                id="target_fr"
                className="placeholder:text-[#0000006b] h-[100px] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Cible"
                value={about?.target?.fr}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    target: {
                      ...about.target,
                      fr: e.target.value,
                    },
                  })
                }
              />
              <button
                type="submit"
                className={`bg-primary text-white py-2 rounded-full px-6 ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-secondary hover:bg-hover_color"
                }`}
              >
                {loading ? (
                  <ClipLoader size={20} color="#fff" />
                ) : (
                  "Apply About"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditAbout;
