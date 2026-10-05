import {
  Bug,
  Droplets,
  Filter,
  GlassWater,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Waves,
  Wrench,
} from "lucide-react";

const problems = [
  {
    icon: Droplets,
    title: "Uncleaned tanks",
    description: "Left for months, growing bacteria and algae.",
  },
  {
    icon: Bug,
    title: "Open lids",
    description: "Insects, birds and small animals getting into the tank.",
  },
  {
    icon: Filter,
    title: "Unfiltered borewell water",
    description: "Given to children straight from the tap.",
  },
  {
    icon: ThermometerSun,
    title: "Hot iron pipes",
    description: "In summer, water reaches the children hot.",
  },
];

const solutions = [
  {
    icon: ShieldCheck,
    title: "Tanks cleaned every 3 months",
    description:
      "On a regular cleaning contract, sanitised and properly covered.",
  },
  {
    icon: Snowflake,
    title: "Filters and coolers",
    description: "Installed where needed, sized to the number of children.",
  },
  {
    icon: GlassWater,
    title: "800 ml per child",
    description: "Our daily planning figure. Many tanks are filled twice a day.",
  },
  {
    icon: Waves,
    title: "Narmada connections",
    description: "We help schools get connected wherever possible.",
  },
  {
    icon: Wrench,
    title: "Better pipes and taps",
    description:
      "Replacing hot iron pipes and old taps with proper drinking-water points.",
  },
];

const extras = [
  "Benches and carpets",
  "Fans",
  "Blackboards and green boards",
  "Sports kits",
  "Girls' toilets",
  "Bathroom cleaning",
  "Plantation",
  "Food-serving vessels",
  "Saraswati/temple spaces",
];

export default function SchoolWater() {
  return (
    <section id="schools" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-10 md:mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              Clean Water in Schools
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue">
              Every Child Deserves
              <br />a Glass of Clean Water.
            </h2>
          </div>
          <div className="flex lg:items-start lg:pt-6 lg:pl-8">
            <p className="text-text-muted leading-relaxed text-base max-w-md">
              It started with a simple question: can a child study properly if
              even the drinking water is not safe? When we visited schools,
              water was usually available. It just wasn&apos;t clean, cool or
              looked after. So we work on the whole system, from the tank to
              the tap.
            </p>
          </div>
        </div>

        {/* What we found / What we do */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-sky-100">
            <h3 className="text-lg font-extrabold text-dark-blue mb-5">
              What we found
            </h3>
            <ul className="space-y-4">
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <li key={problem.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50 border border-gray-200">
                      <Icon className="w-4 h-4 text-text-muted" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-dark">
                        {problem.title}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-sky-light to-sky-medium">
            <h3 className="text-lg font-extrabold text-dark-blue mb-5">
              What we do
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <li key={solution.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-sky-100 shadow-sm">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-dark-blue">
                        {solution.title}
                      </p>
                      <p className="text-sm text-text-body leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* More than water */}
        <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-sky-100 grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-start">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-dark-blue mb-3">
              A school needs more than a tap.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              A child also needs a clean toilet, a place to sit, a fan in summer
              and a board to learn from. Where there is a genuine need, we
              help.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:pt-1">
            {extras.map((extra) => (
              <li
                key={extra}
                className="px-4 py-2 text-sm font-medium text-dark-blue bg-sky-light rounded-full border border-sky-100"
              >
                {extra}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
