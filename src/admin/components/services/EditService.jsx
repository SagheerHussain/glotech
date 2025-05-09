import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { ClipLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getCategories, getCategory } from "../../../services/categories";
import {
  createService,
  getService,
  updateService,
} from "../../../services/service";

const EditService = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { en: "", ar: "", fr: "" },
    description: { en: "", ar: "", fr: "" },
    category: "",
    service_points: [],
    images: [],
  });
  const [categories, setCategories] = useState([]);
  const [increment, setIncrement] = useState(0);
  const [gCategory, setGCategory] = useState({});
  
  const { id } = useParams();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("name") || name.includes("description")) {
      const [field, lang] = name.split(".");
      setFormData({
        ...formData,
        [field]: {
          ...formData[field],
          [lang]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFeatureChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFeatures = [...formData.service_points];
    if (name.includes("title") || name.includes("content")) {
      const [field, lang] = name.split(".");
      updatedFeatures[index][field][lang] = value;
    }
    setFormData({ ...formData, service_points: updatedFeatures });
  };

  // ✅ Updated: Handle two image uploads and push into `images` array
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files], // store real File objects
    }));
  };

  const addFeature = () => {
    const newFeature = {
      title: { en: "", ar: "", fr: "" },
      content: { en: "", ar: "", fr: "" },
      // images: [],
    };
    setFormData({
      ...formData,
      service_points: [...formData.service_points, newFeature],
    });
  };

  const removeFeature = (index) => {
    const updatedFeatures = formData.service_points.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, service_points: updatedFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();

    // Append multilingual fields
    formDataToSend.append("name_en", formData.name.en);
    formDataToSend.append("name_ar", formData.name.ar);
    formDataToSend.append("name_fr", formData.name.fr);
    formDataToSend.append("description_en", formData.description.en);
    formDataToSend.append("description_ar", formData.description.ar);
    formDataToSend.append("description_fr", formData.description.fr);
    formDataToSend.append("category", formData.category);

    // Append service points
    formDataToSend.append("service_points", JSON.stringify(formData.service_points));

    // ✅ Append images one-by-one with correct key
    formData.images.forEach((file) => {
      formDataToSend.append("images", file); // this matches upload.array("images")
    });

    console.log("Update Service ==>", formData);

    try {
      const { success } = await updateService(id, formDataToSend);
      if (success) {
        Swal.fire("Success", "Service updated successfully!", "success");
        navigate("/dashboard/view-service");
      }
    } catch (error) {
      console.error("Error uploading service:", error);
      Swal.fire("Error", "Failed to update service", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchingCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingCategories();
  }, []);

  // Fetch Service
  const fetchServiceData = async () => {
    try {
      const { data } = await getService(id);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching service:", error);
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, [id]);

  // Fetch Category
  const fetchCategoryData = async () => {
    try {
      const { data } = await getCategory(formData.category);
      console.log(data);
      setGCategory(data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [formData.category]);

  return (
    <Layout>
      <section id="addService" className="min-h-[90vh] py-6">
        <div className="container py-4">
          <h1 className="text-[#000] text-4xl font-bold mb-5">Edit Service</h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Name Fields */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Service Name
            </h2>
            <label className="text-[#000] text-sm">
              Service Name (English)
            </label>
            <input
              type="text"
              name="name.en"
              defaultValue={formData.name.en}
              onChange={handleChange}
              placeholder="Service Name (English)"
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              required
            />
            <label className="text-[#000] text-sm">اسم الخدمة (Arabic)</label>
            <input
              type="text"
              name="name.ar"
              style={{ direction: "rtl" }}
              defaultValue={formData.name.ar}
              onChange={handleChange}
              placeholder="اسم الخدمة (Arabic)"
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              required
            />
            <label className="text-[#000] text-sm">
              Nom du service (French)
            </label>
            <input
              type="text"
              name="name.fr"
              defaultValue={formData.name.fr}
              onChange={handleChange}
              placeholder="Nom du service (French)"
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              required
            />

            {/* Description */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Service Description
            </h2>
            <label className="text-[#000] text-sm">Description (English)</label>
            <textarea
              name="description.en"
              defaultValue={formData.description.en}
              onChange={handleChange}
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              placeholder="Description (English)"
              required
            />
            <label className="text-[#000] text-sm">وصف الخدمة (Arabic)</label>
            <textarea
              name="description.ar"
              style={{ direction: "rtl" }}
              defaultValue={formData.description.ar}
              onChange={handleChange}
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              placeholder="وصف الخدمة (Arabic)"
              required
            />
            <label className="text-[#000] text-sm">Description (French)</label>
            <textarea
              name="description.fr"
              defaultValue={formData.description.fr}
              onChange={handleChange}
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              placeholder="Description (French)"
              required
            />

            {/* Current Category */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Current Category
            </h2>
            <input
              type="text"
              name="category"
              defaultValue={gCategory?.name?.en}
              disabled
              className="placeholder:text-[#0000006b] opacity-70 w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
            />

            {/* Category */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Service Category
            </h2>
            <select
              name="category"
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
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

            {/* Dynamic Features */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Service Features
            </h2>
            {formData.service_points.map((feature, index) => (
              <div key={index} className="feature border p-4 mb-6">
                <h3 className="text-lg font-bold mb-4">Feature {index + 1}</h3>

                {/* Titles */}
                <label className="text-[#000] text-sm">Title (English)</label>
                <input
                  type="text"
                  name="title.en"
                  defaultValue={feature.title.en}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <label className="text-[#000] text-sm">
                  عنوان الميزة (Arabic)
                </label>
                <input
                  type="text"
                  name="title.ar"
                  style={{ direction: "rtl" }}
                  defaultValue={feature.title.ar}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <label className="text-[#000] text-sm">Titre (French)</label>
                <input
                  type="text"
                  name="title.fr"
                  defaultValue={feature.title.fr}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />

                {/* Contents */}
                <label className="text-[#000] text-sm">Content (English)</label>
                <textarea
                  name="content.en"
                  defaultValue={feature.content.en}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <label className="text-[#000] text-sm">
                  محتوى الميزة (Arabic)
                </label>
                <textarea
                  name="content.ar"
                  style={{ direction: "rtl" }}
                  defaultValue={feature.content.ar}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <label className="text-[#000] text-sm">Contenu (French)</label>
                <textarea
                  name="content.fr"
                  defaultValue={feature.content.fr}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />

                <div className="flex">
                  {formData.images
                    .slice(index * 2, index * 2 + 2)
                    .map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img.url || URL.createObjectURL(img)} // handle both object and file
                        alt={`Feature ${index + 1} Image ${imgIndex + 1}`}
                        className="w-[100px] h-[100px] object-cover m-4"
                      />
                    ))}
                </div>
                {/* Image Upload */}
                <label className="text-[#000] text-sm">Upload 2 Images</label>
                <input
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  onChange={(e) => handleFileChange(e, increment)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                />
                <p className="text-xs text-gray-500 mb-3">
                  Only 2 images allowed per feature
                </p>

                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-full"
                >
                  Remove Feature
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addFeature}
              className="bg-secondary text-black px-4 py-[.3rem] mt-4 text-sm rounded-full"
            >
              + Add Feature
            </button>

            <div className="w-full mt-6">
              <button
                type="submit"
                className={`bg-primary hover:bg-secondary text-white py-2 px-6 rounded-full ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-secondary hover:bg-hover_color"
                }`}
              >
                {loading ? (
                  <ClipLoader color="#fff" size={20} />
                ) : (
                  "Apply Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default EditService;
