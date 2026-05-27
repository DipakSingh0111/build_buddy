import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Star,
  BadgeCheck,
  BriefcaseBusiness,
  Filter,
  SlidersHorizontal,
} from "lucide-react";

const workersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Electrician",
    location: "Delhi NCR",
    rating: 4.9,
    experience: "5+ Years Experience",
    price: "₹499/day",
    jobs: "240+ Jobs",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },

  {
    id: 2,
    name: "Amit Kumar",
    role: "Plumber",
    location: "Noida",
    rating: 4.8,
    experience: "4+ Years Experience",
    price: "₹599/day",
    jobs: "180+ Jobs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    verified: true,
  },

  {
    id: 3,
    name: "Vikas Yadav",
    role: "Painter",
    location: "Gurgaon",
    rating: 5.0,
    experience: "7+ Years Experience",
    price: "₹699/day",
    jobs: "320+ Jobs",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    verified: true,
  },

  {
    id: 4,
    name: "Sandeep Singh",
    role: "Carpenter",
    location: "Faridabad",
    rating: 4.9,
    experience: "6+ Years Experience",
    price: "₹799/day",
    jobs: "210+ Jobs",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    verified: true,
  },

  {
    id: 5,
    name: "Rohit Verma",
    role: "Welder",
    location: "Delhi NCR",
    rating: 4.7,
    experience: "3+ Years Experience",
    price: "₹550/day",
    jobs: "120+ Jobs",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    verified: false,
  },

  {
    id: 6,
    name: "Manoj Kumar",
    role: "Mason",
    location: "Noida",
    rating: 4.9,
    experience: "8+ Years Experience",
    price: "₹899/day",
    jobs: "400+ Jobs",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    verified: true,
  },
];

const categories = [
  "All",
  "Electrician",
  "Plumber",
  "Painter",
  "Carpenter",
  "Welder",
  "Mason",
];

const FindWorkers = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorkers = useMemo(() => {
    return workersData.filter((worker) => {
      const matchSearch =
        worker.name.toLowerCase().includes(search.toLowerCase()) ||
        worker.role.toLowerCase().includes(search.toLowerCase());

      const matchLocation = location === "All" || worker.location === location;

      const matchCategory =
        activeCategory === "All" || worker.role === activeCategory;

      return matchSearch && matchLocation && matchCategory;
    });
  }, [search, location, activeCategory]);

  return (
    <section className="w-full min-h-screen bg-[#f8fafc] py-10 sm:py-14">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-[40px] bg-[#111827] p-7 sm:p-10 lg:p-14">
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#F4B400]/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-[750px]">
                <p className="text-[#F4B400] uppercase tracking-[4px] text-xs sm:text-sm font-bold">
                  BuildBuddy Professionals
                </p>

                <h1 className="text-white text-[38px] sm:text-[60px] lg:text-[78px] leading-[1] font-black mt-5">
                  Find Trusted
                  <br />
                  Skilled Workers.
                </h1>

                <p className="text-gray-300 text-sm sm:text-lg leading-7 sm:leading-9 mt-6 max-w-[650px]">
                  Hire verified electricians, plumbers, painters, carpenters &
                  construction workers instantly for your projects.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 text-center min-w-[110px]">
                  <h3 className="text-[#F4B400] text-3xl sm:text-4xl font-black">
                    5K+
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">Workers</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 text-center min-w-[110px]">
                  <h3 className="text-[#F4B400] text-3xl sm:text-4xl font-black">
                    10K+
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">Customers</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 text-center min-w-[110px]">
                  <h3 className="text-[#F4B400] text-3xl sm:text-4xl font-black">
                    4.9★
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">Ratings</p>
                </div>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="mt-12 bg-white rounded-[30px] p-4 shadow-2xl">
              <div className="flex flex-col xl:flex-row gap-4">
                {/* SEARCH */}
                <div className="flex items-center gap-3 flex-1 h-16 border border-gray-200 rounded-2xl px-5">
                  <Search size={22} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Search worker by name or profession..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none bg-transparent text-[#111827]"
                  />
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-3 h-16 border border-gray-200 rounded-2xl px-5 xl:w-[250px]">
                  <MapPin size={22} className="text-[#F4B400]" />

                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full outline-none bg-transparent text-[#111827]"
                  >
                    <option value="All">All Locations</option>

                    <option value="Delhi NCR">Delhi NCR</option>

                    <option value="Noida">Noida</option>

                    <option value="Gurgaon">Gurgaon</option>

                    <option value="Faridabad">Faridabad</option>
                  </select>
                </div>

                {/* FILTER */}
                <button className="h-16 px-6 rounded-2xl border border-gray-200 flex items-center justify-center gap-2 font-semibold text-[#111827] hover:bg-gray-50 transition">
                  <SlidersHorizontal size={20} />
                  Filters
                </button>

                {/* BUTTON */}
                <button className="h-16 px-10 rounded-2xl bg-[#F4B400] hover:bg-[#dfaa00] transition text-black font-bold shadow-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-10 pb-2">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(item)}
              className={`whitespace-nowrap px-6 h-12 rounded-2xl font-semibold transition-all ${
                activeCategory === item
                  ? "bg-[#F4B400] text-black shadow-lg"
                  : "bg-white border border-gray-200 text-[#111827] hover:border-[#F4B400]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* RESULT */}
        <div className="flex items-center justify-between mt-10">
          <h2 className="text-[#111827] text-2xl sm:text-3xl font-black">
            Available Workers
          </h2>

          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <Filter size={18} />
            {filteredWorkers.length} Results
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">
          {filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              className="
                bg-white
                rounded-[32px]
                overflow-hidden
                border
                border-gray-200
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                transition-all
                duration-300
                group
              "
            >
              {/* IMAGE */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* VERIFIED */}
                {worker.verified && (
                  <div className="absolute top-5 left-5 bg-[#F4B400] text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <BadgeCheck size={14} />
                    Verified
                  </div>
                )}

                {/* RATING */}
                <div className="absolute top-5 right-5 bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star size={14} className="text-[#F4B400] fill-[#F4B400]" />
                  {worker.rating}
                </div>

                {/* NAME */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-3xl font-black">
                    {worker.name}
                  </h3>

                  <p className="text-[#F4B400] font-semibold mt-1">
                    {worker.role}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* INFO */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} />
                    {worker.location}
                  </div>

                  <div className="text-[#111827] font-bold">{worker.price}</div>
                </div>

                {/* EXPERIENCE */}
                <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                  <BriefcaseBusiness size={16} />
                  {worker.experience}
                </div>

                {/* JOBS */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Completed</p>

                    <h4 className="text-[#111827] text-2xl font-black mt-1">
                      {worker.jobs}
                    </h4>
                  </div>

                  <button className="h-12 px-6 rounded-2xl bg-[#111827] hover:bg-black transition text-white font-semibold">
                    Hire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY */}
        {filteredWorkers.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-[32px] p-14 text-center mt-10">
            <h3 className="text-3xl font-black text-[#111827]">
              No Workers Found
            </h3>

            <p className="text-gray-500 mt-4 max-w-[500px] mx-auto leading-7">
              Try changing your search keyword, category or location to find
              more workers.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindWorkers;
