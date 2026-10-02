import { ArrowRight } from "lucide-react";

/**
 * Replace these with your real image paths (e.g. files in /public/images
 * or imported assets).
 */
const BOY_IMAGE = "/jalseva.jpeg";
const STATION_IMAGE = "/Watercooler.png";

// Outlined water drop with a globe inside (decorative)
function GlobeDrop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 190"
      fill="none"
      stroke="#7cc6ee"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* drop outline */}
      <path d="M65 4C65 4 12 78 12 126a53 53 0 0 0 106 0C118 78 65 4 65 4Z" />
      {/* globe */}
      
    </svg>
  );
}

export default function OurWork() {
  return (
    <section id="our-work" className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-[42%_58%] min-h-[340px] lg:min-h-[360px]">
        {/* Left - Photo */}
        <div className="relative h-72 lg:h-auto">
          <img
            src={BOY_IMAGE}
            alt="Child refilling a bottle at a JalSeva water station"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right - Content panel */}
        <div className="relative bg-gradient-to-br from-sky-light to-sky-medium lg:rounded-r-[56px] lg:rounded-tl-none overflow-hidden px-6 py-10 md:px-12 lg:pl-12 lg:pr-0 flex items-center">
          <div className="relative z-10 max-w-md lg:max-w-[420px]">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3">
              Our Work
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue mb-5">
              Water Access.
              <br />
              Brighter Tomorrows.
            </h2>

            <p className="text-text-body leading-relaxed text-[15px] mb-7">
              JalSeva combines reusable bottles with accessible filtered-water
              infrastructure, encouraging people to refill rather than
              repeatedly purchase single-use bottled water.
            </p>

            <a
              href="#impact"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Decorative globe-in-drop */}
          <GlobeDrop className="hidden lg:block absolute right-6 top-10 w-40 h-auto" />

          {/* Small solid drop, bottom */}
          <svg
            viewBox="0 0 60 80"
            className="hidden lg:block absolute right-44 -bottom-2 w-14 h-auto"
            aria-hidden="true"
          >
            <path
              d="M30 2C30 2 4 36 4 54a26 26 0 0 0 52 0C56 36 30 2 30 2Z"
              fill="#d3ecfa"
            />
          </svg>

          {/* Circular inset photo */}
          <div className="hidden lg:block absolute right-0   bottom-3 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={STATION_IMAGE}
              alt="Filtered water refill station"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}