import React, { useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { addCategory } from "../../../services/categories";

const EditTeam = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState({ en: "", ar: "", fr: "" });
  const [designation, setDesignation] = useState({ en: "", ar: "", fr: "" });
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const team = { name, designation, image };
      if (
        !team.name.en ||
        !team.name.ar ||
        !team.name.fr ||
        !team.designation.en ||
        !team.designation.ar ||
        !team.designation.fr ||
        !team.image
      ) {   
        Swal.fire({
          icon: "error",
          title: "Please fill all fields",
          showConfirmButton: false,
          timer: 700,
        });
        setLoading(false);
        return;
      }
      const response = await addTeam(team);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Team added successfully",
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
        <section id="addCategory" className={`h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Add New Team Member
            </h1>
            <form action="" onSubmit={handleAddTeam}>
              <label htmlFor="" className="text-[#000] text-sm">
                Name (in en)*
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
                (in ar) اسم*
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
                Nom (in fr)*
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
                Designation (in en)*
              </label>
              <input
                type="text"
                name="designation"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setName({ ...name, en: e.target.value })}
                placeholder="Category Name"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                (in ar) تعيين*
              </label>
              <input
                type="text"
                name="designation"
                style={{ direction: "rtl" }}
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setName({ ...name, ar: e.target.value })}
                placeholder="تعيين"
              />

              <label htmlFor="" className="text-[#000] text-sm">
                Désignation (in fr)*
              </label>
              <input
                type="text"
                name="designation"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                required
                onChange={(e) => setName({ ...name, fr: e.target.value })}
                placeholder="Désignation"
              />

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
