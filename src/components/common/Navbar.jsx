import { useState } from "react";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-5 md:px-10 xl:px-16">
        <div className="h-[82px] flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <div className="cursor-pointer flex-shrink-0">
              <h1 className="text-[36px] leading-none font-black tracking-[-1px]">
                <span className="text-[#071B3B]">Build</span>
                <span className="text-[#F4B400]">Buddy</span>
              </h1>

              <p className="text-[11px] text-gray-400 font-semibold tracking-wide mt-1">
                Har Kaam, Pakka Kaam
              </p>
            </div>

            {/* LOCATION */}
            <div className="hidden xl:flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] flex items-center justify-center">
                <MapPin className="text-[#F4B400]" size={18} />
              </div>

              <div>
                <p className="text-[11px] text-gray-400 font-medium">
                  Location
                </p>

                <div className="flex items-center gap-1 mt-0.5">
                  <span className="font-bold text-[14px] text-[#111827]">
                    Delhi NCR
                  </span>

                  <ChevronDown size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className="relative text-[#111827] font-semibold text-[15px] hover:text-[#F4B400] transition"
            >
              Home
              <span className="absolute left-0 -bottom-[31px] w-full h-[3px] bg-[#F4B400] rounded-full"></span>
            </Link>

            <Link
              to="/find-workers"
              className="text-[#111827] font-semibold text-[15px] hover:text-[#F4B400] transition"
            >
              Find Workers
            </Link>

            <Link
              to="/contractors"
              className="text-[#111827] font-semibold text-[15px] hover:text-[#F4B400] transition"
            >
              For Contractors
            </Link>

            <Link
              to="/materials"
              className="flex items-center gap-2 text-[#111827] font-semibold text-[15px] hover:text-[#F4B400] transition"
            >
              Materials
              <span className="bg-[#F4B400] text-black text-[9px] px-2 py-[5px] rounded-full font-bold">
                NEW
              </span>
            </Link>

            <Link
              to="/pricing"
              className="text-[#111827] font-semibold text-[15px] hover:text-[#F4B400] transition"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-[#111827] font-semibold text-[15px] hover:text-[#F4B400] transition"
            >
              About Us
            </Link>
          </nav>

          {/* BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="px-7 py-3 rounded-2xl border border-gray-300 bg-white text-[#111827] font-semibold text-[15px] hover:bg-gray-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-7 py-3 rounded-2xl bg-[#F4B400] hover:bg-[#e0a500] text-black font-semibold text-[15px] shadow-lg shadow-yellow-100 transition-all"
            >
              Register
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <X size={30} className="text-[#111827]" />
            ) : (
              <Menu size={30} className="text-[#111827]" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            {/* LOCATION */}
            <div className="flex items-center gap-3 bg-[#FAFAFA] border border-gray-200 rounded-2xl p-4">
              <div className="w-11 h-11 rounded-xl bg-[#FFF8E8] flex items-center justify-center">
                <MapPin className="text-[#F4B400]" size={18} />
              </div>

              <div>
                <p className="text-[11px] text-gray-400">Location</p>

                <div className="flex items-center gap-1">
                  <span className="font-bold text-[#111827]">Delhi NCR</span>

                  <ChevronDown size={15} />
                </div>
              </div>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/" className="text-[#F4B400] font-bold text-[16px]">
                Home
              </Link>

              <Link
                to="/find-workers"
                className="text-[#111827] font-semibold text-[16px]"
              >
                Find Workers
              </Link>

              <Link
                to="/contractors"
                className="text-[#111827] font-semibold text-[16px]"
              >
                For Contractors
              </Link>

              <Link
                to="/materials"
                className="flex items-center gap-2 text-[#111827] font-semibold text-[16px]"
              >
                Materials
                <span className="bg-[#F4B400] text-black text-[9px] px-2 py-1 rounded-full font-bold">
                  NEW
                </span>
              </Link>

              <Link
                to="/pricing"
                className="text-[#111827] font-semibold text-[16px]"
              >
                Pricing
              </Link>

              <Link
                to="/about"
                className="text-[#111827] font-semibold text-[16px]"
              >
                About Us
              </Link>
            </div>

            {/* MOBILE BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Link
                to="/login"
                className="py-3 rounded-2xl border border-gray-300 font-semibold text-[#111827] cursor-pointer"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="py-3 rounded-2xl bg-[#F4B400] font-semibold text-black shadow-md cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
