import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { getOverallStatsById, updateOverallStats } from "../../../services/overallStats";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

const EditOverallStats = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const [projectsDelivered, setProjectsDelivered] = useState({
    title: { en: "", ar: "", fr: "" },
    count: "",
  });

  const [clients, setClients] = useState({
    title: { en: "", ar: "", fr: "" },
    count: "",
  });

  const [divisions, setDivisions] = useState({
    title: { en: "", ar: "", fr: "" },
    titleAr: "",
    titleFr: "",
    count: "",
  });

  const [awards, setAwards] = useState({
    title: { en: "", ar: "", fr: "" },
    count: "",
  });

  // Get Stat By Id

  useEffect(() => {
    const fetchOverallStats = async () => {
      try {
        const { data } = await getOverallStatsById(id);
        console.log(data);
        setProjectsDelivered(data.projectsDelivered);
        setClients(data.clients);
        setDivisions(data.divisions);
        setAwards(data.awards);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchOverallStats();
  }, [id]);

  // Submit Edit Stats
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { success } = await updateOverallStats(id, projectsDelivered, clients, divisions, awards);
      if (success) {
        Swal.fire({
          icon: "success",
          title: "Stats updated successfully",
          showConfirmButton: false,
          timer: 700,
        });
        setLoading(false);
        navigate("/dashboard/view-overall-stats");
      }
    } catch (error) {
      console.error("Error updating stats:", error);
      setLoading(false);
    }
  };
  return (
    <>
      <Layout>
        <section id="addStats" className="min-h-[90vh] py-6">
          <div className="container">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Edit Overall Stats</h1>
            <form onSubmit={handleSubmit}>
              <div className="stats-one">
                <h4 className="text-xl font-bold py-6">Stat One</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  id="statOne"
                  placeholder="Title"
                  defaultValue={projectsDelivered?.title?.en}
                  onChange={(e) => setProjectsDelivered({ ...projectsDelivered, title: { ...projectsDelivered.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">
                    (in ar) عنوان{" "}
                  </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    defaultValue={projectsDelivered?.title?.ar}
                    onChange={(e) => setProjectsDelivered({ ...projectsDelivered, title: { ...projectsDelivered.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">
                  Titre (in fr)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  defaultValue={projectsDelivered?.title?.fr}
                  onChange={(e) => setProjectsDelivered({ ...projectsDelivered, title: { ...projectsDelivered.title, fr: e.target.value } })}
                />
                <label htmlFor="statOneTitleFr" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  defaultValue={projectsDelivered?.count}
                  onChange={(e) => setProjectsDelivered({ ...projectsDelivered, count: e.target.value })}
                />
              </div>
              <div className="stats-two">
                <h4 className="text-xl font-bold py-6">Stat One</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  id="statOne"
                  placeholder="Title"
                  defaultValue={clients?.title?.en}
                  onChange={(e) => setClients({ ...clients, title: { ...clients.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">
                    (in ar) عنوان{" "}
                  </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    defaultValue={clients?.title?.ar}
                    onChange={(e) => setClients({ ...clients, title: { ...clients.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">
                  Titre (in fr)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  defaultValue={clients?.title?.fr}
                  onChange={(e) => setClients({ ...clients, title: { ...clients.title, fr: e.target.value } })}
                />
                <label htmlFor="statOneTitleFr" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  defaultValue={clients?.count}
                  onChange={(e) => setClients({ ...clients, count: e.target.value })}
                />
              </div>
              <div className="stats-three">
                <h4 className="text-xl font-bold py-6">Stat One</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  id="statOne"
                  placeholder="Title"
                  defaultValue={divisions?.title?.en}
                  onChange={(e) => setDivisions({ ...divisions, title: { ...divisions.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">
                    (in ar) عنوان{" "}
                  </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    defaultValue={divisions?.title?.ar}
                    onChange={(e) => setDivisions({ ...divisions, title: { ...divisions.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">
                  Titre (in fr)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  defaultValue={divisions?.title?.fr}
                  onChange={(e) => setDivisions({ ...divisions, title: { ...divisions.title, fr: e.target.value } })}
                />
                <label htmlFor="statOneTitleFr" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  defaultValue={divisions?.count}
                  onChange={(e) => setDivisions({ ...divisions, count: e.target.value })}
                />
              </div>
              <div className="stats-four">
                <h4 className="text-xl font-bold py-6">Stat One</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  id="statOne"
                  placeholder="Title"
                  defaultValue={awards?.title?.en}
                  onChange={(e) => setAwards({ ...awards, title: { ...awards.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">
                    (in ar) عنوان{" "}
                  </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    defaultValue={awards?.title?.ar}
                    onChange={(e) => setAwards({ ...awards, title: { ...awards.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">
                  Titre (in fr)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  defaultValue={awards?.title?.fr}
                  onChange={(e) => setAwards({ ...awards, title: { ...awards.title, fr: e.target.value } })}
                />
                <label htmlFor="statOneTitleFr" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  defaultValue={awards?.count}
                  onChange={(e) => setAwards({ ...awards, count: e.target.value })}
                />
              </div>

              <button
                className={`bg-primary text-white px-6 py-2 rounded-full ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-secondary"
                }`}
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader color="#fff" size={20} />
                ) : (
                  "Apply Stats"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditOverallStats;
