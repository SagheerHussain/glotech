import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "../../src/components/index";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // navigate
  const navigate = useNavigate();

  // Value Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    try {
      const user = await createAccount(data);
      if (user.success) {
        Swal.fire({
          title: "Student Created Successfully",
          icon: "success",
          timer: 1200
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/signin");
        }, 700);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthLayout>
        <div
          className="auth_form p-10 w-full flex flex-col items-center justify-center rounded-[25px]"
          style={{ backgroundColor: "#4f3211c2" }}
        >
          <Logo />
          <h2 className="text-lg sm:text-2xl text-white font-bold mt-4">
            Welcome To Glotech KSA
          </h2>
          <form onSubmit={handleSignUp} className="auth_user_form">
            <label htmlFor="" className="text-white text-sm pb-3">
              Username
            </label>
            <input
              onChange={handleChange}
              name="username"
              required
              type="name"
              placeholder="Username"
              className="w-full px-4 py-2 mb-4 border-none text-white focus:outline-none"
              style={{ backgroundColor: "#3f2d18c2", borderRadius: "3px" }}
            />
            
            <label htmlFor="" className="text-white text-sm pb-3">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border-none text-white focus:outline-none"
              style={{ backgroundColor: "#3f2d18c2", borderRadius: "3px" }}
            />

            <label htmlFor="" className="text-white text-sm mb-3">
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              required
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border-none text-white focus:outline-none"
              style={{ backgroundColor: "#3f2d18c2", borderRadius: "3px" }}
            />

            <button disabled={loading} className={`${loading && "opacity-[.5]"} w-full bg-primary hover:bg-secondary hover:text-black text-white py-2 rounded-[25px] mt-4`}>
              {loading ? <ClipLoader color="#fff" /> : "Register Account"}
            </button>

            <p className="mt-4 text-white">
              Already have an account{" "}
              <Link
                to={`/login`}
                style={{ paddingRight: "5px" }}
                className="text-[#eee] underline inline-block"
              >
                Login
              </Link>
              here
            </p>

          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignUp;
