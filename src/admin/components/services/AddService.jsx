import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCategories } from "../../../services/categories";
import { createService } from "../../../services/service";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { en: "", ar: "", fr: "" },
    description: { en: "", ar: "", fr: "" },
    category: "",
    service_points: [],
  });
  const [categories, setCategories] = useState([]);
  const [gCategory, setGCategory] = useState("");

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
  const handleFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedFeatures = [...formData.service_points];

    // Convert file objects to buffer for Cloudinary upload
    updatedFeatures[index].images = files.map((file) => ({
      url: file.name, // Send file object (this will be processed by the backend)
    }));

    setFormData({ ...formData, service_points: updatedFeatures });
  };

  const addFeature = () => {
    const newFeature = {
      title: { en: "", ar: "", fr: "" },
      content: { en: "", ar: "", fr: "" },
      images: [],
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
  
    const formDataToSend = new FormData();
  
    // Append simple fields
    formDataToSend.append("name.en", formData.name.en);
    formDataToSend.append("name.ar", formData.name.ar);
    formDataToSend.append("name.fr", formData.name.fr);
    formDataToSend.append("description.en", formData.description.en);
    formDataToSend.append("description.ar", formData.description.ar);
    formDataToSend.append("description.fr", formData.description.fr);
    formDataToSend.append("category", formData.category);
  
    // Append service points and images
    formData.service_points.forEach((point, index) => {
      formDataToSend.append(`service_points[${index}].title.en`, point.title.en);
      formDataToSend.append(`service_points[${index}].title.ar`, point.title.ar);
      formDataToSend.append(`service_points[${index}].title.fr`, point.title.fr);
  
      formDataToSend.append(`service_points[${index}].content.en`, point.content.en);
      formDataToSend.append(`service_points[${index}].content.ar`, point.content.ar);
      formDataToSend.append(`service_points[${index}].content.fr`, point.content.fr);
  
      point.images.forEach((img, imgIndex) => {
        formDataToSend.append(
          `service_points[${index}].images[${imgIndex}]`,
          img
        );
      });
    });
  
    console.log("formDataToSend", formDataToSend);
  
    // Send data to backend
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/service`, {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      console.log("Service added successfully:", data);
    } catch (error) {
      console.error("Error adding service:", error);
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

  return (
    <Layout>
      <section id="addService" className="min-h-[90vh] py-6">
        <div className="container py-4">
          <h1 className="text-[#000] text-4xl font-bold mb-5">
            Add New Service
          </h1>
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
              value={formData.name.en}
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
              value={formData.name.ar}
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
              value={formData.name.fr}
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
              value={formData.description.en}
              onChange={handleChange}
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              placeholder="Description (English)"
              required
            />
            <label className="text-[#000] text-sm">وصف الخدمة (Arabic)</label>
            <textarea
              name="description.ar"
              style={{ direction: "rtl" }}
              value={formData.description.ar}
              onChange={handleChange}
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              placeholder="وصف الخدمة (Arabic)"
              required
            />
            <label className="text-[#000] text-sm">Description (French)</label>
            <textarea
              name="description.fr"
              value={formData.description.fr}
              onChange={handleChange}
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              placeholder="Description (French)"
              required
            />

            {/* Category */}
            <h2 className="text-black text-xl font-bold mb-5 mt-12">
              Service Category
            </h2>
            <select
              name="category"
              className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
              onChange={(e) => setGCategory(e.target.value)}
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
                  value={feature.title.en}
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
                  value={feature.title.ar}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <label className="text-[#000] text-sm">Titre (French)</label>
                <input
                  type="text"
                  name="title.fr"
                  value={feature.title.fr}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />

                {/* Contents */}
                <label className="text-[#000] text-sm">Content (English)</label>
                <textarea
                  name="content.en"
                  value={feature.content.en}
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
                  value={feature.content.ar}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <label className="text-[#000] text-sm">Contenu (French)</label>
                <textarea
                  name="content.fr"
                  value={feature.content.fr}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />

                {/* Image Upload */}
                <label className="text-[#000] text-sm">Upload 2 Images</label>
                <input
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  onChange={(e) => handleFileChange(e, index)}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
                <p className="text-xs text-gray-500 mb-3">
                  Only 2 images allowed per feature
                </p>

                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="bg-red-500 text-white px-3 py-1"
                >
                  Remove Feature
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addFeature}
              className="bg-primary hover:bg-secondary text-white px-4 py-2 mt-4"
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
                  "Add Service"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AddService;
