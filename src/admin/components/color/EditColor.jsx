import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getColor, updateColor } from "../../../services/colors";

const EditCategory = () => {
  const [loading, setLoading] = useState(false);
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const { data } = await getColor(id);
        setPrimary(data.primary);
        setSecondary(data.secondary);
      } catch (error) {
        console.error("Error fetching color:", error);
      }
    };
    fetchColor();
  }, [id]);

  // Edit Category
  const handleEditCategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const theme = { primary, secondary };
      const response = await updateColor(id, theme);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Color updated successfully",
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
        title: "Error updating color",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error updating color:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Edit Color</h1>
            <form action="" onSubmit={handleEditCategory}>
              <div className="flex items-center justify-between">
                <div className="pe-6 w-full">
                  <label htmlFor="" className="text-[#000] text-sm block">
                    Primary Color*
                  </label>
                  <input
                    type="color"
                    name="primary"
                    value={primary}
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
                    value={secondary}
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
                {loading ? <ClipLoader size={20} color="#fff" /> : "Apply Color"}
              </button>
              <button className="ms-3 bg-secondary text-black hover:bg-primary hover:text-white py-2 rounded-full mt-4 px-6">Reset Default Theme</button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditCategory;
