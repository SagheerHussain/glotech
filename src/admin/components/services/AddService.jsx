import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { en: "", ar: "", fr: "" },
    description: { en: "", ar: "", fr: "" },
    category: "",
    service_points: [],
  });
  const [categories, setCategories] = useState([]);

  // Navigate
  const navigate = useNavigate();

  // Handle Input Change for main form (service data)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the name is 'name' or 'description', update the correct language key (en, ar, fr)
    if (name.includes("name") || name.includes("description")) {
      const [field, lang] = name.split("."); // For example: name.en => ['name', 'en']

      setFormData({
        ...formData,
        [field]: {
          ...formData[field], // Keep existing values for other languages
          [lang]: value, // Update the specific language key
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle Input Change for dynamic service points (features)
  const handleFeatureChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFeatures = [...formData.service_points];

    // Update the language-specific data for the title, content
    if (name.includes("title") || name.includes("content")) {
      const [field, lang] = name.split("."); // e.g., title.en => ['title', 'en']

      // Update the feature at the given index, for the specified field and language
      updatedFeatures[index][field][lang] = value;
    }

    setFormData({ ...formData, service_points: updatedFeatures });
  };

  // Handle File Change for images in features (handle multiple files for each feature)
  const handleFileChange = (e, index) => {
    const { name, files } = e.target;
    const imagesArray = Array.from(files).map((file) => ({ url: file.name })); // Store file names temporarily

    const updatedFeatures = [...formData.service_points];
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      [name]: imagesArray, // Assign the images array to the service point
    };

    setFormData({ ...formData, service_points: updatedFeatures });
  };

  // Add New Feature (dynamic)
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

  // Remove Feature
  const removeFeature = (index) => {
    const updatedFeatures = formData.service_points.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, service_points: updatedFeatures });
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Handle the form submission logic, including sending data to backend
      console.log(formData); // For now, just log the formData
      // Send the formData to your backend API
      // After success, you can redirect or show a success message
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // Get Categories (Assuming categories are fetched from an API)
  const fetchingCategories = async () => {
    try {
      // Fetch categories from API if necessary
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingCategories();
  }, []);

  return (
    <>
      <Layout>
        <section id="addService" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Add New Service
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Service Name */}
              <h2 className="text-black text-xl font-bold mb-5 mt-12">
                Service Name
              </h2>
              <label htmlFor="name.en" className="text-[#000] text-sm">
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
              <div className="arabic w-full text-end">
                <label htmlFor="name.ar" className="text-[#000] text-sm">
                  اسم الخدمة (Arabic)
                </label>
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
              </div>
              <label htmlFor="name.fr" className="text-[#000] text-sm">
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

              {/* Service Description */}
              <h2 className="text-black text-xl font-bold mb-5 mt-12">
                Service Description
              </h2>
              <label htmlFor="description.en" className="text-[#000] text-sm">
                Description (English)
              </label>
              <textarea
                name="description.en"
                value={formData.description.en}
                onChange={handleChange}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                placeholder="Description (English)"
                required
              />
              <div className="arabic w-full text-end">
                <label htmlFor="description.ar" className="text-[#000] text-sm">
                  وصف الخدمة (Arabic)
                </label>
                <textarea
                  name="description.ar"
                  style={{ direction: "rtl" }}
                  value={formData.description.ar}
                  onChange={handleChange}
                  placeholder="وصف الخدمة (Arabic)"
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                />
              </div>
              <label htmlFor="description.fr" className="text-[#000] text-sm">
                Description (French)
              </label>
              <textarea
                name="description.fr"
                value={formData.description.fr}
                onChange={handleChange}
                placeholder="Description (French)"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
              />

              {/* Service Category */}
              <h2 className="text-black text-xl font-bold mb-5 mt-12">
                Service Category
              </h2>
              <select
                name="category"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                onChange={handleChange}
                required
              >
                <option hidden selected className="bg-primary text-white">
                  Select Category
                </option>
                <option
                  value="app-development"
                  className="bg-primary text-white"
                >
                  App Development
                </option>
              </select>

              {/* Dynamic Service Features (Add New Feature) */}
              <h2 className="text-black text-xl font-bold mb-5 mt-12">
                Service Features
              </h2>
              {formData.service_points.map((feature, index) => (
                <div key={index} className="feature">
                  <h3 className="text-lg font-bold my-6">
                    Feature {index + 1}
                  </h3>

                  {/* Feature Title in English, Arabic, and French */}
                  <label htmlFor="title.en" className="text-[#000] text-sm">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    name="title.en"
                    className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    value={feature.title.en}
                    onChange={(e) => handleFeatureChange(e, index)}
                    placeholder="Title (English)"
                    required
                  />
                  <div className="arabic w-full text-end">
                    <label htmlFor="title.ar" className="text-[#000] text-sm">
                      عنوان الميزة (Arabic)
                    </label>
                    <input
                      type="text"
                      name="title.ar"
                      style={{ direction: "rtl" }}
                      className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                      value={feature.title.ar}
                      onChange={(e) => handleFeatureChange(e, index)}
                      placeholder="عنوان الميزة (Arabic)"
                      required
                    />
                  </div>
                  <label htmlFor="title.fr" className="text-[#000] text-sm">
                    Titre de la fonctionnalité (French)
                  </label>
                  <input
                    type="text"
                    name="title.fr"
                    className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    value={feature.title.fr}
                    onChange={(e) => handleFeatureChange(e, index)}
                    placeholder="Titre de la fonctionnalité (French)"
                    required
                  />

                  {/* Feature Content in English, Arabic, and French */}
                  <label htmlFor="content.en" className="text-[#000] text-sm">
                    Content (English)
                  </label>
                  <textarea
                    name="content.en"
                    className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    value={feature.content.en}
                    onChange={(e) => handleFeatureChange(e, index)}
                    placeholder="Content (English)"
                    required
                  />
                  <div className="arabic w-full text-end">
                    <label htmlFor="content.ar" className="text-[#000] text-sm">
                      محتوى الميزة (Arabic)
                    </label>
                    <textarea
                      name="content.ar"
                      style={{ direction: "rtl" }}
                      className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                      value={feature.content.ar}
                      onChange={(e) => handleFeatureChange(e, index)}
                      placeholder="محتوى الميزة (Arabic)"
                      required
                    />
                  </div>
                  <label htmlFor="content.fr" className="text-[#000] text-sm">
                    Contenu de la fonctionnalité (French)
                  </label>
                  <textarea
                    name="content.fr"
                    className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                    value={feature.content.fr}
                    onChange={(e) => handleFeatureChange(e, index)}
                    placeholder="Contenu de la fonctionnalité (French)"
                    required
                  />

                  {/* Feature Image Upload */}
                  <input
                    type="file"
                    name="images[0]"
                    onChange={(e) => handleFileChange(e, index)}
                    required
                  />
                  <input
                    type="file"
                    name="images[1]"
                    onChange={(e) => handleFileChange(e, index)}
                    required
                  />

                  {/* Remove Feature Button */}
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="bg-red-500 text-white hover:bg-red-600 hover:text-white rounded-none mt-4 px-3 py-1"
                  >
                    Remove Feature
                  </button>
                </div>
              ))}

              {/* Button to Add New Feature */}
              <button
                type="button"
                onClick={addFeature}
                className="bg-primary text-sm hover:bg-secondary hover:bg-hover_color text-white rounded-none mt-4 px-3 py-1"
              >
                + Add Feature
              </button>

              {/* Submit Button */}
              <div className="w-full mt-6">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary hover:bg-hover_color text-white py-2 rounded-[25px] mt-4 px-6"
                >
                  {loading ? <ClipLoader color="#fff" /> : "Add Service"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddService;
