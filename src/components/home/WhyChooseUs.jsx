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
    icon: <ShieldCheck size={30} />,
  },

  {
    id: 2,
    title: "Quick Response",
    desc: "Get skilled workers instantly for urgent construction and maintenance requirements.",
    icon: <Clock3 size={30} />,
  },

  {
    id: 3,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges and flexible worker hiring options.",
    icon: <Wallet size={30} />,
  },

  {
    id: 4,
    title: "Trusted Platform",
    desc: "Thousands of customers trust our platform for reliable & quality services.",
    icon: <BadgeCheck size={30} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-[#FFF8E7] border border-[#F4B400]/20 px-5 py-2 rounded-full text-[#F4B400] text-sm font-semibold">
              <Users size={16} />
              Why Choose Us
            </div>

            {/* HEADING */}
            <h2 className="text-[#111827] text-[34px] sm:text-[52px] lg:text-[64px] leading-[1.1] font-black mt-6">
              We Provide
              <br />
              Trusted &<span className="text-[#F4B400]"> Skilled</span>
              <br />
              Workers.
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-sm sm:text-lg leading-7 sm:leading-9 mt-6 max-w-[650px]">
              Our platform connects you with verified professionals for
              construction, maintenance & repair services with fast booking and
              transparent pricing.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
              <div>
                <h3 className="text-[#F4B400] text-3xl sm:text-5xl font-black">
                  10K+
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-[#F4B400] text-3xl sm:text-5xl font-black">
                  5K+
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Skilled Workers
                </p>
              </div>

              <div>
                <h3 className="text-[#F4B400] text-3xl sm:text-5xl font-black">
                  4.9★
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Average Ratings
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-10 sm:mt-12 h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-[#F4B400] hover:bg-[#e2ab00] transition text-black font-semibold flex items-center gap-2 shadow-lg">
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((item) => (
              <div
                key={item.id}
                className="
                  group
                  bg-white
                  border
                  border-gray-200
                  rounded-[24px]
                  p-6
                  sm:p-7
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFF8E7] text-[#F4B400] flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-[#111827] text-2xl sm:text-3xl font-black mt-6">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 leading-7 mt-4 text-sm sm:text-base">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button className="mt-6 flex items-center gap-2 text-[#111827] font-semibold group-hover:text-[#F4B400] transition">
                  Learn More
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition"
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
