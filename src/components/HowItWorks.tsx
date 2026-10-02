import {
  Droplets,
  RefreshCw,
  TrendingDown,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Droplets,
    title: "REFILL",
    description: "Make access easy.",
  },
  {
    icon: RefreshCw,
    title: "REUSE",
    description: "Choose reusable alternatives.",
  },
  {
    icon: TrendingDown,
    title: "REDUCE",
    description: "Decrease dependence.",
  },
  {
    icon: Sparkles,
    title: "INSPIRE",
    description: "Create lasting habits.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Our It Works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-dark-blue">
              From a Bottle
              <br />
              to a Bigger Change.
            </h2>
          </div>

          {/* Right - Steps */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex items-center gap-3 md:gap-4 ">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full border-2 border-primary/20 bg-sky-light flex items-center justify-center hover:bg-primary/10 transition-colors">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-xs font-bold tracking-wider text-primary mb-1">
                      {step.title}
                    </p>
                    <p className="text-[11px] text-text-muted max-w-[100px] mx-auto leading-tight">
                      {step.description}
                    </p>
                  </div>

                  {i < steps.length - 1 && (
                    <svg
                      viewBox="0 0 60 12"
                      className="w-16 md:w-16 h-3 text-primary/40 shrink-0 -mt-12 hidden sm:block"
                      fill="none"
                    >
                      <path
                        d="M1 6h52m0 0-6-5m6 5-6 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
