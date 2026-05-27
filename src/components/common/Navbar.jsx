import { useEffect, useState } from "react";
import { Menu, X, MapPin, ChevronDown, Loader2 } from "lucide-react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // LOCATION STATES
  const [location, setLocation] = useState("Detecting...");
  const [loadingLocation, setLoadingLocation] = useState(true);

  // GET USER LOCATION
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // REVERSE GEOCODING API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
          );

          const data = await response.json();

          // FULL ADDRESS
          const fullAddress = data.display_name;

          setLocation(fullAddress);
        } catch (error) {
          console.log(error);
          setLocation("Location Error");
        } finally {
          setLoadingLocation(false);
        }
      },
      () => {
        setLocation("Select Location");
        setLoadingLocation(false);
      },
    );
  }, []);

  // ACTIVE LINK STYLE
  const navLinkStyle = ({ isActive }) =>
    `font-semibold text-[15px] transition hover:text-[#F4B400] ${
      isActive ? "text-[#F4B400]" : "text-[#111827]"
    }`;

  const mobileNavLinkStyle = ({ isActive }) =>
    `font-semibold text-[16px] transition ${
      isActive ? "text-[#F4B400]" : "text-[#111827]"
    }`;

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-5 md:px-10 xl:px-16">
        <div className="h-[82px] flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <Link to="/" className="cursor-pointer flex-shrink-0">
              <h1 className="text-[36px] leading-none font-black tracking-[-1px]">
                <span className="text-[#071B3B]">Build</span>

                <span className="text-[#F4B400]">Buddy</span>
              </h1>

              <p className="text-[11px] text-gray-400 font-semibold tracking-wide mt-1">
                Har Kaam, Pakka Kaam
              </p>
            </Link>

            {/* LOCATION */}
            <div className="hidden xl:flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer max-w-[320px]">
              {/* ICON */}
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#F4B400]" size={18} />
              </div>

              {/* TEXT */}
              <div className="overflow-hidden">
                <p className="text-[11px] text-gray-400 font-medium">
                  Location
                </p>

                <div className="flex items-center gap-1 mt-0.5">
                  {loadingLocation ? (
                    <div className="flex items-center gap-2">
                      <Loader2
                        size={14}
                        className="animate-spin text-[#F4B400]"
                      />

                      <span className="font-bold text-[14px] text-[#111827]">
                        Detecting...
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="font-bold text-[14px] text-[#111827] truncate">
                        {location}
                      </span>

                      <ChevronDown size={15} className="flex-shrink-0" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/find-workers" className={navLinkStyle}>
              Find Workers
            </NavLink>

            <NavLink to="/contractors" className={navLinkStyle}>
              For Contractors
            </NavLink>

            <NavLink
              to="/materials"
              className={({ isActive }) =>
                `flex items-center gap-2 font-semibold text-[15px] transition hover:text-[#F4B400] ${
                  isActive ? "text-[#F4B400]" : "text-[#111827]"
                }`
              }
            >
              Materials
              <span className="bg-[#F4B400] text-black text-[9px] px-2 py-[5px] rounded-full font-bold">
                NEW
              </span>
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
              About Us
            </NavLink>
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
            {/* MOBILE LOCATION */}
            <div className="flex items-center gap-3 bg-[#FAFAFA] border border-gray-200 rounded-2xl p-4">
              <div className="w-11 h-11 rounded-xl bg-[#FFF8E8] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#F4B400]" size={18} />
              </div>

              <div className="overflow-hidden">
                <p className="text-[11px] text-gray-400">Location</p>

                <div className="flex items-center gap-2">
                  {loadingLocation ? (
                    <>
                      <Loader2
                        size={14}
                        className="animate-spin text-[#F4B400]"
                      />

                      <span className="font-bold text-[#111827]">
                        Detecting...
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold text-[#111827] truncate">
                        {location}
                      </span>

                      <ChevronDown size={15} className="flex-shrink-0" />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-6 mt-8">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={mobileNavLinkStyle}
              >
                Home
              </NavLink>

              <NavLink
                to="/find-workers"
                onClick={() => setOpen(false)}
                className={mobileNavLinkStyle}
              >
                Find Workers
              </NavLink>

              <NavLink
                to="/contractors"
                onClick={() => setOpen(false)}
                className={mobileNavLinkStyle}
              >
                For Contractors
              </NavLink>

              <NavLink
                to="/materials"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold text-[16px] ${
                    isActive ? "text-[#F4B400]" : "text-[#111827]"
                  }`
                }
              >
                Materials
                <span className="bg-[#F4B400] text-black text-[9px] px-2 py-1 rounded-full font-bold">
                  NEW
                </span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={mobileNavLinkStyle}
              >
                About Us
              </NavLink>
            </div>

            {/* MOBILE BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="py-3 rounded-2xl border border-gray-300 font-semibold text-[#111827] text-center"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="py-3 rounded-2xl bg-[#F4B400] font-semibold text-black shadow-md text-center"
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
