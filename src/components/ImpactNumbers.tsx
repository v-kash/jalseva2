const stats = [
  {
    value: "550,000+",
    label: "Single-use plastic bottles potentially avoided",
  },
  {
    value: "16.5 tonnes",
    label: "Plastic packaging potentially avoided",
  },
  {
    value: "11,000+",
    label: "Reusable steel bottles distributed",
  },
  {
    value: "20",
    label: "Water filter coolers installed",
  },
  {
    value: "30",
    label: "Water pots for stray animals",
  },
];

export default function ImpactNumbers() {
  return (
    <section id="impact" className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        

        <div className="grid grid-cols-2 gap-x-4 gap-y-6  border border-sky-100 bg-white px-4 py-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-sky-100 lg:px-2">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 text-center">
              <p className="text-xl md:text-2xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}