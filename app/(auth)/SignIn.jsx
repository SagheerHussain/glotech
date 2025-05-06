import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Logo } from "../../src/components/index";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { loginAccount } from "../../src/services/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignIn = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    try {
      if (formData.email === "" || formData.password === "") {
        Swal.fire({
          title: "Please fill all fields",
          icon: "error",
          timer: 700,
        });
        setLoading(false);
        return;
      }
      const user = await loginAccount(formData.email, formData.password);
      console.log(user);
      if (user.success) {
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
          timer: 700,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/dashboard");
          localStorage.setItem("token", JSON.stringify(user.token));
          localStorage.setItem("user", JSON.stringify(user.user));
        }, 700);
      } else {
        Swal.fire({
          title: user?.message || "Login Failed",
          icon: "error",
          timer: 700,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Login Failed",
        icon: "error",
        timer: 700,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <AuthLayout>
        <div
          className="auth_form p-10 w-full flex flex-col items-center justify-center rounded-[25px]"
          style={{ backgroundColor: "#000" }}
        >
          <Logo />
          <h2 className="text-lg sm:text-2xl text-white font-bold mt-4">
            Welcome To Glotech KSA
          </h2>
          <form onSubmit={handleSignUp} className="auth_user_form">
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
              style={{ backgroundColor: "#2b1e0e", borderRadius: "3px" }}
            />

            <label htmlFor="" className="text-white text-sm mb-3">
              Password
            </label>
            <div className="flex items-center justify-between rounded-full" style={{ backgroundColor: "#2b1e0e" }}>
              <div className="password_input flex items-center w-full">
                <input
                  onChange={handleChange}
                  required
                  name="password"
                  type={`${password ? "text" : "password"}`}
                  placeholder="Password"
                  className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none"
                />
              </div>
              <div className="password_eye_icon" style={{ marginRight: "10px" }}>
                {password ? (
                  <FaEye
                    onClick={() => setPassword(false)}
                    className="text-white cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setPassword(true)}
                    className="text-white cursor-pointer"
                  />
                )}
              </div>
            </div>

            <button
              disabled={loading}
              className={`${
                loading ? "opacity-[.5]" : "hover:bg-secondary"
              } w-full bg-primary hover:text-black text-white py-2 rounded-[25px] mt-4`}
            >
              {loading ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                "Login Account"
              )}
            </button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignIn;
