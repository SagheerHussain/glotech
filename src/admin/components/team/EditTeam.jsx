import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getTeamById, updateTeam } from "../../../services/team";

const EditTeam = () => {
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

  const { id } = useParams();

  const handleAddTeam = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name_en", formData.name.en);
      data.append("name_ar", formData.name.ar);
      data.append("name_fr", formData.name.fr);
      data.append("designation_en", formData.designation.en);
      data.append("designation_ar", formData.designation.ar);
      data.append("designation_fr", formData.designation.fr);
      data.append("image", formData.image);

      const response = await updateTeam(id, data);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Team updated successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-team");
        setLoading(false);
      } else new Error("Something wrong");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error updating team",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error creating category:", error);
    }
  };

  // get team member
  const getTeamMember = async () => {
    try {
      const response = await getTeamById(id);
      if (response.success) {
        setFormData(response.data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error getting team member:", error);
    }
  };

  useEffect(() => {
    getTeamMember();
  }, [id]);

  return (
    <>
      <Layout>
        <section id="addCategory" className={`h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Edit Team Member
            </h1>
            <form action="" onSubmit={handleAddTeam}>
              <label htmlFor="" className="text-[#000] text-sm">
                Name (in en)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.name.en}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, en: e.target.value },
                  })
                }
                placeholder="Name"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                (in ar) اسم*
              </label>
              <input
                type="text"
                name="name"
                style={{ direction: "rtl" }}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.name.ar}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, ar: e.target.value },
                  })
                }
                placeholder="اسم"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Nom (in fr)*
              </label>
              <input
                type="text"
                name="name"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.name.fr}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { ...formData.name, fr: e.target.value },
                  })
                }
                placeholder="Nom"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Designation (in en)*
              </label>
              <input
                type="text"
                name="designation"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.designation.en}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designation: { ...formData.designation, en: e.target.value },
                  })
                }
                placeholder="Designation"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                (in ar) تعيين*
              </label>
              <input
                type="text"
                name="designation"
                style={{ direction: "rtl" }}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.designation.ar}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designation: { ...formData.designation, ar: e.target.value },
                  })
                }
                placeholder="تعيين"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Désignation (in fr)*
              </label>
              <input
                type="text"
                name="designation"
                defaultValue={formData.designation.fr}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designation: { ...formData.designation, fr: e.target.value },
                  })
                }
                placeholder="Désignation"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Current Image
              </label>
              <img
                src={formData.image}
                alt=""
                className="w-24 h-24 object-cover rounded-full mb-4"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Image*
              </label>
              <input
                type="file"
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

export default EditTeam;
