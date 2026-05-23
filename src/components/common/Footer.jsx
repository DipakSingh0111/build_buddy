import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#071B3B] text-white pt-16 pb-8 mt-20">
      <div className="w-full px-5 md:px-10 xl:px-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12">
          {/* LOGO */}
          <div>
            <h1 className="text-4xl font-black">
              <span className="text-white">Build</span>
              <span className="text-[#F4B400]">Buddy</span>
            </h1>

            <p className="text-gray-300 mt-5 leading-7 text-sm">
              India’s trusted construction workforce platform. Hire workers,
              contractors & manage projects easily with BuildBuddy.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-[#F4B400] hover:text-black transition cursor-pointer flex items-center justify-center font-bold text-lg">
                f
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-[#F4B400] hover:text-black transition cursor-pointer flex items-center justify-center font-bold text-sm">
                IG
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-[#F4B400] hover:text-black transition cursor-pointer flex items-center justify-center font-bold text-sm">
                X
              </div>

              <div className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-[#F4B400] hover:text-black transition cursor-pointer flex items-center justify-center font-bold text-sm">
                IN
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-xl font-bold mb-6">Quick Links</h2>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Find Workers
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Contractors
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Materials
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Pricing
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-xl font-bold mb-6">Services</h2>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Mason Workers
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Electricians
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Plumbers
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Painters
              </li>

              <li className="hover:text-[#F4B400] transition cursor-pointer">
                Construction Materials
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl font-bold mb-6">Contact Us</h2>

            <div className="space-y-5 text-sm text-gray-300">
              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F4B400] mt-1" />

                <p>Delhi NCR, India</p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#F4B400]" />

                <p>support@buildbuddy.com</p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#F4B400]" />

                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 BuildBuddy. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <p className="hover:text-[#F4B400] transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-[#F4B400] transition cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
