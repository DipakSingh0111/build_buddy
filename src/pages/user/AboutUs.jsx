export default function AboutUs() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Side Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
            alt="Construction Workers"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-4xl font-bold text-orange-500">5K+</h3>
            <p className="text-gray-600 mt-2">Active Workers</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            India’s Smart Construction & Worker Hiring Platform
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We help contractors, homeowners, and businesses connect with
            verified skilled workers including electricians, plumbers, painters,
            carpenters, masons, and AC technicians.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our mission is to simplify worker hiring and provide trusted
            construction services with speed, quality, and transparency.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Verified Professionals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skilled and trusted workers for every type of construction job.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Hiring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Find nearby workers quickly without wasting time.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Local Availability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hire workers available in your local area instantly.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Direct Communication
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Talk directly with workers and manage projects smoothly.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-2xl">
              Find Workers
            </button>

            <button className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 text-gray-800 px-8 py-4 rounded-xl text-lg font-medium bg-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
