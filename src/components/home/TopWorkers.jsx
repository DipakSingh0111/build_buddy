import React from "react";
import { Star, MapPin, ArrowRight, BadgeCheck } from "lucide-react";

const workers = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Electrician",
    rating: "4.9",
    location: "New Delhi",
    jobs: "240+ Jobs",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 2,
    name: "Amit Kumar",
    role: "Plumber",
    rating: "4.8",
    location: "Noida",
    jobs: "180+ Jobs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },

  {
    id: 3,
    name: "Vikas Yadav",
    role: "Painter",
    rating: "5.0",
    location: "Gurgaon",
    jobs: "320+ Jobs",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },

  {
    id: 4,
    name: "Sandeep Singh",
    role: "Carpenter",
    rating: "4.9",
    location: "Faridabad",
    jobs: "210+ Jobs",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

const TopWorkers = () => {
  return (
    <section className="w-full bg-[#0B1220] py-28 overflow-hidden relative">
      {/* GLOW */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#F4B400]/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full px-5 md:px-10 xl:px-20">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-[#F4B400] text-sm font-semibold">
              Trusted Professionals
            </div>

            <h2 className="text-white text-[45px] md:text-[68px] leading-[1.05] font-black mt-7">
              Meet Our
              <br />
              Top Workers
            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-6 max-w-[700px]">
              Skilled and verified professionals trusted by thousands of
              customers for quality construction and maintenance work.
            </p>
          </div>

          {/* BUTTON */}
          <button className="h-16 px-8 rounded-2xl bg-[#F4B400] hover:bg-[#deaa05] transition-all text-black font-bold flex items-center gap-3 w-fit shadow-2xl">
            View All Workers
            <ArrowRight size={20} />
          </button>
        </div>

        {/* WORKERS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[36px] overflow-hidden hover:border-[#F4B400]/40 hover:-translate-y-3 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* VERIFIED */}
                <div className="absolute top-5 left-5 bg-[#F4B400] text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                  <BadgeCheck size={14} />
                  Verified
                </div>

                {/* RATING */}
                <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star size={14} className="text-[#F4B400] fill-[#F4B400]" />
                  {worker.rating}
                </div>

                {/* NAME */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-3xl font-black">
                    {worker.name}
                  </h3>

                  <p className="text-[#F4B400] font-semibold mt-2">
                    {worker.role}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                {/* LOCATION */}
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} />

                  <span>{worker.location}</span>
                </div>

                {/* JOBS */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Completed</p>

                    <h4 className="text-white text-2xl font-black mt-1">
                      {worker.jobs}
                    </h4>
                  </div>

                  <button className="w-14 h-14 rounded-2xl bg-[#F4B400] text-black flex items-center justify-center shadow-xl hover:scale-110 transition-all">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopWorkers;
