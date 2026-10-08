import { Droplet, Recycle } from "lucide-react";

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
      stroke="#1677bc"
    />
  );
}

type IconType = "reuse" | "refill" | "people";

interface Pillar {
  icon: IconType;
  label: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: "reuse",
    label: "Reuse",
    title: "Steel over single-use",
    description:
      "Reusable steel water bottles replace single-use plastic at the point of need — a dignified, long-lasting way for workers, students and marginalized communities to carry water safely.",
  },
  {
    icon: "refill",
    label: "Refill",
    title: "Permanent infrastructure",
    description:
      "Where the gap is structural, we go further: filter-cooler units installed in schools and community hubs give communities lasting access to safe, cold drinking water.",
  },
  {
    icon: "people",
    label: "Responsibility",
    title: "A youth-led movement",
    description:
      "Volunteers and youth ambassadors carry the model into their own communities, turning one founder's response into a network of local, student-led action.",
  },
];

function PillarIcon({ type }: { type: IconType }) {
  if (type === "refill") return <DropIcon className="w-8 h-8" />;
  if (type === "reuse")
    return <Recycle className="w-8 h-8 text-primary" strokeWidth={1.6} />;
  return <CommunityIcon className="w-10 h-10 text-primary" />;
}

export default function ThreePillars() {
  return (
    <section
      id="model"
      className="scroll-mt-16 py-14 md:py-16 bg-gradient-to-br from-sky-light to-white"
    >
      {/* gradient definition used by the water drop */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="dropGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2aa8e2" />
            <stop offset="100%" stopColor="#1677bc" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-10 md:mb-12">
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-primary mb-3">
            The Model
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue">
            Reuse. Refill. Responsibility.
          </h2>
        </div>

        {/* Pillars (no cards, thin vertical dividers) */}
        <div className="grid md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className="relative py-6 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0
                         border-t border-sky-medium first:border-t-0 md:border-t-0
                         md:[&:not(:first-child)]:before:content-['']
                         md:[&:not(:first-child)]:before:absolute
                         md:[&:not(:first-child)]:before:left-0
                         md:[&:not(:first-child)]:before:top-0
                         md:[&:not(:first-child)]:before:bottom-0
                         md:[&:not(:first-child)]:before:w-px
                         md:[&:not(:first-child)]:before:bg-sky-medium"
            >
              <div className="w-[72px] h-[72px] mb-5 rounded-full bg-sky-medium flex items-center justify-center">
                <PillarIcon type={pillar.icon} />
              </div>

              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2">
                {String(i + 1).padStart(2, "0")} — {pillar.label}
              </p>

              <h3 className="text-xl font-extrabold text-dark-blue mb-3">
                {pillar.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
