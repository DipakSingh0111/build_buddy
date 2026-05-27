export default function ForContractors() {
  const benefits = [
    {
      title: "Verified Workers",
      description:
        "Hire trusted and verified workers for construction, plumbing, electrical, and more.",
      icon: "👷",
    },
    {
      title: "Quick Hiring",
      description:
        "Find skilled workers instantly without long phone calls and manual searching.",
      icon: "⚡",
    },
    {
      title: "Easy Management",
      description:
        "Manage worker requests, bookings, and communication from one place.",
      icon: "📋",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
            For Contractors
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Hire Skilled Workers Faster & Smarter
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Connect with verified electricians, plumbers, painters, masons,
            carpenters, and other professionals in just a few clicks. Save time
            and complete projects efficiently.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
              <h3 className="text-3xl font-bold text-orange-500">10K+</h3>
              <p className="text-gray-600 mt-2">Verified Workers</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
              <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
              <p className="text-gray-600 mt-2">Support Available</p>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md hover:shadow-xl">
            Find Workers
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
