import React from "react";
import {
  ShieldCheck,
  Clock3,
  Wallet,
  BadgeCheck,
  ArrowRight,
  Users,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Verified Workers",
    desc: "Every worker is background verified and professionally trained before joining our platform.",
    icon: <ShieldCheck size={34} />,
  },

  {
    id: 2,
    title: "Quick Response",
    desc: "Get skilled workers instantly for urgent construction and maintenance requirements.",
    icon: <Clock3 size={34} />,
  },

  {
    id: 3,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges and flexible worker hiring options.",
    icon: <Wallet size={34} />,
  },

  {
    id: 4,
    title: "Trusted Platform",
    desc: "Thousands of customers trust our platform for reliable & quality services.",
    icon: <BadgeCheck size={34} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#0B1220] py-28 overflow-hidden relative">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F4B400]/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full px-5 md:px-10 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-[#F4B400] text-sm font-semibold">
              <Users size={16} />
              Why Choose Us
            </div>

            {/* HEADING */}
            <h2 className="text-white text-[48px] md:text-[68px] leading-[1.05] font-black mt-7">
              We Provide
              <br />
              Trusted &<span className="text-[#F4B400]"> Skilled</span>
              <br />
              Workers.
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-lg leading-9 mt-7 max-w-[650px]">
              Our platform connects you with verified professionals for
              construction, maintenance & repair services with fast booking and
              transparent pricing.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-12">
              <div>
                <h3 className="text-[#F4B400] text-5xl font-black">10K+</h3>

                <p className="text-gray-400 mt-2">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-[#F4B400] text-5xl font-black">5K+</h3>

                <p className="text-gray-400 mt-2">Skilled Workers</p>
              </div>

              <div>
                <h3 className="text-[#F4B400] text-5xl font-black">4.9★</h3>

                <p className="text-gray-400 mt-2">Average Ratings</p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-14 h-16 px-8 rounded-2xl bg-[#F4B400] hover:bg-[#deaa05] transition-all text-black font-bold flex items-center gap-3 shadow-2xl">
              Explore Services
              <ArrowRight size={20} />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-7">
            {features.map((item) => (
              <div
                key={item.id}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:border-[#F4B400]/40 hover:-translate-y-2 transition-all duration-500"
              >
                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-[#F4B400] text-black flex items-center justify-center shadow-xl">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-white text-3xl font-black mt-8">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 leading-8 mt-5">{item.desc}</p>

                {/* BUTTON */}
                <button className="mt-8 flex items-center gap-3 text-white font-semibold group-hover:text-[#F4B400] transition-all">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-all"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
