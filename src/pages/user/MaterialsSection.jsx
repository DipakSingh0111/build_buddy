const services = [
  {
    title: "Construction",
    icon: "🏗️",
    materials: ["Cement", "Bricks", "Sand", "Steel", "Concrete", "Tiles"],
  },
  {
    title: "Painting",
    icon: "🎨",
    materials: [
      "Wall Paint",
      "Primer",
      "Brushes",
      "Rollers",
      "Putty",
      "Polish",
    ],
  },
  {
    title: "Plumbing",
    icon: "🚰",
    materials: [
      "PVC Pipes",
      "Water Tanks",
      "Taps",
      "Pipe Fittings",
      "Wash Basin",
      "Valves",
    ],
  },
  {
    title: "Carpentry",
    icon: "🪚",
    materials: [
      "Plywood",
      "Wood Sheets",
      "Nails",
      "Laminate",
      "Door Fittings",
      "Handles",
    ],
  },
  {
    title: "Electrical",
    icon: "⚡",
    materials: ["Wires", "Switches", "LED Lights", "MCB", "Fans", "Sockets"],
  },
  {
    title: "AC Repair",
    icon: "❄️",
    materials: [
      "Copper Pipe",
      "Gas Refill",
      "Filters",
      "AC Stand",
      "Drain Pipe",
      "Insulation Tape",
    ],
  },
];

export default function MaterialsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
            Materials & Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Everything You Need For Construction Work
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore essential construction materials and services including
            plumbing, painting, carpentry, electrical work, AC repair, and more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                {service.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {service.materials.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
