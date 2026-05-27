import React, { useRef } from "react";
import {
  ArrowRight,
  Wrench,
  Paintbrush,
  Hammer,
  Zap,
  Building2,
  Drill,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Electrician",
    subtitle: "24/7 Electrical Services",
    icon: <Zap size={24} />,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Plumber",
    subtitle: "Expert Plumbing Solutions",
    icon: <Wrench size={24} />,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Painter",
    subtitle: "Premium Wall Finishing",
    icon: <Paintbrush size={24} />,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Carpenter",
    subtitle: "Furniture & Wood Work",
    icon: <Hammer size={24} />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Construction",
    subtitle: "Skilled Site Workers",
    icon: <Building2 size={24} />,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Machine Operator",
    subtitle: "Heavy Machinery Experts",
    icon: <Drill size={24} />,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
  },
];

const PopularServices = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-[#F4B400] uppercase tracking-[3px] text-xs sm:text-sm font-bold">
              Our Services
            </p>

            <h2 className="text-[#111827] text-[30px] sm:text-[46px] lg:text-[60px] leading-tight font-black mt-3">
              Popular Services
            </h2>

            <p className="text-gray-500 text-sm sm:text-lg leading-7 mt-4 max-w-[700px]">
              Hire verified construction workers for repair, maintenance &
              renovation projects instantly.
            </p>
          </div>

          <button className="h-12 sm:h-14 px-6 rounded-xl bg-[#F4B400] hover:bg-[#e2ab00] transition text-black font-semibold flex items-center gap-2 w-fit shadow-lg">
            Explore Services
            <ArrowRight size={18} />
          </button>
        </div>

        {/* SLIDER */}
        <div className="relative mt-12">
          {/* LEFT */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-[-18px] top-[40%] z-20 bg-white border border-gray-200 w-12 h-12 rounded-full items-center justify-center shadow-lg hover:scale-105 transition"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-[-18px] top-[40%] z-20 bg-white border border-gray-200 w-12 h-12 rounded-full items-center justify-center shadow-lg hover:scale-105 transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* CARDS */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="
                  min-w-[78%]
                  sm:min-w-[48%]
                  lg:min-w-[23%]
                  flex-shrink-0
                  bg-white
                  rounded-[24px]
                  overflow-hidden
                  border border-gray-200
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  group
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[220px] sm:h-[240px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* ICON */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white text-[#F4B400] flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-[#F4B400] uppercase tracking-[2px] text-[10px] font-bold">
                    Verified Service
                  </p>

                  <h3 className="text-[#111827] text-[24px] font-bold mt-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm leading-6">
                    {service.subtitle}
                  </p>

                  {/* BUTTON */}
                  <button className="mt-5 flex items-center gap-2 text-[#111827] font-semibold group-hover:text-[#F4B400] transition">
                    Book Service
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
