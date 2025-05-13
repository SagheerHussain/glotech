import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTechnologyById,
  updateTechnology,
} from "../../../services/technology";
import { getCategories } from "../../../services/categories";
import { ClipLoader } from "react-spinners";

const EditTechnology = () => {
  const [loading, setLoading] = useState(false);
  const [techItems, setTechItems] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  // 🟢 Fetch existing technology data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, success } = await getTechnologyById(id);
        if (success) {
          setCategory(data.category?._id || "");
          const techData = data.images.map((img) => ({
            file: null, // User can replace if they want
            title: img.title,
            existingUrl: img.url,
          }));
          setTechItems(techData);
        }
      } catch (error) {
        console.error("Error fetching tech:", error);
      }
    };
    fetchData();
  }, [id]);

  // 🟡 Category list
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, success } = await getCategories();
        if (success) setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = (index, file) => {
    const updated = [...techItems];
    updated[index].file = file;
    setTechItems(updated);
  };

  const handleTitleChange = (index, value) => {
    const updated = [...techItems];
    updated[index].title = value;
    setTechItems(updated);
  };

  const handleAddMore = () => {
    setTechItems([...techItems, { file: null, title: "", existingUrl: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("techItems", techItems);

    try {
      const formData = new FormData();

      techItems.forEach((item) => {
        formData.append("titles", item.title);
        formData.append("existingUrls", item.existingUrl); // 🟢 Add this
        if (item.file) {
          formData.append("images", item.file);
        }
      });

      formData.append("category", category);

      const response = await updateTechnology(id, formData);
      if (response.success) {
        console.log("Updated successfully");
        navigate("/development/dashboard/view-technology");
      }
    } catch (error) {
      console.error("Error updating:", error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <section id="editTechnology" className="min-h-[90vh] py-6">
        <div className="container py-4">
          <h1 className="text-[#000] text-4xl font-bold mb-5">
            Edit Technologies
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Category */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Service Category
            </h2>
            <select
              name="category"
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              required
            >
              <option hidden>Select Category</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name.en}
                </option>
              ))}
            </select>
            {techItems.map((item, index) => (
              <div key={index} className="mb-6">
                <label className="text-[#000] text-sm">Technology Title*</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleTitleChange(index, e.target.value)}
                  placeholder="Technology Title"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] rounded-none mb-2 px-3 py-2"
                  required
                />
                {item.existingUrl && (
                  <div className="mb-2">
                    <img
                      src={item.existingUrl}
                      alt="existing"
                      className="w-24 h-24 object-contain border"
                    />
                  </div>
                )}
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                />
              </div>
            ))}
            <button
              type="button"
              className="bg-green-500 text-white hover:bg-green-600 rounded-[50px] px-4 py-1"
              onClick={handleAddMore}
            >
              + Add More
            </button>
            <br /> <br />
            <button
              type="submit"
              className={`bg-primary hover:bg-secondary text-white py-2 px-6 rounded-full ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? (
                <ClipLoader color="#fff" size={20} />
              ) : (
                "Update Technology"
              )}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default EditTechnology;
