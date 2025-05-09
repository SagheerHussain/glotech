import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getCategory, updateCategory } from "../../../services/categories";

const EditCategory = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState({ en: "", ar: "", fr: "" });
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState({ en: "", ar: "", fr: "" });
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Get Category Details
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await getCategory(id);
        console.log(data);
        setName({
          en: data?.name?.en || "",
          ar: data?.name?.ar || "",
          fr: data?.name?.fr || "",
        });
        setDescription({
          en: data?.description?.en || "",
          ar: data?.description?.ar || "",
          fr: data?.description?.fr || "",
        });
        setImage(data?.image || "");
        setSlug(data?.slug || "");
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, [id]);

  // Edit Category
  const handleEditCategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(name);
      const formData = new FormData();
      formData.append("name_en", name.en);
      formData.append("name_ar", name.ar);
      formData.append("name_fr", name.fr);
      formData.append("slug", slug);
      formData.append("description_en", description.en);
      formData.append("description_ar", description.ar);
      formData.append("description_fr", description.fr);
      formData.append("image", image);
      const response = await updateCategory(id, formData);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Category updated successfully",
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
        title: "Error updating category",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error updating category:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Edit Category
            </h1>
            <form action="" onSubmit={handleEditCategory}>
              <label htmlFor="" className="text-[#000] text-sm">
                Category Name (in en)*
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name.en}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                onChange={(e) => setName({ ...name, en: e.target.value })}
                placeholder="Category Name"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                (in ar) اسم الفئة*
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name.ar}
                style={{ direction: "rtl" }}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                onChange={(e) => setName({ ...name, ar: e.target.value })}
                placeholder="اسم الفئة"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Nom de la catégorie (in fr)*
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name.fr}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
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
                defaultValue={description?.en}
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
                defaultValue={description?.ar}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
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
                defaultValue={description?.fr}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
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
                defaultValue={slug}
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                placeholder="Slug"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              />
              {image && (
                <div>
                  <label htmlFor="">Current Image</label>
                  <img src={image} alt="" />
                </div>
              )}

              <label htmlFor="" className="text-[#000] text-sm">
                Category Image*
              </label>
              <input
                type="file"
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
                  "Apply Changes"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditCategory;
