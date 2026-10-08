import Image from "next/image";
import { MapPin } from "lucide-react";

const projects = [
  {
    period: "Since 2022",
    title: "Steel Bottle Distribution",
    description:
      "Bottles distributed to workers, students and marginalized communities as a dignified, reusable alternative to single-use plastic.",
    location: "UAE & India",
  },
  {
    period: "From 2025",
    title: "School Filter-Coolers",
    description:
      "Built with Manav Mandir Foundation after a visit to a government school in Indore revealed no access to clean, cooled water. Now serving schools and community hubs.",
    location: "Indore · Kolkata · Dubai",
  },
  {
    period: "Community Care",
    title: "Water for Strays",
    description:
      "Water pots placed for stray animals, extending the same principle of care to communities beyond the human one, through peak summer heat.",
    location: "UAE & India",
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="scroll-mt-16 py-12 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-14 items-stretch">
          {/* Left - Photo */}
          <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden  bg-sky-medium">
            <Image
              src="/jalseva.jpeg"
              alt="Ved Kedia with security staff holding the bottles they received"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[50%_65%]"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2">
              On the Ground
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-dark-blue">
              From a bottle in hand to water in the wall
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-text-muted leading-relaxed max-w-2xl">
              Jal Seva&apos;s work has evolved from immediate relief to
              permanent infrastructure — each project addressing a gap the last
              one uncovered.
            </p>

            {/* Projects, divided by lines */}
            <ul className="mt-6 border-t border-sky-100">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="grid sm:grid-cols-[9.5rem_1fr] gap-x-6 gap-y-1 py-5 border-b border-sky-100 last:border-b-0 last:pb-0"
                >
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary sm:pt-1.5">
                    {project.period}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg md:text-xl font-extrabold text-dark-blue">
                        {project.title}
                      </h3>
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-dark-blue">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {project.location}
                      </p>
                    </div>
                    <p className="mt-1.5 text-sm md:text-[15px] text-text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
