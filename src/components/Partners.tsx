import { Heart, Building2, Users } from "lucide-react";

const groups = [
  {
    icon: Heart,
    label: "NGO Partners",
    partners: ["Manav Mandir Foundation"],
  },
  {
    icon: Building2,
    label: "Corporate Partners",
    partners: ["Jhaweri Construction", "Touch"],
  },
  {
    icon: Users,
    label: "Community / Implementation Partners",
    partners: ["RJS Seva Sadan"],
  },
];

export default function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              Our Collaboration Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue">
              Change Grows
              <br />
              Through Collaboration.
            </h2>
            <p className="text-text-muted leading-relaxed text-base max-w-lg">
              Jal Seva works with organizations, community groups and
              individuals who share an interest in water access, sustainability
              and positive community action. Together, they help turn
              individual efforts into initiatives that can reach more
              communities.
            </p>
          </div>

          {/* Right - Partner groups */}
          <ul className="border-t border-sky-100">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <li
                  key={group.label}
                  className="flex items-start gap-4 py-5 border-b border-sky-100"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-light border border-primary/10">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-2">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.partners.map((partner) => (
                        <span
                          key={partner}
                          className="px-4 py-2 text-sm font-semibold text-dark-blue bg-sky-light rounded-full border border-sky-100"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
