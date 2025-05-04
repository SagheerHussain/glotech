import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  addTestimonial,
  getTestimonialById,
  updateTestimonial,
} from "../../../services/testimonial";

const EditTestimonial = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { en: "", ar: "", fr: "" },
    review: { en: "", ar: "", fr: "" },
    rating: 0,
    image: null,
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleUpdateTestimonial = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name_en", formData.name.en);
    data.append("name_ar", formData.name.ar);
    data.append("name_fr", formData.name.fr);
    data.append("review_en", formData.review.en);
    data.append("review_ar", formData.review.ar);
    data.append("review_fr", formData.review.fr);
    data.append("rating", formData.rating);
    data.append("image", formData.image);

    try {
      const response = await updateTestimonial(id, data);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Testimonial updated successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-testimonial");
        setLoading(false);
      } else new Error("Something wrong");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error updating testimonial",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error updating testimonial:", error);
    }
  };

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const { data, success } = await getTestimonialById(id);
        if (success) {
          setFormData({
            name: {
              en: data.name.en,
              ar: data.name.ar,
              fr: data.name.fr,
            },
            review: {
              en: data.review.en,
              ar: data.review.ar,
              fr: data.review.fr,
            },
            rating: data.rating,
            image: data.image,
          });
        } else new Error("Something wrong");
      } catch (error) {
        console.error("Error fetching testimonial:", error);
      }
    };
    fetchTestimonial();
  }, [id]);

  return (
    <>
      <Layout>
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">Add Review</h1>
            <form action="" onSubmit={handleUpdateTestimonial}>
              <h1 className="text-[#000] text-lg font-bold py-5">
                Client Name
              </h1>
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
                placeholder="Client Name"
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
                  defaultValue={formData.name.ar}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: { ...formData.name, ar: e.target.value },
                    })
                  }
                  placeholder="اسم"
                />
              </div>

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

              <h1 className="text-[#000] text-lg font-bold py-5">
                Client Review
              </h1>
              <label htmlFor="" className="text-[#000] text-sm">
                Review (in en)*
              </label>
              <input
                type="text"
                name="review"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.review.en}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    review: { ...formData.review, en: e.target.value },
                  })
                }
                placeholder="Review"
              />

              <div className="arabic w-full text-end">
                <label htmlFor="" className="text-[#000] text-sm">
                  (in ar) مراجعة*
                </label>
                <input
                  type="text"
                  name="designation"
                  style={{ direction: "rtl" }}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  defaultValue={formData.review.ar}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      review: { ...formData.review, ar: e.target.value },
                    })
                  }
                  placeholder="مراجعة"
                />
              </div>

              <label htmlFor="" className="text-[#000] text-sm">
                Revoir (in fr)*
              </label>
              <input
                type="text"
                name="designation"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                defaultValue={formData.review.fr}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    review: { ...formData.review, fr: e.target.value },
                  })
                }
                placeholder="Revoir"
              />

              <h1 className="text-[#000] text-lg font-bold py-5">
                Client Rating
              </h1>
              <label htmlFor="" className="text-[#000] text-sm">
                Rating*
              </label>
              <input
                type="number"
                name="rating"
                className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
                placeholder="Rating"
              />

              <h1 className="text-[#000] text-lg font-bold py-5">
                Current Logo
              </h1>
              <img src={formData.image} alt="" className="mb-4 w-[100px]" />

              <h1 className="text-[#000] text-lg font-bold py-5">
                Client Company Logo
              </h1>
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
                  "Add Client Review"
                )}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditTestimonial;
