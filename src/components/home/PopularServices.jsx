import React from "react";
import {
  ArrowRight,
  Wrench,
  Paintbrush,
  Hammer,
  Zap,
  Building2,
  Drill,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Electrician",
    subtitle: "24/7 Electrical Services",
    icon: <Zap size={28} />,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Plumber",
    subtitle: "Expert Plumbing Solutions",
    icon: <Wrench size={28} />,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Painter",
    subtitle: "Premium Wall Finishing",
    icon: <Paintbrush size={28} />,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Carpenter",
    subtitle: "Furniture & Wood Work",
    icon: <Hammer size={28} />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Construction",
    subtitle: "Skilled Site Workers",
    icon: <Building2 size={28} />,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Machine Operator",
    subtitle: "Heavy Machinery Experts",
    icon: <Drill size={28} />,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
  },
];

const PopularServices = () => {
  return (
    <section className="w-full bg-[#0B1220] py-28 overflow-hidden relative">
      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4B400]/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full px-5 md:px-10 xl:px-20">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-[#F4B400] uppercase tracking-[4px] text-sm font-bold">
              Our Services
            </p>

            <h2 className="text-white text-[45px] md:text-[65px] leading-[1.05] font-black mt-5">
              Popular Services
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6 max-w-[700px]">
              Hire verified construction workers for repair, maintenance,
              renovation & commercial projects instantly.
            </p>
          </div>

          {/* BUTTON */}
          <button className="h-16 px-8 rounded-2xl bg-[#F4B400] hover:bg-[#deaa05] transition-all text-black font-bold flex items-center gap-3 w-fit shadow-2xl">
            Explore All Services
            <ArrowRight size={20} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-[450px] rounded-[36px] overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* ICON */}
              <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-[#F4B400] text-black flex items-center justify-center shadow-2xl">
                {service.icon}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#F4B400] uppercase tracking-[3px] text-xs font-semibold">
                  Verified Service
                </p>

                <h3 className="text-white text-4xl font-black mt-3">
                  {service.title}
                </h3>

                <p className="text-gray-300 mt-4 text-lg">{service.subtitle}</p>

                {/* BUTTON */}
                <button className="mt-7 flex items-center gap-3 text-white font-semibold group-hover:text-[#F4B400] transition-all">
                  Book Service
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-all"
                  />
                </button>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#F4B400]/50 rounded-[36px] transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
