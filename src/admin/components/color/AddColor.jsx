import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { createColorTheme, getColor, updateColor } from "../../../services/colors";

const AddColor = () => {
  const [loading, setLoading] = useState(false);
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");

  const navigate = useNavigate();

  // Edit Category
  const handleAddColor = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const theme = { primary, secondary };
      const response = await createColorTheme(theme);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Color added successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-color");
        setLoading(false);
      } else new Error("Something wrong");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error adding color",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error adding color:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Add Color</h1>
            <form action="" onSubmit={handleAddColor}>
              <div className="flex items-center justify-between">
                <div className="pe-6 w-full">
                  <label htmlFor="" className="text-[#000] text-sm block">
                    Primary Color*
                  </label>
                  <input
                    type="color"
                    name="primary"
                    onChange={(e) => setPrimary(e.target.value)}
                    placeholder="Primary Color"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="" className="text-[#000] text-sm block">
                    Secondary Color*
                  </label>
                  <input
                    type="color"
                    name="secondary"
                    onChange={(e) => setSecondary(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`bg-primary text-white py-2 rounded-full mt-4 px-6 ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-secondary hover:bg-hover_color"
                }`}
              >
                {loading ? <ClipLoader size={20} color="#fff" /> : "Add Color"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddColor;
