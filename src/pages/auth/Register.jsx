import React, { useState } from "react";
import {
  User,
  ShieldCheck,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // FINAL DATA
    const finalData = {
      role,
      ...formData,
    };

    // PRINT DATA
    console.log("REGISTER DATA :", finalData);

    // RESET FORM
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
    });

    // REDIRECT LOGIN PAGE
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-4 overflow-hidden">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-[#071B3B] text-white p-10 relative overflow-hidden">
          {/* CIRCLES */}
          <div className="absolute w-[300px] h-[300px] bg-[#F4B400]/20 rounded-full -top-20 -left-20"></div>

          <div className="absolute w-[220px] h-[220px] bg-[#F4B400]/10 rounded-full bottom-0 right-0"></div>

          <div className="relative z-10">
            {/* LOGO */}
            <h1 className="text-4xl font-black leading-tight">
              Build<span className="text-[#F4B400]">Buddy</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base leading-7">
              Join India’s trusted construction workforce platform. Hire
              workers, manage contractors, and grow faster.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {/* ITEM */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4B400] flex items-center justify-center">
                  <User className="text-black" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">Verified Workers</h3>

                  <p className="text-gray-400 text-sm">
                    Skilled & trusted workforce
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4B400] flex items-center justify-center">
                  <ShieldCheck className="text-black" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">Secure Platform</h3>

                  <p className="text-gray-400 text-sm">
                    Safe and transparent system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 lg:p-10">
          {/* LOGO */}
          <div>
            <h1 className="text-3xl font-black">
              <span className="text-[#071B3B]">Build</span>
              <span className="text-[#F4B400]">Buddy</span>
            </h1>

            <p className="text-gray-400 mt-2 text-sm">Create your account</p>
          </div>

          {/* ROLE SELECT */}
          <div className="mt-6 bg-[#F4F4F4] rounded-2xl p-2 flex">
            <button
              onClick={() => setRole("user")}
              className={`flex-1 py-3 rounded-xl font-semibold transition ${
                role === "user"
                  ? "bg-[#F4B400] text-black shadow-md"
                  : "text-gray-500"
              }`}
            >
              User Register
            </button>

            <button
              onClick={() => setRole("admin")}
              className={`flex-1 py-3 rounded-xl font-semibold transition ${
                role === "admin"
                  ? "bg-[#071B3B] text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              Admin Register
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 h-12">
                <User size={18} className="text-gray-400" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full h-full px-3 outline-none bg-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 h-12">
                <Mail size={18} className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-full px-3 outline-none bg-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* MOBILE */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Mobile Number
              </label>

              <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 h-12">
                <Phone size={18} className="text-gray-400" />

                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full h-full px-3 outline-none bg-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 h-12">
                <Lock size={18} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full h-full px-3 outline-none bg-transparent text-sm"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-400" />
                  ) : (
                    <Eye size={18} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className={`w-full h-12 rounded-2xl font-bold text-base transition-all ${
                role === "user"
                  ? "bg-[#F4B400] hover:bg-[#e0a500] text-black"
                  : "bg-[#071B3B] hover:bg-[#0c2957] text-white"
              }`}
            >
              {role === "user" ? "Create User Account" : "Create Admin Account"}
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-gray-500 mt-5 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#F4B400] font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
