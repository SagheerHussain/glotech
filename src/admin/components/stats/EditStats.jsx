import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { getCategories } from "../../../services/categories";
import Swal from "sweetalert2";
import {
  createStats,
  getStatsById,
  updateStats,
} from "../../../services/stats";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const EditStats = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [statOne, setStatOne] = useState({
    title: {
      en: "",
      ar: "",
      fr: "",
    },
    count: 0,
  });

  const [statTwo, setStatTwo] = useState({
    title: {
      en: "",
      ar: "",
      fr: "",
    },
    count: 0,
  });

  const [statThree, setStatThree] = useState({
    title: {
      en: "",
      ar: "",
      fr: "",
    },
    count: 0,
  });

  const [statFour, setStatFour] = useState({
    title: {
      en: "",
      ar: "",
      fr: "",
    },
    count: 0,
  });

  const [category, setCategory] = useState(null);
  const [gCategories, setGCategories] = useState([]);
  const [stats, setStats] = useState(null);
  const [currCateg, setCurrCateg] = useState(null);
  const { id } = useParams();

  // Fetching Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await getCategories();
        setGCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Get Stat By Id

  useEffect(() => {
    const fetchStat = async () => {
      try {
        const { data } = await getStatsById(id);
        setStats(data);
        setCurrCateg(data.category.name.en);
        setCategory(data.category._id);
        setStatOne(data.statOne);
        setStatTwo(data.statTwo);
        setStatThree(data.statThree);
        setStatFour(data.statFour);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStat();
  }, [id]);

  // Submit Edit Stats
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await updateStats(
        id,
        statOne,
        statTwo,
        statThree,
        statFour,
        category
      );
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Stats added successfully",
        showConfirmButton: false,
        timer: 700,
      });
      setLoading(false);
      navigate("/dashboard/view-stats");
    } catch (error) {
      console.error("Error adding stats:", error);
      Swal.fire({
        icon: "error",
        title: "Error adding stats",
        showConfirmButton: false,
        timer: 700,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <section id="addStats" className="min-h-[90vh] py-6">
          <div className="container">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Edit Stats</h1>
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
                  defaultValue={stats?.statOne?.title?.en}
                  onChange={(e) =>
                    setStatOne({
                      ...statOne,
                      title: { ...statOne.title, en: e.target.value },
                    })
                  }
                  placeholder="Title"
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
                    defaultValue={stats?.statOne?.title?.ar}
                    onChange={(e) =>
                      setStatOne({
                        ...statOne,
                        title: { ...statOne.title, ar: e.target.value },
                      })
                    }
                    placeholder="عنوان"
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
                  defaultValue={stats?.statOne?.title?.fr}
                  onChange={(e) =>
                    setStatOne({
                      ...statOne,
                      title: { ...statOne.title, fr: e.target.value },
                    })
                  }
                  placeholder="Titre"
                />
                <label htmlFor="statOneTitleFr" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  defaultValue={stats?.statOne?.count}
                  onChange={(e) =>
                    setStatOne({ ...statOne, count: Number(e.target.value) })
                  }
                  placeholder="Counts"
                />
              </div>
              <div className="stats-two">
                <h4 className="text-xl font-bold py-6">Stat Two</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOne"
                  id="statOne"
                  defaultValue={stats?.statTwo?.title?.en}
                  onChange={(e) =>
                    setStatTwo({
                      ...statTwo,
                      title: { ...statTwo.title, en: e.target.value },
                    })
                  }
                  placeholder="Title"
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
                    defaultValue={stats?.statTwo?.title?.ar}
                    placeholder="عنوان"
                    onChange={(e) =>
                      setStatTwo({
                        ...statTwo,
                        title: { ...statTwo.title, ar: e.target.value },
                      })
                    }
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
                  defaultValue={stats?.statTwo?.title?.fr}
                  onChange={(e) =>
                    setStatTwo({
                      ...statTwo,
                      title: { ...statTwo.title, fr: e.target.value },
                    })
                  }
                  placeholder="Titre"
                />
                <label htmlFor="count" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  defaultValue={stats?.statTwo?.count}
                  onChange={(e) =>
                    setStatTwo({ ...statTwo, count: Number(e.target.value) })
                  }
                />
              </div>
              <div className="stats-three">
                <h4 className="text-xl font-bold py-6">Stat Three</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOne"
                  id="statOne"
                  defaultValue={stats?.statThree?.title?.en}
                  placeholder="Title"
                  onChange={(e) =>
                    setStatThree({
                      ...statThree,
                      title: { ...statThree.title, en: e.target.value },
                    })
                  }
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
                    defaultValue={stats?.statThree?.title?.ar}
                    placeholder="عنوان"
                    onChange={(e) =>
                      setStatThree({
                        ...statThree,
                        title: { ...statThree.title, ar: e.target.value },
                      })
                    }
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
                  defaultValue={stats?.statThree?.title?.fr}
                  placeholder="Titre"
                  onChange={(e) =>
                    setStatThree({
                      ...statThree,
                      title: { ...statThree.title, fr: e.target.value },
                    })
                  }
                />
                <label htmlFor="count" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  defaultValue={stats?.statThree?.count}
                  placeholder="Counts"
                  onChange={(e) =>
                    setStatThree({
                      ...statThree,
                      count: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="stats-four">
                <h4 className="text-xl font-bold py-6">Stat Four</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">
                  Title (in en)
                </label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOne"
                  id="statOne"
                  defaultValue={stats?.statFour?.title?.en}
                  placeholder="Title"
                  onChange={(e) =>
                    setStatFour({
                      ...statFour,
                      title: { ...statFour.title, en: e.target.value },
                    })
                  }
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
                    defaultValue={stats?.statFour?.title?.ar}
                    placeholder="عنوان"
                    onChange={(e) =>
                      setStatFour({
                        ...statFour,
                        title: { ...statFour.title, ar: e.target.value },
                      })
                    }
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
                  defaultValue={stats?.statFour?.title?.fr}
                  placeholder="Titre"
                  onChange={(e) =>
                    setStatFour({
                      ...statFour,
                      title: { ...statFour.title, fr: e.target.value },
                    })
                  }
                />
                <label htmlFor="count" className="text-[#000] text-sm">
                  Counts
                </label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  defaultValue={stats?.statFour?.count}
                  placeholder="Counts"
                  onChange={(e) =>
                    setStatFour({ ...statFour, count: Number(e.target.value) })
                  }
                />
              </div>

              <br />

              <label htmlFor="category" className="text-[#000] text-sm">
                Current Category
              </label>
              <input
                disabled
                className="placeholder:text-[#0000006b] opacity-50 w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                value={currCateg}
              />

              <label htmlFor="category" className="text-[#000] text-sm">
                Category
              </label>
              <select
                name="category"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected hidden>
                  Select Category
                </option>
                {gCategories?.map((category) => (
                  <option
                    className="bg-primary text-white"
                    key={category._id}
                    value={category._id}
                  >
                    {category.name.en}
                  </option>
                ))}
              </select>

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

export default EditStats;
