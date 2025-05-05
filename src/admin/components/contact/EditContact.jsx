import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getContactById, updateContact } from "../../../services/contact";

const EditContact = () => {
  const [loading, setLoading] = useState(false);
  const [location_en, setLocation_en] = useState("");
  const [location_ar, setLocation_ar] = useState("");
  const [location_fr, setLocation_fr] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const { data } = await getContactById(id);
        setLocation_en(data.location.en);
        setLocation_ar(data.location.ar);
        setLocation_fr(data.location.fr);
        setEmail(data.email);
        setPhone(data.phone);
      } catch (error) {
        console.error("Error fetching color:", error);
      }
    };
    fetchContact();
  }, [id]);

  // Edit Category
  const handleEditContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await updateContact(
        id,
        location_en,
        location_ar,
        location_fr,
        email,
        phone
      );
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Contact updated successfully",
          showConfirmButton: false,
          timer: 700,
        });
        navigate("/dashboard/view-contact");
        setLoading(false);
      } else new Error("Something wrong");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error updating contact",
        showConfirmButton: false,
        timer: 700,
      });
      console.error("Error updating contact:", error);
    }
  };

  return (
    <>
      <Layout>
        <section id="addCategory" className={`min-h-[90vh] py-6`}>
          <div className="container py-4">
            <h1 className="text-[#000] text-4xl font-bold mb-5">
              Edit Contact
            </h1>
            <form action="" onSubmit={handleEditContact}>
              <div className="w-full">
                <label htmlFor="" className="text-[#000] text-sm block">
                  Location (EN)*
                </label>
                <input
                  type="text"
                  value={location_en}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="location_en"
                  onChange={(e) => setLocation_en(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-[#000] text-sm block">
                  Location (AR)*
                </label>
                <input
                  type="text"
                  value={location_ar}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="location_ar"
                  onChange={(e) => setLocation_ar(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-[#000] text-sm block">
                  Location (FR)*
                </label>
                <input
                  type="text"
                  value={location_fr}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="location_fr"
                  onChange={(e) => setLocation_fr(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-[#000] text-sm block">
                  Email*
                </label>
                <input
                  type="text"
                  value={email}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-[#000] text-sm block">
                  Phone*
                </label>
                <input
                  type="text"
                  value={phone}
                  className="placeholder:text-[#0000006b] w-full text-black bg-transparent focus:border-[#0000003a] focus:outline-none border-[1px] border-[#0000003a] focus:shadow-none rounded-none mb-4 mt-1 px-3 py-2"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

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

export default EditContact;
