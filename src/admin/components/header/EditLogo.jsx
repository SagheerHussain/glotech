import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getLogoById, updateLogo } from "../../../services/logo";

const EditCategory = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const { data } = await getLogoById(id);
        setImage(data.image);
      } catch (error) {
        console.error("Error fetching color:", error);
      }
    };
    fetchColor();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Edit Category
  const handleEditCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);
      const response = await updateLogo(id, formData);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Logo updated successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-logo");
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
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Edit Color</h1>
            <form action="" onSubmit={handleEditCategory}>
              <div className="flex items-center justify-between mb-4">
                <div className="pe-6 w-full">
                  <label htmlFor="" className="text-[#000] text-sm block mb-4">
                    Current Logo*
                  </label>
                  <img src={image} className="w-[200px] h-[200px]" alt="" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="pe-6 w-full">
                  <label htmlFor="" className="text-[#000] text-sm block mb-4">
                    Upload Logo*
                  </label>
                  <input type="file" name="image" placeholder="logo" onChange={handleImageChange} />
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
                {loading ? <ClipLoader size={20} color="#fff" /> : "Apply Changes"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditCategory;
