import React, { useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { addCategory } from "../../../services/categories";
import { createTeam } from "../../../services/team";

const AddTeam = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { en: "", ar: "", fr: "" },
    designation: { en: "", ar: "", fr: "" },
    image: null,
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name_en", formData.name.en);
    data.append("name_ar", formData.name.ar);
    data.append("name_fr", formData.name.fr);
    data.append("designation_en", formData.designation.en);
    data.append("designation_ar", formData.designation.ar);
    data.append("designation_fr", formData.designation.fr);
    data.append("image", formData.image);

    try {
      const response = await createTeam(data);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Team added successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-team");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error creating team",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error creating team:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Add New Team Member
            </h1>
            <form action="" onSubmit={handleAddTeam}>
              <h1 className="text-[#000] text-lg font-bold py-5">
                Member Name
              </h1>
              <label htmlFor="" className="text-[#000] text-sm">
                Name (in en)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, en: e.target.value },
                  })
                }
                placeholder="Category Name"
              />

              <div className="arabic w-full text-end">
                <label htmlFor="" className="text-[#000] text-sm">
                  (in ar) اسم*
                </label>
                <input
                  type="text"
                  name="name"
                  style={{ direction: "rtl" }}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: { ...formData.name, ar: e.target.value },
                    })
                  }
                  placeholder="اسم الفئة"
                />
              </div>

              <label htmlFor="" className="text-[#000] text-sm">
                Nom (in fr)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, fr: e.target.value },
                  })
                }
                placeholder="Nom de la catégorie"
              />

              <h1 className="text-[#000] text-lg font-bold py-5">
                Member Designation
              </h1>
              <label htmlFor="" className="text-[#000] text-sm">
                Designation (in en)*
              </label>
              <input
                type="text"
                name="designation"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designation: {
                      ...formData.designation,
                      en: e.target.value,
                    },
                  })
                }
                placeholder="Category Name"
              />

              <div className="arabic w-full text-end">
                <label htmlFor="" className="text-[#000] text-sm">
                  (in ar) تعيين*
                </label>
                <input
                  type="text"
                  name="designation"
                  style={{ direction: "rtl" }}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      designation: {
                        ...formData.designation,
                        ar: e.target.value,
                      },
                    })
                  }
                  placeholder="تعيين"
                />
              </div>

              <label htmlFor="" className="text-[#000] text-sm">
                Désignation (in fr)*
              </label>
              <input
                type="text"
                name="designation"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designation: {
                      ...formData.designation,
                      fr: e.target.value,
                    },
                  })
                }
                placeholder="Désignation"
              />

              <h1 className="text-[#000] text-lg font-bold py-5">
                Member Profile
              </h1>
              <label htmlFor="" className="text-[#000] text-sm">
                Image*
              </label>
              <input
                type="file"
                required
                onChange={handleFileChange}
                name="image"
                placeholder="Image"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
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
                  "Add Team Member"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddTeam;
