import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../services/categories";
import { createTechnology } from "../../../services/technology";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

const AddTechnology = () => {
  const [loading, setLoading] = useState(false);
  const [techItems, setTechItems] = useState([{ file: null, title: "" }]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

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
    setTechItems([...techItems, { file: null, title: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      techItems.forEach((item, index) => {
        formData.append("images", item.file);
        formData.append("titles", item.title); // Note: Multiple titles
      });
      formData.append("category", category);

      const response = await createTechnology(formData);
        if (response.success) {
          // Handle success
          Swal.fire({
            icon: "success",
            title: "Technology added successfully!",
            showConfirmButton: false,
            timer: 700,
          });
          // Reset form
          setLoading(false);
          navigate("/development/dashboard/view-technology");
          setTechItems([{ file: null, title: "" }]);
        }
    } catch (error) {
      console.error("Error adding technology:", error);
      setLoading(false);
    }
  };

  // Get Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, success } = await getCategories();
        if (success) {
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Layout>
      <section id="addTechnology" className="min-h-[90vh] py-6">
        <div className="container py-4">
          <h1 className="text-[#000] text-4xl font-bold mb-5">
            Add New Technologies
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
              required
            >
              <option hidden selected>
                Select Category
              </option>
              {/* Dynamically render categories here */}
              {categories?.map((category) => (
                <option
                  key={category._id}
                  className="bg-primary text-white"
                  value={category._id}
                >
                  {category.name.en}
                </option>
              ))}
            </select>
            {techItems.map((item, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <label className="text-[#000] text-sm">Technology Title*</label>
                <input
                  type="text"
                  placeholder="Technology Title"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  value={item.title}
                  onChange={(e) => handleTitleChange(index, e.target.value)}
                  required
                />
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                  required
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
                loading
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-secondary hover:bg-hover_color"
              }`}
            >
              {loading ? <ClipLoader color="#fff" size={20} /> : "Add Technology"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AddTechnology;
