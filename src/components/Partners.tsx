import { Heart, Building2, Users } from "lucide-react";

const partners = [
  {
    icon: Building2,
    name: "Manav Mandir",
  },
  {
    icon: Heart,
    name: "RJS Seva Sadan",
  },
  {
    icon: Users,
    name: "Community Impact Partners",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-20 bg-white">
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
              JalSeva works with organizations, community groups and individuals
              who share an interest in water access, sustainability and positive
              community action.
            </p>
          </div>

          {/* Right - Partner Cards */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 md:gap-10">
            {partners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <div
                  key={i}
                  className="text-center group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-2xl bg-sky-light border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary/60" />
                  </div>
                  <p className="text-xs font-semibold text-text-dark max-w-[100px] mx-auto leading-tight">
                    {partner.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
