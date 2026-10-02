import { Droplet, Leaf } from "lucide-react";

// Custom "three people" icon (lucide's Users only shows two)
function CommunityIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* center person */}
      <circle cx="24" cy="14" r="5.5" />
      <path d="M14.5 33c0-5.5 4.2-9.5 9.5-9.5s9.5 4 9.5 9.5" />
      {/* left person */}
      <circle cx="10.5" cy="19.5" r="4" />
      <path d="M3 34c0-4.4 3-7.5 7.5-7.5" />
      {/* right person */}
      <circle cx="37.5" cy="19.5" r="4" />
      <path d="M45 34c0-4.4-3-7.5-7.5-7.5" />
    </svg>
  );
}

function DropIcon({ className = "" }: { className?: string }) {
  return (
    <Droplet
      className={className}
      strokeWidth={1.5}
      fill="url(#dropGradient)"
      stroke="#1f6fd6"
    />
  );
}

type IconType = "drop" | "leaf" | "people";

interface Pillar {
  icon: IconType;
  title: string;
  description: string;
  tagline: string[];
}

const pillars: Pillar[] = [
  {
    icon: "drop",
    title: "CLEAN WATER",
    description:
      "Access to clean drinking water is fundamental to healthier communities.",
    tagline: ["Better access. Better habits.", "Better health."],
  },
  {
    icon: "leaf",
    title: "LESS PLASTIC",
    description: "Encouraging reusable alternatives and refill-based habits.",
    tagline: ["Refill today.", "Reduce tomorrow."],
  },
  {
    icon: "people",
    title: "STRONGER COMMUNITIES",
    description:
      "Bringing young people and organizations together to create meaningful change.",
    tagline: ["Together, small actions", "become a movement."],
  },
];

function PillarIcon({ type }: { type: IconType }) {
  if (type === "drop") return <DropIcon className="w-11 h-11" />;
  if (type === "leaf")
    return <Leaf className="w-11 h-11 text-primary" strokeWidth={1.6} />;
  return <CommunityIcon className="w-14 h-14 text-primary" />;
}

export default function ThreePillars() {
  return (
    <section id="about" className="py-14 md:py-16 bg-white">
      {/* gradient definition used by the water drop */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="dropGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ab2f7" />
            <stop offset="100%" stopColor="#1f6fd6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-12 md:mb-14">
          <div>
            <p className="text-sm font-medium tracking-[0.18em] uppercase text-primary-light mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue">
              Three Pillars for a
              <br />
              Cleaner, Healthier Tomorrow.
            </h2>
          </div>
          <div className="flex lg:items-start lg:pt-6 lg:pl-8">
            <p className="text-text-muted leading-relaxed text-base max-w-md">
              JalSeva works at the intersection of water, sustainability and
              community action to create lasting impact.
            </p>
          </div>
        </div>

        {/* Pillars (no cards, thin vertical dividers) */}
        <div className="grid md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative text-center px-6 md:px-8 py-4 md:py-0
                         md:[&:not(:first-child)]:before:content-['']
                         md:[&:not(:first-child)]:before:absolute
                         md:[&:not(:first-child)]:before:left-0
                         md:[&:not(:first-child)]:before:top-6
                         md:[&:not(:first-child)]:before:bottom-0
                         md:[&:not(:first-child)]:before:w-px
                         md:[&:not(:first-child)]:before:bg-blue-100"
            >
              <div className="w-[104px] h-[104px] mx-auto mb-6 rounded-full bg-[#d6eafc] flex items-center justify-center">
                <PillarIcon type={pillar.icon} />
              </div>

              <h3 className="text-base font-bold tracking-wide text-primary mb-3">
                {pillar.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-5 max-w-[260px] mx-auto">
                {pillar.description}
              </p>

              <p className="text-primary font-bold text-sm leading-relaxed">
                {pillar.tagline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}