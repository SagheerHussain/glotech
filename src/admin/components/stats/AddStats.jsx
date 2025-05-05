import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { getCategories } from "../../../services/categories";
import Swal from "sweetalert2";
import { createStats } from "../../../services/stats";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const AddStats = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [statOne, setStatOne] = useState({
        title: {
            en: "",
            ar: "",
            fr: "",
        },
        count: 0,
        symbol: "",
    });

    const [statTwo, setStatTwo] = useState({
        title: {
            en: "",
            ar: "",
            fr: "",
        },
        count: 0,
        symbol: "",
    });

    const [statThree, setStatThree] = useState({
        title: {
            en: "",
            ar: "",
            fr: "",
        },
        count: 0,
        symbol: "",
    });

    const [statFour, setStatFour] = useState({
        title: {
            en: "",
            ar: "",
            fr: "",
        },
        count: 0,
        symbol: "",
    });

    const [category, setCategory] = useState(null);
    const [gCategories, setGCategories] = useState([]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await createStats(statOne, statTwo, statThree, statFour, category);
            console.log(data);
            Swal.fire({
                icon: "success",
                title: "Stats added successfully",
                showConfirmButton: false,
                timer: 1500,
            });
            setLoading(false);
            navigate("/dashboard/view-stats");
        } catch (error) {
            console.error("Error adding stats:", error);
            Swal.fire({
                icon: "error",
                title: "Error adding stats",
                showConfirmButton: false,
                timer: 1500,
            });
            setLoading(false);
        }
    };

  return (
    <>
      <Layout>
        <section id="addStats" className="min-h-[90vh] py-6">
          <div className="container">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Add Stats</h1>
            <form onSubmit={handleSubmit}>
              <div className="stats-one">
                <h4 className="text-xl font-bold py-6">Stat One</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">Title (in en)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  id="statOne"
                  onChange={(e) => setStatOne({ ...statOne, title: { ...statOne.title, en: e.target.value } })}
                  placeholder="Title"
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">(in ar) عنوان </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    onChange={(e) => setStatOne({ ...statOne, title: { ...statOne.title, ar: e.target.value } })}
                    placeholder="عنوان"
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">Titre (in fr)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  onChange={(e) => setStatOne({ ...statOne, title: { ...statOne.title, fr: e.target.value } })}
                  placeholder="Titre"
                />
                <label htmlFor="statOneTitleFr" className="text-[#000] text-sm">Counts</label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  onChange={(e) => setStatOne({ ...statOne, count: Number(e.target.value) })}
                  placeholder="Counts"
                />
                <label htmlFor="symbol" className="text-[#000] text-sm">Symbol</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="symbol"
                  id="symbol"
                  placeholder="e.g '+'"
                  onChange={(e) => setStatOne({ ...statOne, symbol: e.target.value })}
                />
              </div>
              <div className="stats-two">
                <h4 className="text-xl font-bold py-6">Stat Two</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">Title (in en)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOne"
                  id="statOne"
                  placeholder="Title"
                  onChange={(e) => setStatTwo({ ...statTwo, title: { ...statTwo.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">(in ar) عنوان </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    onChange={(e) => setStatTwo({ ...statTwo, title: { ...statTwo.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">Titre (in fr)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  onChange={(e) => setStatTwo({ ...statTwo, title: { ...statTwo.title, fr: e.target.value } })}
                />
                <label htmlFor="count" className="text-[#000] text-sm">Counts</label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  onChange={(e) => setStatTwo({ ...statTwo, count: Number(e.target.value) })}
                />
                <label htmlFor="symbol" className="text-[#000] text-sm">Symbol</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="symbol"
                  id="symbol"
                  placeholder="e.g +"
                  onChange={(e) => setStatTwo({ ...statTwo, symbol: e.target.value })}
                />
              </div>
              <div className="stats-three">
                <h4 className="text-xl font-bold py-6">Stat Three</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">Title (in en)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOne"
                  id="statOne"
                  placeholder="Title"
                  onChange={(e) => setStatThree({ ...statThree, title: { ...statThree.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">(in ar) عنوان </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    onChange={(e) => setStatThree({ ...statThree, title: { ...statThree.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">Titre (in fr)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  onChange={(e) => setStatThree({ ...statThree, title: { ...statThree.title, fr: e.target.value } })}
                />
                <label htmlFor="count" className="text-[#000] text-sm">Counts</label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  onChange={(e) => setStatThree({ ...statThree, count: Number(e.target.value) })}
                />
                <label htmlFor="symbol" className="text-[#000] text-sm">Symbol</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="symbol"
                  id="symbol"
                  placeholder="e.g +"
                  onChange={(e) => setStatThree({ ...statThree, symbol: e.target.value })}
                />
              </div>
              <div className="stats-four">
                <h4 className="text-xl font-bold py-6">Stat Four</h4>
                <label htmlFor="statOne" className="text-[#000] text-sm">Title (in en)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOne"
                  id="statOne"
                  placeholder="Title"
                  onChange={(e) => setStatFour({ ...statFour, title: { ...statFour.title, en: e.target.value } })}
                />
                <div className="arabic w-full text-end">
                  <label htmlFor="statOneTitle" className="text-[#000] text-sm">(in ar) عنوان </label>
                  <input
                    type="text"
                    className="placeholder:text-[#0000006b] text-end w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    name="statOneTitle"
                    id="statOneTitle"
                    placeholder="عنوان"
                    onChange={(e) => setStatFour({ ...statFour, title: { ...statFour.title, ar: e.target.value } })}
                  />
                </div>
                <label htmlFor="statOneTitleAr" className="text-[#000] text-sm">Titre (in fr)</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="statOneTitleAr"
                  id="statOneTitleAr"
                  placeholder="Titre"
                  onChange={(e) => setStatFour({ ...statFour, title: { ...statFour.title, fr: e.target.value } })}
                />
                <label htmlFor="count" className="text-[#000] text-sm">Counts</label>
                <input
                  type="number"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="count"
                  id="count"
                  placeholder="Counts"
                  onChange={(e) => setStatFour({ ...statFour, count: Number(e.target.value) })}
                />
                <label htmlFor="symbol" className="text-[#000] text-sm">Symbol</label>
                <input
                  type="text"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="symbol"
                  id="symbol"
                  placeholder="e.g +"
                  onChange={(e) => setStatFour({ ...statFour, symbol: e.target.value })}
                />
              </div>


              <label htmlFor="category" className="text-[#000] text-sm">Category</label>
              <select
                name="category"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected hidden>
                  Select Category
                </option>
                {gCategories?.map((category) => (
                  <option className="bg-primary text-white" key={category._id} value={category._id}>
                    {category.name.en}
                  </option>
                ))}
              </select>

              <button className={`bg-primary text-white px-6 py-2 rounded-full ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-secondary"}`} disabled={loading}>
                {loading ? (
                  <ClipLoader color="#fff" size={20} />
                ) : (
                  "Add Stats"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddStats;
