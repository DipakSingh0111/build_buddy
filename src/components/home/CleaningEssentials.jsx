import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const cleaningData = [
  {
    id: 1,
    title: "Chimney cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    rating: "4.84",
    reviews: "200K",
    price: "399",
  },
  {
    id: 2,
    title: "Fridge cleaning",
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop",
    rating: "4.83",
    reviews: "143K",
    price: "399",
  },
  {
    id: 3,
    title: "Chimney & stove cleaning",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop",
    rating: "4.78",
    reviews: "77K",
    price: "499",
  },
  {
    id: 4,
    title: "Dining table cleaning",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    rating: "4.85",
    reviews: "7K",
    price: "499",
  },
  {
    id: 5,
    title: "Cockroach control",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    rating: "4.79",
    reviews: "157K",
    price: "1249",
  },
];

const CleaningEssentials = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[42px] font-bold">
              Cleaning Essentials
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-1">
              Monthly cleaning essential services
            </p>
          </div>

          <button className="hidden md:block border border-gray-300 rounded-xl px-5 py-2 text-indigo-600 font-semibold">
            See all
          </button>
        </div>

        {/* Slider Section */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-[-20px] top-[38%] z-10 bg-white shadow-lg border border-gray-200 w-12 h-12 rounded-full items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-[-20px] top-[38%] z-10 bg-white shadow-lg border border-gray-200 w-12 h-12 rounded-full items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {cleaningData.map((item) => (
              <div
                key={item.id}
                className="
                  min-w-[75%]
                  sm:min-w-[48%]
                  md:min-w-[32%]
                  lg:min-w-[24%]
                  flex-shrink-0
                "
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-3">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
                    <Star size={14} fill="black" className="text-black" />

                    <span>{item.rating}</span>

                    <span className="text-gray-500">({item.reviews})</span>
                  </div>

                  <p className="mt-2 text-lg font-semibold">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden w-full mt-6 border border-gray-300 rounded-xl py-3 text-indigo-600 font-semibold">
          See all
        </button>
      </div>
    </section>
  );
};

export default CleaningEssentials;
