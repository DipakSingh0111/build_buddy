import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-[#0B1220] overflow-hidden relative">
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#F4B400]/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 xl:px-20 pt-10 md:pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-xs sm:text-sm text-[#F4B400] font-semibold">
              <ShieldCheck size={15} />
              Trusted by 10,000+ Customers
            </div>

            {/* HEADING */}
            <h1 className="text-white font-black leading-[1.05] mt-6 text-[40px] sm:text-[52px] md:text-[72px]">
              Hire Skilled
              <br />
              <span className="text-[#F4B400]">Construction</span>
              <br />
              Workers Fast.
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-base md:text-lg leading-8 mt-6 max-w-[650px]">
              Find verified electricians, plumbers, painters, masons & skilled
              workers for your construction projects instantly.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 mt-10">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#F4B400]" />
                Verified Workers
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#F4B400]" />
                Quick Booking
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#F4B400]" />
                Affordable Pricing
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#F4B400]" />
                Trusted Service
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="h-14 md:h-16 px-7 bg-[#F4B400] hover:bg-[#deaa05] transition-all rounded-2xl text-black font-bold flex items-center justify-center gap-3 shadow-2xl">
                Book Workers
                <ArrowRight size={20} />
              </button>

              <button className="h-14 md:h-16 px-7 border border-white/20 hover:border-[#F4B400] text-white rounded-2xl backdrop-blur-xl bg-white/5 transition-all">
                Become a Worker
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-12">
              <div>
                <h2 className="text-[#F4B400] text-2xl md:text-4xl font-black">
                  10K+
                </h2>

                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Customers
                </p>
              </div>

              <div>
                <h2 className="text-[#F4B400] text-2xl md:text-4xl font-black">
                  5K+
                </h2>

                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Workers
                </p>
              </div>

              <div>
                <h2 className="text-[#F4B400] text-2xl md:text-4xl font-black">
                  4.9★
                </h2>

                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Ratings
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px]">
              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
                alt="construction"
                className="w-full h-[500px] sm:h-[620px] md:h-[760px] object-cover rounded-[30px] md:rounded-[40px]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 rounded-[30px] md:rounded-[40px]"></div>

              {/* TOP TEXT */}
              <div className="absolute top-5 left-5 md:top-8 md:left-8 z-20 max-w-[250px] md:max-w-[320px]">
                <p className="text-[#F4B400] uppercase tracking-[2px] text-xs md:text-sm font-semibold">
                  BuildBuddy Services
                </p>

                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mt-3">
                  Hire Skilled
                  <br />
                  Workers Fast
                </h2>

                <p className="text-gray-200 text-sm md:text-base leading-6 mt-4">
                  Verified construction workers available instantly for
                  residential and commercial projects.
                </p>
              </div>

              {/* TOP CARD */}
              <div className="absolute top-5 right-5 md:top-8 md:right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-5 w-[180px] md:w-[240px] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F4B400] flex items-center justify-center">
                    <Wrench className="text-black" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl">
                      2500+
                    </h3>

                    <p className="text-gray-300 text-xs md:text-sm">
                      Workers Available
                    </p>
                  </div>
                </div>
              </div>

              {/* BOOKING CARD */}
              <div className="absolute left-4 right-4 md:left-6 md:right-6 bottom-4 md:bottom-6 bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-6 shadow-2xl z-20">
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl md:text-3xl font-black text-[#0B1220]">
                      Book a Worker
                    </h2>

                    <p className="text-gray-500 mt-1 text-sm md:text-base">
                      Fast & Trusted Service
                    </p>
                  </div>

                  <div className="bg-[#F4B400] w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center">
                    <Star className="text-black" />
                  </div>
                </div>

                {/* FORM */}
                <div className="space-y-3 md:space-y-4 mt-5">
                  <select className="w-full h-12 md:h-14 bg-[#F8FAFC] rounded-2xl px-4 outline-none border border-gray-200 text-sm md:text-base">
                    <option>Select Work Type</option>
                    <option>Electrician</option>
                    <option>Plumber</option>
                    <option>Painter</option>
                    <option>Mason</option>
                  </select>

                  <div className="flex items-center bg-[#F8FAFC] rounded-2xl px-4 border border-gray-200 h-12 md:h-14">
                    <MapPin size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full h-full px-3 bg-transparent outline-none text-sm md:text-base"
                    />
                  </div>

                  <button className="w-full h-12 md:h-14 bg-[#F4B400] hover:bg-[#deaa05] transition-all rounded-2xl font-bold text-black flex items-center justify-center gap-3">
                    Find Workers
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* REVIEW */}
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#F4B400] text-sm">★★★★★</div>

                    <span className="text-xs md:text-sm text-gray-500">
                      4.9 Ratings
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-500">10K+ Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
