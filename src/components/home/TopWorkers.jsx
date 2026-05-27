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
    <section className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-[#FFF8E7] border border-[#F4B400]/20 px-4 py-2 rounded-full text-[#F4B400] text-xs sm:text-sm font-semibold">
              Trusted Professionals
            </div>

            {/* HEADING */}
            <h2 className="text-[#111827] text-[32px] sm:text-[46px] lg:text-[56px] leading-tight font-black mt-5">
              Meet Our
              <br />
              Top Workers
            </h2>

            {/* DESC */}
            <p className="text-gray-500 text-sm sm:text-lg leading-7 mt-5 max-w-[700px]">
              Skilled and verified professionals trusted by thousands of
              customers for quality construction and maintenance work.
            </p>
          </div>

          {/* BUTTON */}
          <button className="h-12 sm:h-14 px-6 rounded-xl bg-[#F4B400] hover:bg-[#e2ab00] transition text-black font-semibold flex items-center gap-2 w-fit shadow-lg">
            View All Workers
            <ArrowRight size={18} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-[28px]
                overflow-hidden
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* VERIFIED */}
                <div className="absolute top-4 left-4 bg-[#F4B400] text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                  <BadgeCheck size={13} />
                  Verified
                </div>

                {/* RATING */}
                <div className="absolute top-4 right-4 bg-white text-[#111827] px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md">
                  <Star size={13} className="text-[#F4B400] fill-[#F4B400]" />
                  {worker.rating}
                </div>

                {/* NAME */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-2xl font-bold">
                    {worker.name}
                  </h3>

                  <p className="text-[#F4B400] font-medium mt-1 text-sm">
                    {worker.role}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* LOCATION */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={16} />

                  <span>{worker.location}</span>
                </div>

                {/* JOBS */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-xs">Completed</p>

                    <h4 className="text-[#111827] text-xl font-bold mt-1">
                      {worker.jobs}
                    </h4>
                  </div>

                  {/* BUTTON */}
                  <button className="w-11 h-11 rounded-xl bg-[#F4B400] text-black flex items-center justify-center shadow-md hover:scale-105 transition">
                    <ArrowRight size={18} />
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
