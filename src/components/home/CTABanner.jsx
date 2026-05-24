import React from "react";
import { ArrowRight, PhoneCall, ShieldCheck, Star } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-28 overflow-hidden">
      <div className="w-full px-5 md:px-10 xl:px-20">
        {/* MAIN CONTAINER */}
        <div className="relative bg-[#0B1220] rounded-[42px] overflow-hidden px-8 md:px-14 py-16 md:py-20">
          {/* GLOW */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F4B400]/20 blur-[120px] rounded-full"></div>

          {/* GRID */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-[#F4B400] text-sm font-semibold">
                <ShieldCheck size={16} />
                Trusted Construction Platform
              </div>

              {/* HEADING */}
              <h2 className="text-white text-[45px] md:text-[68px] leading-[1.05] font-black mt-7">
                Need Skilled
                <br />
                Workers For
                <span className="text-[#F4B400]"> Your Project?</span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-lg leading-9 mt-7 max-w-[650px]">
                Hire verified professionals instantly for construction,
                maintenance, repair & renovation work with trusted service and
                affordable pricing.
              </p>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-5 mt-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white">
                  ⚡ Fast Booking
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white">
                  ✅ Verified Workers
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white">
                  💰 Affordable Pricing
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-5 mt-12">
                <button className="h-16 px-8 rounded-2xl bg-[#F4B400] hover:bg-[#deaa05] transition-all text-black font-bold flex items-center gap-3 shadow-2xl">
                  Book Workers Now
                  <ArrowRight size={20} />
                </button>

                <button className="h-16 px-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#F4B400]/40 transition-all text-white font-semibold flex items-center gap-3 backdrop-blur-xl">
                  <PhoneCall size={18} />
                  Contact Us
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end">
              {/* IMAGE CARD */}
              <div className="relative w-full max-w-[520px]">
                {/* IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
                  alt="construction workers"
                  className="w-full h-[620px] object-cover rounded-[36px]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 rounded-[36px]"></div>

                {/* TOP CARD */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4B400] flex items-center justify-center">
                      <Star className="text-black" />
                    </div>

                    <div>
                      <h3 className="text-white text-2xl font-black">4.9★</h3>

                      <p className="text-gray-300 text-sm">Customer Rating</p>
                    </div>
                  </div>
                </div>

                {/* BOTTOM CARD */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-[30px] p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Trusted by</p>

                      <h2 className="text-[42px] leading-none font-black text-[#0B1220] mt-2">
                        10K+
                      </h2>

                      <p className="text-gray-600 mt-2">Happy Customers</p>
                    </div>

                    <button className="w-16 h-16 rounded-2xl bg-[#F4B400] text-black flex items-center justify-center shadow-xl hover:scale-110 transition-all">
                      <ArrowRight size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="relative z-10 mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-12 flex-wrap">
              <h4 className="text-white text-lg font-semibold">
                Trusted by leading builders & contractors
              </h4>

              <div className="flex items-center gap-10 text-gray-400 font-semibold">
                <span>BuildCorp</span>
                <span>UrbanSpace</span>
                <span>Skyline Infra</span>
                <span>ModernBuild</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 BuildBuddy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
