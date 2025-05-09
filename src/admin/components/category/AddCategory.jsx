import React, { useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { addCategory } from "../../../services/categories";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState({ en: "", ar: "", fr: "" });
  const [description, setDescription] = useState({ en: "", ar: "", fr: "" });
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name_en", name.en);
      formData.append("name_ar", name.ar);
      formData.append("name_fr", name.fr);
      formData.append("slug", slug);
      formData.append("description_en", description.en);
      formData.append("description_ar", description.ar);
      formData.append("description_fr", description.fr);
      formData.append("image", image);

      const response = await addCategory(formData);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Category added successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-category");
        setLoading(false);
      } else new Error("Something wrong");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error creating category",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Add New Category
            </h1>
            <form action="" onSubmit={handleAddCategory}>
              <label htmlFor="" className="text-[#000] text-sm">
                Category Name (in en)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setName({ ...name, en: e.target.value })}
                placeholder="Category Name"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                (in ar) اسم الفئة*
              </label>
              <input
                type="text"
                name="name"
                style={{ direction: "rtl" }}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setName({ ...name, ar: e.target.value })}
                placeholder="اسم الفئة"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Nom de la catégorie (in fr)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setName({ ...name, fr: e.target.value })}
                placeholder="Nom de la catégorie"
              />
              
              <label htmlFor="" className="text-[#000] text-sm">
                Category Description (in en)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setDescription({ ...description, en: e.target.value })
                }
                placeholder="Category Description"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                (in ar) وصف الفئة*
              </label>
              <input
                type="text"
                name="name"
                style={{ direction: "rtl" }}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setDescription({ ...description, ar: e.target.value })
                }
                placeholder="وصف الفئة"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Description de la catégorie (in fr)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setDescription({ ...description, fr: e.target.value })
                }
                placeholder="Description de la catégorie"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Category Slug*
              </label>
              <input
                type="text"
                required
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                placeholder="Slug"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Category Image*
              </label>
              <input
                type="file"
                required
                onChange={handleFileChange}
                name="image"
                placeholder="Image"
                className="placeholder:text-[#1110106b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />

              <button
                type="submit"
                className={`bg-primary text-white py-2 rounded-full mt-4 px-6 ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-secondary hover:bg-hover_color"
                }`}
              >
                {loading ? (
                  <ClipLoader size={20} color="#fff" />
                ) : (
                  "Add Category"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddCategory;
