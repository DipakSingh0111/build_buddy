import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      role,
      ...loginData,
    };

    // PRINT LOGIN DATA
    console.log("LOGIN DATA :", finalData);

    // RESET
    setLoginData({
      email: "",
      password: "",
    });

    // REDIRECT
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-4 overflow-hidden">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-[#071B3B] text-white p-10 relative overflow-hidden">
          {/* BG CIRCLES */}
          <div className="absolute w-[300px] h-[300px] bg-[#F4B400]/20 rounded-full -top-20 -left-20"></div>

          <div className="absolute w-[220px] h-[220px] bg-[#F4B400]/10 rounded-full bottom-0 right-0"></div>

          <div className="relative z-10">
            {/* LOGO */}
            <h1 className="text-4xl font-black leading-tight">
              Build<span className="text-[#F4B400]">Buddy</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base leading-7">
              Welcome back! Login and manage workers, contractors, and
              construction projects easily.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4B400] flex items-center justify-center">
                  <ShieldCheck className="text-black" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">Secure Login</h3>

                  <p className="text-gray-400 text-sm">
                    Fast & protected authentication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 lg:p-10">
          {/* TOP */}
          <div>
            <h1 className="text-3xl font-black">
              <span className="text-[#071B3B]">Build</span>
              <span className="text-[#F4B400]">Buddy</span>
            </h1>

            <p className="text-gray-400 mt-2 text-sm">Login to your account</p>
          </div>

          {/* ROLE */}
          <div className="mt-6 bg-[#F4F4F4] rounded-2xl p-2 flex">
            <button
              onClick={() => setRole("user")}
              className={`flex-1 py-3 rounded-xl font-semibold transition ${
                role === "user"
                  ? "bg-[#F4B400] text-black shadow-md"
                  : "text-gray-500"
              }`}
            >
              User Login
            </button>

            <button
              onClick={() => setRole("admin")}
              className={`flex-1 py-3 rounded-xl font-semibold transition ${
                role === "admin"
                  ? "bg-[#071B3B] text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              Admin Login
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
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
                  value={loginData.password}
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

            {/* FORGOT */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-[#F4B400]"
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className={`w-full h-12 rounded-2xl font-bold text-base transition-all ${
                role === "user"
                  ? "bg-[#F4B400] hover:bg-[#e0a500] text-black"
                  : "bg-[#071B3B] hover:bg-[#0c2957] text-white"
              }`}
            >
              {role === "user" ? "Login as User" : "Login as Admin"}
            </button>
          </form>

          {/* REGISTER */}
          <p className="text-center text-gray-500 mt-5 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#F4B400] font-semibold cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
