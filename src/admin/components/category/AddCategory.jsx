import React, { useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [gCategory, setgCategory] = useState("");
  const [slug, setSlug] = useState("");

  const navigate = useNavigate();

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    } catch (error) {
      setLoading(false);
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Add New Category
            </h1>
            <form action="" onSubmit={handleAddCategory}>
              <label htmlFor="" className="text-[#000] text-sm">
                Category Name*
              </label>
              <input
                type="text"
                name="category"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setgCategory(e.target.value)}
                placeholder="Category"
              />
              <label htmlFor="" className="text-[#000] text-sm">
                Category Slug*
              </label>
              <input
                type="name"
                required
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                placeholder="Slug"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary hover:bg-hover_color text-white py-2 rounded-[25px] mt-4 px-6"
              >
                {loading ? <ClipLoader color="#fff" /> : "Add Category"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddCategory;
